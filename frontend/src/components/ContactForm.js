import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDevice } from '../contexts/DeviceContext';

const ContactForm = ({ onClose }) => {
  const device = useDevice();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyWebsite: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'AI Level-Up',
    'AI Power User', 
    'AI Discovery Workshop',
    'AI Build Services'
  ];

  // Normalize URL to ensure consistent format
  const normalizeUrl = (url) => {
    if (!url) return '';
    
    // Trim whitespace
    url = url.trim();
    
    // If no protocol, add https://
    if (!url.match(/^https?:\/\//i)) {
      // If it starts with www., add https://
      if (url.match(/^www\./i)) {
        url = 'https://' + url;
      } else {
        // Otherwise, add https://www. (unless it's a subdomain)
        if (url.includes('.') && !url.startsWith('http')) {
          url = 'https://' + url;
        }
      }
    }
    
    // Ensure lowercase protocol
    url = url.replace(/^https?/i, match => match.toLowerCase());
    
    return url;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to n8n webhook which handles GHL integration
      const n8nWebhookUrl = process.env.REACT_APP_N8N_CONTACT_WEBHOOK || 
        'https://i10aaron.app.n8n.cloud/webhook/7430cdc6-3ffb-4a76-9ba7-4fe04a183265';
      
      const payload = {
        // Standard fields from old form
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyWebsite: normalizeUrl(formData.companyWebsite),
        message: formData.message,
        service: formData.service,
        
        // Additional metadata that might be needed
        source: 'hivestudio.ai',
        formId: 'contact-form',
        timestamp: new Date().toISOString(),
        
        // GHL-specific fields if needed
        userFullName: formData.name,
        userEmail: formData.email,
        userPhone: formData.phone,
        website: normalizeUrl(formData.companyWebsite) // Alternative field name for GHL
      };

      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Form submission successful:', result);
      
      setSubmitStatus('success');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyWebsite: '',
        message: '',
        service: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

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
    : "bg-charcoal/95 backdrop-blur-md max-w-md w-full rounded-2xl p-8 relative shadow-hexagon border border-hive-gold/30";

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
          <div className={`${device.isMobileDevice ? 'mb-6' : 'mb-8'}`}>
            <h2 className={`${device.isMobileDevice ? 'text-xl' : 'text-2xl'} font-bold gradient-text mb-2`}>
              Start Your AI Journey
            </h2>
            <p className="text-gray-300 text-sm">
              Connect with our AI experts to discover how Hive Studio can transform your business.
            </p>
          </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={`${device.isMobileDevice ? 'space-y-4' : 'space-y-6'} w-full max-w-full`}>
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Company Website
            </label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="https://yourcompany.com"
            />
            {formData.companyWebsite && (
              <p className="text-xs text-gray-400 mt-1">
                Will be formatted as: {normalizeUrl(formData.companyWebsite)}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full min-w-0 px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors resize-none"
              placeholder="Tell us about your AI goals and challenges..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hexagon-button w-full text-lg honey-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-900/50 border border-green-500/50 rounded-lg text-center"
          >
            <div className="text-2xl mb-2">✅</div>
            <p className="text-green-300">
              Thank you! We'll be in touch soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-center"
          >
            <p className="text-red-300">
              Something went wrong. Please try again or email us at sales@hivestudio.ai
            </p>
          </motion.div>
        )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;