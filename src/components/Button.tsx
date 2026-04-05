import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-brand-orange text-white hover:bg-orange-600',
    secondary: 'bg-white text-brand-black hover:bg-gray-100',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-4 font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-sm active:scale-95 cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
