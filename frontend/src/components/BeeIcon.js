import React from 'react';

const BeeIcon = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bee body - hexagon shaped - moved down 2 units for better centering */}
      <path
        d="M12 5 L18 9 L18 15 L12 19 L6 15 L6 9 Z"
        fill="#DAA520"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      />
      
      {/* Stripes on body */}
      <path
        d="M6 10.5 L18 10.5 M6 13.5 L18 13.5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Head */}
      <circle
        cx="12"
        cy="7"
        r="2.5"
        fill="#1a1a1a"
      />
      
      {/* Wings - left */}
      <ellipse
        cx="7"
        cy="10"
        rx="3"
        ry="5"
        fill="#FFBF00"
        fillOpacity="0.6"
        transform="rotate(-20 7 10)"
      />
      
      {/* Wings - right */}
      <ellipse
        cx="17"
        cy="10"
        rx="3"
        ry="5"
        fill="#FFBF00"
        fillOpacity="0.6"
        transform="rotate(20 17 10)"
      />
      
      {/* Antennae */}
      <path
        d="M10.5 6 L9 4 M13.5 6 L15 4"
        stroke="#1a1a1a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <circle cx="10.5" cy="7" r="0.5" fill="white" />
      <circle cx="13.5" cy="7" r="0.5" fill="white" />
      
      {/* Stinger */}
      <path
        d="M12 18 L12 20"
        stroke="#1a1a1a"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BeeIcon;