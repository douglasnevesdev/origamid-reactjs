import React from 'react';
import styles from './Button.module.css';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {

  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
