// src/components/buttons/DisabledButton.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function DisabledButton({ children, className = '' }: Props) {
  return (
    <button
      disabled
      className={`bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}