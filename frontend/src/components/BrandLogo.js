import React from 'react';
import { motion } from 'framer-motion';

const BrandLogo = ({ className = '', size = 'default', variant = 'horizontal', style = {}, mobileAnimate = false }) => {
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
          scale: 1.1,
          rotate: 360,
        }}
        animate={mobileAnimate ? {
          scale: 1.1,
          rotate: 360
        } : {}}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <motion.svg
          width={config.hexSize}
          height={config.hexSize * 0.866}
          viewBox={`0 0 ${config.hexSize} ${config.hexSize * 0.866}`}
          className="drop-shadow-lg"
        >
          {/* Hexagon background with gradient */}
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DAA520" />
              <stop offset="50%" stopColor="#FFBF00" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <motion.path
            d={hexagonPath}
            fill="url(#hexGradient)"
            stroke="#B8860B"
            strokeWidth="2"
            filter="url(#glow)"
            whileHover={{
              filter: "brightness(1.2)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
        
        {/* AI Text centered in hexagon */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center font-bold text-charcoal ${
            size === 'small' ? 'text-xs' : size === 'large' ? 'text-xl' : 'text-base'
          }`}
          whileHover={{
            textShadow: "0 0 8px rgba(218, 165, 32, 0.8)"
          }}
          transition={{ duration: 0.3 }}
        >
          AI
        </motion.div>
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