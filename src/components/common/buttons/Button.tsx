// src/components/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const base = "inline-block px-6 py-3 rounded transition font-medium";
  const style = "bg-blue-900 text-white hover:bg-blue-800";

  if (href) {
    return (
      <a href={href} className={`${base} ${style} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}