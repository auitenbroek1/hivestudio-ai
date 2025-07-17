import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDevice } from '../contexts/DeviceContext';

const ContactForm = ({ onClose }) => {
  const device = useDevice();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'The AI Level-Up',
    'The AI-First Leader', 
    'AI Discovery Workshop',
    'AI Build Services'
  ];

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
      // Simulate form submission - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, just log the data (replace with actual API call)
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
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
    ? "bg-charcoal/95 backdrop-blur-md w-full max-w-none rounded-t-2xl p-6 relative shadow-hexagon border border-hive-gold/30 max-h-full overflow-y-auto mx-4"
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
            Get Started with AI
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={`${device.isMobileDevice ? 'space-y-4' : 'space-y-6'}`}>
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
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
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
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
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
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
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
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
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
            className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center"
          >
            <div className="text-2xl mb-2">✅</div>
            <p className="text-green-600">
              Thank you! We'll be in touch soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center"
          >
            <p className="text-red-600">
              Something went wrong. Please try again.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;