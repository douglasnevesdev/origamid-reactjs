import React, { InputHTMLAttributes } from 'react';
import styles from './Button.module.css';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
}

const Button: React.FC<InputProps> = (props: InputProps) => {
  return (
    <button className={styles.button}>
      {props.children}
    </button>
  )
}

export default Button
