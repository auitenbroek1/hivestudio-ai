import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDevice } from '../contexts/DeviceContext';
import BeeIcon from './BeeIcon';

// Configuration - Use environment variable for webhook URL in production  
const N8N_WEBHOOK_URL = process.env.REACT_APP_N8N_WEBHOOK_URL || 'https://i10aaron.app.n8n.cloud/webhook-test/37666134-bbbb-4815-ac84-d8d8ccbd0c9d';

// Fallback responses for when n8n is unavailable
const FALLBACK_RESPONSES = {
  'hello': "Hello! Welcome to Hive Studio. I'm here to help you explore how connected AI can work for your business. Our full AI assistant will be available soon!",
  'services': "We offer four main services: AI Level-Up, AI Power User, AI Discovery Workshop, and AI Build Services. Our full AI assistant will be available soon to provide detailed information!",
  'pricing': "Our pricing depends on the scope and complexity of your needs. I'd recommend scheduling a consultation to discuss your specific requirements. You can reach us at sales@hivestudio.ai.",
  'contact': "You can reach us at sales@hivestudio.ai or use our contact form. Would you like me to help you get started with that?",
  'ai': "AI at Hive Studio is all about connected intelligence - systems that work together like a hive rather than isolated tools. This collaborative approach delivers much better results.",
  'default': "Thank you for your interest! Our full AI assistant is being connected. For immediate assistance, please contact sales@hivestudio.ai or use our contact form."
};

const AIChatWidget = () => {
  const device = useDevice();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI assistant from Hive Studio. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userId, setUserId] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);

  // Generate unique user ID on component mount
  useEffect(() => {
    const generateUserId = () => {
      return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    };
    setUserId(generateUserId());
  }, []);

  // Check if user is online
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Mobile pulse animation
  useEffect(() => {
    if (!device.isMobileDevice) return;
    
    const pulseInterval = setInterval(() => {
      setShouldPulse(true);
      setTimeout(() => setShouldPulse(false), 1000);
    }, 5000);
    
    return () => clearInterval(pulseInterval);
  }, [device.isMobileDevice]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await sendMessageToN8N(currentInput);
      
      // Handle multiple response parts (Message_1, Message_2, etc.)
      let botMessages = [];
      if (response.Message_1) {
        botMessages.push({
          id: messages.length + 2,
          type: 'bot',
          content: response.Message_1,
          timestamp: new Date()
        });
      }
      if (response.Message_2) {
        botMessages.push({
          id: messages.length + 3,
          type: 'bot',
          content: response.Message_2,
          timestamp: new Date()
        });
      }
      
      // If no structured response, use the full response
      if (botMessages.length === 0) {
        botMessages.push({
          id: messages.length + 2,
          type: 'bot',
          content: typeof response === 'string' ? response : JSON.stringify(response),
          timestamp: new Date()
        });
      }
      
      setMessages(prev => [...prev, ...botMessages]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Try fallback response first
      const fallbackResponse = getFallbackResponse(currentInput.toLowerCase());
      const fallbackMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: fallbackResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const getFallbackResponse = (input) => {
    const keywords = Object.keys(FALLBACK_RESPONSES);
    const matchedKeyword = keywords.find(keyword => 
      input.includes(keyword) || input.includes(keyword.slice(0, -1))
    );
    
    return FALLBACK_RESPONSES[matchedKeyword] || FALLBACK_RESPONSES.default;
  };

  const sendMessageToN8N = async (message) => {
    const payload = {
      payload: message,
      userID: userId,
      userFullName: "Website Visitor",
      userEmail: "",
      userPhone: "",
      sessionId: userId,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={!device.isMobileDevice ? { scale: 1.1 } : {}}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={device.isMobileDevice && shouldPulse ? {
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(218, 165, 32, 0.5)",
            "0 0 30px rgba(218, 165, 32, 0.8)",
            "0 0 20px rgba(218, 165, 32, 0.5)"
          ]
        } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-hive-gold to-honey-bright text-charcoal rounded-full shadow-glow-honey z-50 flex items-center justify-center text-2xl hover:shadow-glow transition-all duration-300"
      >
        {isOpen ? '✕' : (device.shouldUseNativeEmoji() ? '🐝' : <BeeIcon size={device.getIconSize(44)} />)}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-charcoal/95 backdrop-blur-md rounded-2xl shadow-hexagon z-40 flex flex-col border border-hive-gold/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-hive-gold/30">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  isOnline 
                    ? (isTyping ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 animate-pulse')
                    : 'bg-red-400'
                }`}></div>
                <span className="text-white font-semibold">
                  {isTyping ? 'Hive Assistant is typing...' : 'Hive Assistant'}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {isOnline ? 'Connected AI' : 'Offline'}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-hive-gold text-charcoal' 
                      : 'bg-charcoal-light text-white border border-hive-gold/20'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-charcoal/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-charcoal-light text-white p-3 rounded-lg border border-hive-gold/20">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-hive-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-hive-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-hive-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-hive-gold/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isOnline ? "Ask about our AI services..." : "Offline - check connection"}
                  disabled={!isOnline || isTyping}
                  className={`flex-1 px-3 py-2 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors ${
                    (!isOnline || isTyping) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
                <motion.button
                  whileHover={isOnline && !isTyping ? { scale: 1.05 } : {}}
                  whileTap={isOnline && !isTyping ? { scale: 0.95 } : {}}
                  onClick={handleSend}
                  disabled={!isOnline || isTyping || !inputValue.trim()}
                  className={`px-4 py-2 bg-gradient-to-r from-hive-gold to-honey-bright text-charcoal rounded-lg transition-all duration-300 ${
                    (!isOnline || isTyping || !inputValue.trim()) 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:from-honey-bright hover:to-hive-gold'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;