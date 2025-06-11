// src/components/buttons/SecondaryButton.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function SecondaryButton({ children, onClick, type = 'button', className = '' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded transition ${className}`}
    >
      {children}
    </button>
  );
}