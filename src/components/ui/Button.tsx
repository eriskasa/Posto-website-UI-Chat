import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  variant?: 'add' | 'toggle';
  isToggled?: boolean; // for toggle buttons
}

const Button: React.FC<ButtonProps> = ({onClick, children, className, variant, isToggled}) => {
  const baseStyles = className;
  const addStyles = className;
  const toggleStyles = isToggled;
  
  const styles = variant === 'add' ? addStyles : toggleStyles;

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles} ${className}`}>
      {children}
    </button>
  )
}

export default Button;