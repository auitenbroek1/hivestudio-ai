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
          {/* New AI Hexagon Design */}
          <defs>
            {/* Outer border gradient */}
            <linearGradient id="outerBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="50%" stopColor="#DAA520" />
              <stop offset="100%" stopColor="#8B6914" />
            </linearGradient>
            
            {/* Inner border gradient */}
            <linearGradient id="innerBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B6914" />
              <stop offset="50%" stopColor="#B8860B" />
              <stop offset="100%" stopColor="#DAA520" />
            </linearGradient>
            
            {/* Main hexagon gradient */}
            <linearGradient id="mainHex" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="30%" stopColor="#FFBF00" />
              <stop offset="70%" stopColor="#FFC107" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer hexagon border */}
          <motion.path
            d={hexagonPath}
            fill="url(#outerBorder)"
            filter="url(#glow)"
          />
          
          {/* Inner hexagon border */}
          <motion.path
            d={`M ${config.hexSize * 0.28} ${config.hexSize * 0.05} L ${config.hexSize * 0.72} ${config.hexSize * 0.05} L ${config.hexSize * 0.92} ${config.hexSize * 0.433} L ${config.hexSize * 0.72} ${config.hexSize * 0.816} L ${config.hexSize * 0.28} ${config.hexSize * 0.816} L ${config.hexSize * 0.08} ${config.hexSize * 0.433} Z`}
            fill="url(#innerBorder)"
          />
          
          {/* Main hexagon */}
          <motion.path
            d={`M ${config.hexSize * 0.31} ${config.hexSize * 0.1} L ${config.hexSize * 0.69} ${config.hexSize * 0.1} L ${config.hexSize * 0.84} ${config.hexSize * 0.433} L ${config.hexSize * 0.69} ${config.hexSize * 0.766} L ${config.hexSize * 0.31} ${config.hexSize * 0.766} L ${config.hexSize * 0.16} ${config.hexSize * 0.433} Z`}
            fill="url(#mainHex)"
            whileHover={{
              filter: "brightness(1.1)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
        
        {/* AI Text centered in hexagon */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center font-black text-charcoal ${
            size === 'small' ? 'text-xs' : size === 'large' ? 'text-xl' : 'text-base'
          }`}
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
          }}
          whileHover={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
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