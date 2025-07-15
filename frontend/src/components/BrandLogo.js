import React from 'react';
import { motion } from 'framer-motion';
import logoTransparent from '../assets/logos/HiveStudio-logoTransparent.png';
import horizontalLogo from '../assets/logos/HiveStudio-logoHorizontalTransparent.png';

const BrandLogo = ({ className = '', size = 'default', variant = 'full', style = {} }) => {
  const sizeClasses = {
    small: 'h-10',
    default: 'h-16',
    large: 'h-20'
  };

  const logoSrc = variant === 'horizontal' ? horizontalLogo : logoTransparent;
  
  // Use custom height if provided, otherwise use size classes
  const heightClass = className.includes('h-full') ? 'h-full' : sizeClasses[size];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center ${className}`}
      style={style}
    >
      <motion.img
        src={logoSrc}
        alt="Hive Studio AI Logo"
        className={`${heightClass} w-auto`}
        style={style}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default BrandLogo;