import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'small' | 'default' | 'large';
  className?: string;
}

function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-block font-medium rounded-full transition duration-300 focus:ring-4 focus:ring-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-green-500',
    outline: 'px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400/40 hover:border-green-400 focus:ring-green-400',
    ghost: 'px-4 py-2 text-white hover:text-green-400 hover:bg-green-400/10 focus:ring-green-400'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-8 py-4',
    large: 'px-12 py-6 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;