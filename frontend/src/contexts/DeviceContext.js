import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const DeviceContext = createContext();

// Custom hook for using the device context
export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};

// Device detection utilities
const detectDevice = () => {
  const userAgent = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const vendor = navigator.vendor || '';
  
  // OS Detection
  const os = {
    isIOS: /iPhone|iPad|iPod/.test(userAgent) && !window.MSStream,
    isMacOS: /Mac/.test(platform) && !('ontouchstart' in window),
    isAndroid: /Android/.test(userAgent),
    isWindows: /Win/.test(platform),
    isLinux: /Linux/.test(platform) && !/Android/.test(userAgent),
  };
  
  // Convenience flags
  os.isApple = os.isIOS || os.isMacOS;
  os.isMobile = os.isIOS || os.isAndroid;
  os.isDesktop = !os.isMobile;
  
  // Browser Detection
  const browser = {
    isSafari: /Safari/.test(userAgent) && !/Chrome/.test(userAgent),
    isChrome: /Chrome/.test(userAgent) && /Google Inc/.test(vendor),
    isFirefox: /Firefox/.test(userAgent),
    isEdge: /Edg/.test(userAgent),
    isOpera: /OPR/.test(userAgent) || /Opera/.test(userAgent),
  };
  
  // Form Factor Detection (based on viewport)
  const getFormFactor = () => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };
  
  // Feature Detection
  const features = {
    hasTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    hasNotch: detectNotch(),
    supportsHover: window.matchMedia('(hover: hover)').matches,
    supportsDvh: CSS.supports('height', '100dvh'),
  };
  
  // Viewport Information
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    // Visual viewport accounts for keyboard, browser UI, etc.
    visualHeight: window.visualViewport?.height || window.innerHeight,
    visualWidth: window.visualViewport?.width || window.innerWidth,
    // Safe area for iOS devices
    safeAreaInsets: getSafeAreaInsets(),
    // Actual available height (accounting for browser UI)
    availableHeight: getAvailableHeight(),
  };
  
  return {
    ...os,
    browser,
    formFactor: getFormFactor(),
    features,
    viewport,
    // Utility flags
    isMobileDevice: os.isMobile,
    isTablet: getFormFactor() === 'tablet',
    isPhone: getFormFactor() === 'mobile',
    // Specific problematic combinations
    isIOSSafari: os.isIOS && browser.isSafari,
    isMobileSafari: os.isIOS && browser.isSafari && getFormFactor() === 'mobile',
  };
};

// Helper function to detect notch (iPhone X and later)
function detectNotch() {
  // Check for iOS and certain screen ratios that indicate notch
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  if (!isIOS) return false;
  
  // Check CSS environment variables (for newer devices)
  const hasNotchCSS = 
    parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)')) > 0;
  
  // Check screen dimensions (iPhone X and later)
  const screenRatio = window.screen.height / window.screen.width;
  const hasNotchRatio = screenRatio > 2;
  
  return hasNotchCSS || (isIOS && hasNotchRatio);
}

// Get safe area insets for iOS
function getSafeAreaInsets() {
  // Try to get CSS environment variables
  const getInset = (position) => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(`env(safe-area-inset-${position})`);
    return parseInt(value) || 0;
  };
  
  return {
    top: getInset('top'),
    right: getInset('right'),
    bottom: getInset('bottom'),
    left: getInset('left'),
  };
}

// Calculate actual available height (accounting for browser UI)
function getAvailableHeight() {
  // Use visual viewport if available (best for mobile)
  if (window.visualViewport) {
    return window.visualViewport.height;
  }
  
  // Fallback to inner height
  return window.innerHeight;
}

// Provider component
export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(detectDevice());
  
  useEffect(() => {
    // Update on resize or orientation change
    const handleUpdate = () => {
      setDevice(detectDevice());
    };
    
    // Debounce resize events
    let timeoutId;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleUpdate, 150);
    };
    
    // Listen for various events that might change device state
    window.addEventListener('resize', debouncedUpdate);
    window.addEventListener('orientationchange', handleUpdate);
    
    // Visual viewport changes (keyboard, browser UI)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleUpdate);
    }
    
    // Clean up
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      window.removeEventListener('orientationchange', handleUpdate);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleUpdate);
      }
      clearTimeout(timeoutId);
    };
  }, []);
  
  // Utility methods
  const deviceUtils = {
    // Get CSS-safe viewport height
    getCSSViewportHeight: () => {
      if (device.features.supportsDvh) {
        return '100dvh'; // Dynamic viewport height
      } else if (device.isIOSSafari) {
        // For older iOS Safari, use calculated height
        return `${device.viewport.availableHeight}px`;
      }
      return '100vh';
    },
    
    // Get modal-safe height (with padding for browser UI)
    getModalHeight: () => {
      const padding = device.isIOSSafari ? 40 : 20; // Extra padding for iOS
      const safeAreaPadding = device.viewport.safeAreaInsets.top + device.viewport.safeAreaInsets.bottom;
      return device.viewport.availableHeight - padding - safeAreaPadding;
    },
    
    // Check if we should use native features
    shouldUseNativeEmoji: () => {
      return device.isApple; // Use native emoji on Apple devices
    },
    
    // Get appropriate icon size based on device
    getIconSize: (baseSize = 24) => {
      if (device.formFactor === 'mobile') return baseSize * 0.9;
      if (device.formFactor === 'tablet') return baseSize * 1.1;
      return baseSize;
    },
  };
  
  // Provide both device info and utility methods
  const value = {
    ...device,
    ...deviceUtils,
  };
  
  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceContext;