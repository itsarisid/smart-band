import React, { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'light' | 'darker';
  className?: string;
  padding?: 'none' | 'small' | 'default' | 'large';
}

function Card({
  children,
  variant = 'default',
  className = '',
  padding = 'default',
  ...props
}: CardProps) {
  const baseClasses = 'bg-gradient-radial-dark border border-gray-900/30 rounded-5xl overflow-hidden';

  const variantClasses = {
    default: '',
    light: 'bg-gradient-radial-dark-light',
    darker: 'bg-gradient-radial-darker'
  };

  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-8',
    large: 'p-16'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Card;