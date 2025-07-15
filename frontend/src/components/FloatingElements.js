import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const hexagons = [
    { id: 1, size: 'w-16 h-16', position: 'top-20 left-20', delay: 0 },
    { id: 2, size: 'w-12 h-12', position: 'top-40 right-32', delay: 0.5 },
    { id: 3, size: 'w-20 h-20', position: 'bottom-40 left-16', delay: 1 },
    { id: 4, size: 'w-14 h-14', position: 'bottom-20 right-20', delay: 1.5 },
    { id: 5, size: 'w-10 h-10', position: 'top-1/2 left-1/4', delay: 2 },
    { id: 6, size: 'w-18 h-18', position: 'top-1/3 right-1/4', delay: 2.5 },
  ];

  const bees = [
    { id: 1, startPosition: 'top-32 left-32', delay: 0 },
    { id: 2, startPosition: 'bottom-32 right-32', delay: 3 },
    { id: 3, startPosition: 'top-1/2 left-1/3', delay: 6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Hexagons */}
      {hexagons.map((hexagon) => (
        <motion.div
          key={hexagon.id}
          className={`absolute ${hexagon.size} ${hexagon.position} opacity-20`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.2, 0.3, 0.1],
            scale: [0, 1, 1.1, 1, 0.9],
            rotate: [0, 180, 360],
            y: [0, -20, 0, -10, 0]
          }}
          transition={{
            duration: 10,
            delay: hexagon.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-hive-gold to-honey-bright hexagon" />
        </motion.div>
      ))}

      {/* Floating Bees */}
      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className={`absolute ${bee.startPosition} text-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: bee.delay }}
        >
          <motion.div
            animate={{
              x: [0, 100, 200, 300, 200, 100, 0],
              y: [0, -30, 20, -40, 30, -20, 0],
              rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
            }}
            transition={{
              duration: 15,
              delay: bee.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🐝
          </motion.div>
        </motion.div>
      ))}

      {/* Honeycomb Pattern Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 26L45 34.64v17.32L30 60 15 51.36V34.04L30 26z' stroke='%23DAA520' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 52px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 52px', '0px 104px', '60px 156px', '0px 208px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Honey Drops */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-honey-bright rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-honey-bright/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-hive-gold/10 to-transparent" />
    </div>
  );
};

export default FloatingElements;