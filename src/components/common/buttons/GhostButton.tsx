// src/components/buttons/GhostButton.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export default function GhostButton({ children, onClick, type = 'button', className = '' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-gray-500 hover:text-gray-700 bg-transparent font-medium py-2 px-4 rounded transition ${className}`}
    >
      {children}
    </button>
  );
}