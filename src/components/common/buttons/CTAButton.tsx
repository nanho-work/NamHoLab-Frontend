// src/components/buttons/CTAButton.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function CTAButton({ children, onClick, type = 'button', className = '' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-bold py-3 px-6 rounded-full shadow-lg transition ${className}`}
    >
      {children}
    </button>
  );
}