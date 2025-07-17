import React from 'react';
import { motion } from 'framer-motion';
import aiHexagonLogo from '../assets/logos/Gold Glittered AI Logo Design.png';

const BrandLogo = ({ className = '', size = 'default', variant = 'horizontal', style = {} }) => {
  const sizeConfig = {
    small: { hexSize: 32, fontSize: 'text-xs', spacing: 'gap-2' },
    default: { hexSize: 48, fontSize: 'text-lg', spacing: 'gap-3' },
    large: { hexSize: 64, fontSize: 'text-2xl', spacing: 'gap-4' }
  };

  const config = sizeConfig[size];

  // Hexagon path for SVG
  const hexagonPath = `M ${config.hexSize * 0.25} 0 L ${config.hexSize * 0.75} 0 L ${config.hexSize} ${config.hexSize * 0.433} L ${config.hexSize * 0.75} ${config.hexSize * 0.866} L ${config.hexSize * 0.25} ${config.hexSize * 0.866} L 0 ${config.hexSize * 0.433} Z`;

  return (
    <motion.div
      className={`flex items-center ${config.spacing} ${className}`}
      style={style}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hexagon with AI */}
      <motion.div
        className="relative"
        whileHover={{ 
          filter: "drop-shadow(0 0 8px #FFBF00)",
          scale: 1.05,
        }}
        animate={{
          filter: [
            "brightness(1) saturate(1)",
            "brightness(1.3) saturate(1.4)", 
            "brightness(1.1) saturate(1.2)",
            "brightness(1) saturate(1)"
          ]
        }}
        transition={{ 
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <img 
          src={aiHexagonLogo}
          alt="AI"
          width={config.hexSize}
          height={config.hexSize * 0.866}
          className="drop-shadow-lg"
          style={{
            objectFit: 'contain'
          }}
        />
      </motion.div>

      {/* HIVE STUDIO Text */}
      <motion.div
        className="flex items-center gap-1"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className={`font-extrabold text-charcoal ${
            size === 'small' ? 'text-lg' : size === 'large' ? 'text-3xl' : 'text-2xl'
          }`}
          whileHover={{
            background: "linear-gradient(45deg, #DAA520, #FFBF00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          HIVE
        </motion.span>
        <motion.span
          className={`font-bold text-charcoal-light ${
            size === 'small' ? 'text-lg' : size === 'large' ? 'text-3xl' : 'text-2xl'
          }`}
          whileHover={{
            color: "#DAA520"
          }}
          transition={{ duration: 0.3 }}
        >
          STUDIO
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default BrandLogo;