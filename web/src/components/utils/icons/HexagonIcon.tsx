import React from 'react';

const HexagonIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ fill: '#00FFFF', filter: 'drop-shadow(0 0 4px rgba(0, 255, 255, 0.5))' }}
  >
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
  </svg>
);

export default HexagonIcon;
