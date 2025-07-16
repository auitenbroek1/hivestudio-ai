import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LearnMoreModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Hive Studio', icon: '🏠' },
    { id: 'approach', label: 'Our Approach', icon: '⬡' },
    { id: 'results', label: 'Results', icon: '🍯' },
    { id: 'process', label: 'Process', icon: '🔄' }
  ];

  const content = {
    about: {
      title: "Connected Intelligence, Not Isolated Solutions",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Hive Studio AI emerged from decades of real-world experience bridging the gap between cutting-edge technology and practical business outcomes. Like honey flowing from a well-structured hive, we focus on delivering tangible, valuable outcomes that flow naturally from proper AI implementation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-hive-gold">Our Mission</h3>
              <p className="text-gray-400 text-sm">
                Cut through the AI hype. Deliver measurable business results. Empower leaders with practical AI skills that actually move the needle through connected, collaborative intelligence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-hive-gold">Our Focus</h3>
              <p className="text-gray-400 text-sm">
                Central Iowa's small and mid-size business community - helping leaders who know AI matters but haven't yet unlocked the sweet results from proper connected implementation.
              </p>
            </div>
          </div>
          
          <div className="bg-charcoal-light rounded-lg p-6 border border-hive-gold/20">
            <h3 className="text-lg font-semibold text-hive-gold mb-3">Why "Hive" Intelligence?</h3>
            <p className="text-gray-300 text-sm">
              Like honeycomb cells, we build AI solutions with purpose, efficiency, and interconnected strength. Each system connects to and enhances the others, creating a collaborative network that delivers exponential value.
            </p>
          </div>
        </div>
      )
    },
    approach: {
      title: "The Connected Catalyst Approach",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Meeting clients exactly where they are with the right approach for their AI maturity level through networked intelligence.
          </p>
          
          <div className="space-y-6">
            <div className="bg-charcoal-light rounded-lg p-6 border border-hive-gold/20">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">🎓</div>
                <h3 className="text-lg font-semibold text-hive-gold">The Trusted Navigator</h3>
              </div>
              <p className="text-gray-400 text-sm">
                For AI newcomers: Patient, educational guide through unfamiliar territory with connected learning approaches.
              </p>
            </div>
            
            <div className="bg-charcoal-light rounded-lg p-6 border border-hive-gold/20">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">🔗</div>
                <h3 className="text-lg font-semibold text-hive-gold">The Strategic Connector</h3>
              </div>
              <p className="text-gray-400 text-sm">
                For experienced users: Direct, strategic insight that links disparate knowledge into cohesive networks.
              </p>
            </div>
            
            <div className="bg-charcoal-light rounded-lg p-6 border border-hive-gold/20">
              <div className="flex items-center mb-3">
                <div className="text-2xl mr-3">🏗️</div>
                <h3 className="text-lg font-semibold text-hive-gold">The Results Architect</h3>
              </div>
              <p className="text-gray-400 text-sm">
                For advanced clients: Hands-on builder of connected solutions that actually work through systematic approaches.
              </p>
            </div>
          </div>
        </div>
      )
    },
    results: {
      title: "Sweet Results from Connected Intelligence",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Measurable time savings and revenue generation from networked AI systems that work together like a well-structured hive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-hive-gold">What Clients Get</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Measurable time savings and revenue generation
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Hands-on skill development that builds lasting capability
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Connected AI solutions that work together seamlessly
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Post-engagement excitement about new collaborative capabilities
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-hive-gold">Our Differentiators</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Multi-industry experience across trading, investments, software
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Fortune 500 consulting with enterprise challenges
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Entrepreneur background with business owner perspective
                </li>
                <li className="flex items-center">
                  <span className="text-honey-bright mr-2">⬡</span>
                  Anti-hype position with honest AI assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    process: {
      title: "Discovery-First Implementation Process",
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Like building a hive, we start with a strong foundation and build connected systems that grow together.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-hive-gold to-honey-bright hexagon flex items-center justify-center text-charcoal font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-hive-gold">Discovery & Assessment</h3>
                <p className="text-gray-400 text-sm">
                  Meet you where you are - from basic education to advanced implementation planning
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-hive-gold to-honey-bright hexagon flex items-center justify-center text-charcoal font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-hive-gold">Connected Planning</h3>
                <p className="text-gray-400 text-sm">
                  Design networked AI solutions that work together like honeycomb cells
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-hive-gold to-honey-bright hexagon flex items-center justify-center text-charcoal font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-hive-gold">Hands-On Implementation</h3>
                <p className="text-gray-400 text-sm">
                  Build collaborative intelligence systems through direct implementation
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-hive-gold to-honey-bright hexagon flex items-center justify-center text-charcoal font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-hive-gold">Continuous Optimization</h3>
                <p className="text-gray-400 text-sm">
                  Ongoing support and expansion of your connected intelligence hive
                </p>
              </div>
            </div>
          </div>
        </div>
      )
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
        className="bg-charcoal/95 backdrop-blur-md max-w-4xl w-full max-h-[90vh] rounded-2xl border border-hive-gold/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-hive-gold/30">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🐝</div>
            <div>
              <h2 className="text-2xl font-bold gradient-text">
                Learn More About Hive Studio
              </h2>
              <p className="text-gray-400 text-sm">
                Connected Intelligence for Business Success
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-hive-gold/30 bg-charcoal-light/50">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ backgroundColor: 'rgba(218, 165, 32, 0.1)' }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-hive-gold border-b-2 border-hive-gold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {content[activeTab].title}
              </h3>
              {content[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-hive-gold/30 bg-charcoal-light/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-300 text-sm">
                Ready to build your connected intelligence hive?
              </p>
              <p className="text-gray-400 text-xs">
                Contact us at sales@hivestudio.ai
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="hexagon-button px-6 py-2"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearnMoreModal;