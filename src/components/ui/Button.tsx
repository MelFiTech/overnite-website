/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';
import Link from 'next/link';
/* eslint-enable @typescript-eslint/no-unused-vars */

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children,
  href,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps): JSX.Element {
  const baseStyles = "inline-block rounded-lg font-medium transition-colors px-6 py-3";
  const variantStyles = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-white/10 text-white hover:bg-white/20"
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link 
        href={href}
        className={styles}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}