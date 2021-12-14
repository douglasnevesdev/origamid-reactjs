import React, { InputHTMLAttributes } from 'react';
import styles from './Button.module.css';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

const Button: React.FC<InputProps> = ({ children }: InputProps) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default Button
