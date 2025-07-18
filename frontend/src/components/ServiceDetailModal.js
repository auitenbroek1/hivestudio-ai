import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const serviceDetails = {
    1: {
      title: "AI Level-Up",
      subtitle: "Your foundation for AI-powered growth",
      description: "Perfect for teams and individuals who recognize AI's importance but haven't yet unlocked its full potential. We provide practical, jargon-free guidance to help you build confidence and create immediate value.",
      approach: "We meet you exactly where you are with a clear, methodical approach that focuses on real business applications rather than theoretical concepts.",
      outcomes: [
        "Clear understanding of AI fundamentals and business applications",
        "Practical frameworks for implementing AI in your daily workflows", 
        "Hands-on experience with proven AI tools and techniques",
        "Measurable improvements in productivity and decision-making",
        "Foundation for advanced AI adoption across your organization"
      ],
      ideal: "Teams new to AI implementation, business leaders evaluating AI opportunities, organizations seeking practical AI education without technical complexity."
    },
    2: {
      title: "AI Power User",
      subtitle: "Advanced AI implementation for experienced users",
      description: "Designed for professionals already using AI who want to unlock advanced capabilities and workflows. We focus on sophisticated tools, automation, and strategic applications that drive competitive advantage.",
      approach: "We provide curated access to cutting-edge AI tools and proven workflows used by top professionals, with hands-on implementation support tailored to your specific goals.",
      outcomes: [
        "Advanced AI toolkit with professional-grade platforms and tools",
        "Custom workflows for research, strategy, analysis, and automation",
        "AI agents and automations that expand your capabilities",
        "Strategic insight into emerging AI developments and opportunities",
        "Working AI systems ready for immediate implementation"
      ],
      ideal: "Current AI users seeking advanced capabilities, professionals wanting to stay ahead of AI developments, teams ready to implement sophisticated AI workflows."
    },
    3: {
      title: "AI Discovery Workshop",
      subtitle: "Strategic AI assessment and implementation roadmap",
      description: "A comprehensive engagement for organizations serious about AI adoption. We conduct thorough analysis, identify high-value opportunities, and deliver actionable roadmaps for successful AI implementation.",
      approach: "Our structured workshop process combines rigorous analysis with practical strategy development, ensuring you have clear direction and stakeholder confidence for your AI initiatives.",
      outcomes: [
        "Complete AI readiness assessment and capability analysis",
        "Prioritized use cases aligned with business goals and ROI potential",
        "Detailed implementation roadmap with timeline and resource requirements",
        "Risk assessment and mitigation strategies for successful adoption",
        "Internal presentation materials and stakeholder communication tools"
      ],
      ideal: "Organizations evaluating AI adoption, leadership teams developing AI strategy, companies needing comprehensive AI assessment and planning."
    },
    4: {
      title: "AI Build Services", 
      subtitle: "Custom AI solution development and implementation",
      description: "Direct collaboration to build the AI solutions your organization needs. We bring technical expertise and business understanding to create custom tools, workflows, and systems that solve your specific challenges.",
      approach: "We work closely with your team to understand requirements, design appropriate solutions, and implement AI-powered tools that integrate seamlessly with your existing operations.",
      outcomes: [
        "Custom AI tools and workflows designed for your specific use case",
        "Professional implementation with thorough testing and refinement",
        "Integration with existing systems and business processes", 
        "Comprehensive documentation and team training for ongoing use",
        "Ongoing support and optimization to ensure continued value"
      ],
      ideal: "Organizations with specific AI implementation needs, teams ready to build custom AI solutions, companies seeking technical partnership for AI development."
    }
  };

  const detail = serviceDetails[service.id];
  if (!detail) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-hive-gold to-honey-bright p-6 rounded-t-lg">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-charcoal">{detail.title}</h2>
                      <p className="text-charcoal-light">{detail.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-charcoal hover:text-charcoal-light transition-colors text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{detail.description}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Our Approach</h3>
                  <p className="text-gray-700 leading-relaxed">{detail.approach}</p>
                </div>

                {/* Key Outcomes */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Key Outcomes</h3>
                  <ul className="space-y-2">
                    {detail.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="hexagon-bullet bg-hive-gold"></div>
                        <span className="text-gray-700 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Ideal For</h3>
                  <p className="text-gray-700 leading-relaxed">{detail.ideal}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-lg">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.button
                    onClick={() => {
                      onClose();
                      // Scroll to contact section or open contact form
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hexagon-button px-6 py-3 honey-glow"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetailModal;