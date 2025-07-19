import React from 'react';
import { motion } from 'framer-motion';
import aaronHeadshot from '../assets/logos/aaron-headshot1.png';

const FounderSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1' opacity='1'%3E%3Cpath d='M30 0 L45 8.66 L45 26 L30 34.64 L15 26 L15 8.66 Z'/%3E%3Cpath d='M0 17.32 L15 26 L15 43.3 L0 52 L-15 43.3 L-15 26 Z'/%3E%3Cpath d='M60 17.32 L75 26 L75 43.3 L60 52 L45 43.3 L45 26 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 52px',
          backgroundRepeat: 'repeat'
        }}>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-hive-gold">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hive-gold to-yellow-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Glass morphism container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-hive-gold/50 transition-all duration-300"></div>
              
              {/* Hexagon glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-hive-gold/20 via-yellow-400/20 to-hive-gold/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative p-8">
                <div className="relative">
                  {/* Hexagon border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-hive-gold via-yellow-400 to-hive-gold bg-clip-border opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img
                    src={aaronHeadshot}
                    alt="Aaron Uitenbroek - Founder of Hive Studio AI"
                    className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20"></div>
              
              <div className="relative p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Aaron Uitenbroek</h3>
                  <p className="text-hive-gold text-xl font-semibold mb-4">Founder & Chief AI Officer</p>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Aaron Uitenbroek brings over 20 years of technology leadership experience to Hive Studio AI. 
                    As a seasoned leader with decades of experience scaling startups, guiding complex 
                    transformations, and delivering solutions for Fortune 500 clients, Aaron's vision for 
                    Hive Studio AI stems from his passion for democratizing advanced AI capabilities, making 
                    sophisticated technology accessible to businesses of all sizes and helping individuals 
                    navigate the significant shifts that AI will bring.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;