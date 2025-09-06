import React from 'react';

interface IslamicIconProps {
  type: 'star' | 'crescent' | 'pattern';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const IslamicIcon: React.FC<IslamicIconProps> = ({ type, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  if (type === 'star') {
    return (
      <svg
        className={`${sizeClasses[size]} ${className}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l2.4 7.2H22l-6 4.8L18.4 22 12 17.2 5.6 22 8 14l-6-4.8h7.6L12 2z" />
        <path d="M12 6l1.2 3.6H17l-3 2.4L15.2 16 12 13.2 8.8 16 10 12l-3-2.4h3.8L12 6z" fill="white" />
      </svg>
    );
  }

  if (type === 'crescent') {
    return (
      <svg
        className={`${sizeClasses[size]} ${className}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10c-1.9 0-3.7-0.5-5.2-1.4 2.4-1.4 4-4 4-7.1s-1.6-5.7-4-7.1c1.5-0.9 3.3-1.4 5.2-1.4z" />
      </svg>
    );
  }

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="arabesque" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0Z" 
              stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      </pattern>
      <rect width="100" height="100" fill="url(#arabesque)" />
    </svg>
  );
};