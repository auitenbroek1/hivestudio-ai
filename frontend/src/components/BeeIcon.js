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
      {/* Bee body - hexagon shaped */}
      <path
        d="M12 3 L18 7 L18 13 L12 17 L6 13 L6 7 Z"
        fill="#DAA520"
        stroke="#1a1a1a"
        strokeWidth="0.5"
      />
      
      {/* Stripes on body */}
      <path
        d="M6 8.5 L18 8.5 M6 11.5 L18 11.5"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Head */}
      <circle
        cx="12"
        cy="5"
        r="2.5"
        fill="#1a1a1a"
      />
      
      {/* Wings - left */}
      <ellipse
        cx="7"
        cy="8"
        rx="3"
        ry="5"
        fill="#FFBF00"
        fillOpacity="0.6"
        transform="rotate(-20 7 8)"
      />
      
      {/* Wings - right */}
      <ellipse
        cx="17"
        cy="8"
        rx="3"
        ry="5"
        fill="#FFBF00"
        fillOpacity="0.6"
        transform="rotate(20 17 8)"
      />
      
      {/* Antennae */}
      <path
        d="M10.5 4 L9 2 M13.5 4 L15 2"
        stroke="#1a1a1a"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <circle cx="10.5" cy="5" r="0.5" fill="white" />
      <circle cx="13.5" cy="5" r="0.5" fill="white" />
      
      {/* Stinger */}
      <path
        d="M12 16 L12 18"
        stroke="#1a1a1a"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BeeIcon;