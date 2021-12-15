import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

const Input: React.FC<InputProps> = ({ label, name, type, value, onChange, error, onBlur }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>

      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
