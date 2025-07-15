import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'Connected AI Education'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'Connected AI Education',
    'Collaborative Intelligence Training',
    'Hive Intelligence Workshop',
    'Custom Hive Solutions'
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="contact-form-hexagon max-w-md w-full rounded-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl mb-2">🐝</div>
          <h2 className="text-2xl font-bold gradient-text mb-2">
            Start Your AI Hive
          </h2>
          <p className="text-gray-400 text-sm">
            Let's build connected intelligence for your business
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-charcoal-light border border-hive-gold/30 rounded-lg text-white focus:outline-none focus:border-hive-gold focus:ring-1 focus:ring-hive-gold transition-colors"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
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
            className="w-full py-3 px-6 bg-gradient-to-r from-hive-gold to-honey-bright text-charcoal font-semibold rounded-lg hover:from-honey-bright hover:to-hive-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="hexagon-spinner mr-2" />
                Connecting to Hive...
              </div>
            ) : (
              'Start Building Your Hive'
            )}
          </motion.button>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
          >
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-green-400">
              Welcome to the hive! We'll be in touch soon.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center"
          >
            <p className="text-red-400">
              Something went wrong. Please try again.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;