import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = ({ label, name, type }: InputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} className={styles.input} type={type} />
    </div>
  );
}

export default Input;
