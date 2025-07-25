import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDevice } from '../contexts/DeviceContext';

const ContactForm = ({ onClose }) => {
  const device = useDevice();

  // Load the Go High Level form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.1prompt.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Dynamic styling based on device
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: device.isMobileDevice ? `${device.getModalHeight()}px` : '100vh',
    paddingTop: device.viewport.safeAreaInsets.top,
    paddingBottom: device.viewport.safeAreaInsets.bottom,
    paddingLeft: device.viewport.safeAreaInsets.left,
    paddingRight: device.viewport.safeAreaInsets.right,
  };

  const modalClasses = device.isMobileDevice
    ? "bg-charcoal/95 backdrop-blur-md w-full max-w-none rounded-t-2xl p-6 relative shadow-hexagon border border-hive-gold/30 max-h-full overflow-y-auto mx-4 overflow-x-hidden"
    : "bg-charcoal/95 backdrop-blur-md max-w-2xl w-full rounded-2xl p-8 relative shadow-hexagon border border-hive-gold/30 max-h-[90vh] overflow-y-auto";

  const containerClasses = device.isMobileDevice
    ? "flex items-end justify-center z-50 px-4"
    : "flex items-center justify-center z-50 p-4";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-black/50 ${containerClasses}`}
      style={overlayStyle}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: device.isMobileDevice ? 100 : 0 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: device.isMobileDevice ? 100 : 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-full overflow-hidden">
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className={`absolute ${device.isMobileDevice ? 'top-2 right-2' : 'top-4 right-4'} text-gray-400 hover:text-white transition-colors z-10`}
          >
            <svg className={`${device.isMobileDevice ? 'w-8 h-8' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Header */}
          <div className={`${device.isMobileDevice ? 'mb-4' : 'mb-6'}`}>
            <h2 className={`${device.isMobileDevice ? 'text-xl' : 'text-2xl'} font-bold gradient-text mb-2`}>
              Start Your AI Journey
            </h2>
            <p className="text-gray-300 text-sm">
              Connect with our AI experts to discover how Hive Studio can transform your business.
            </p>
          </div>

          {/* Go High Level Form Embed */}
          <div className="w-full" style={{ minHeight: '600px', height: device.isMobileDevice ? '70vh' : '934px' }}>
            <iframe
              src="https://link.1prompt.com/widget/form/VUPazZde6LSJoFI3wogV"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '3px'
              }}
              id="inline-VUPazZde6LSJoFI3wogV"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Engagement Agent"
              data-height="934"
              data-layout-iframe-id="inline-VUPazZde6LSJoFI3wogV"
              data-form-id="VUPazZde6LSJoFI3wogV"
              title="Engagement Agent"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;