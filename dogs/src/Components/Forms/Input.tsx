import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} name={props.name} className={styles.input} type={props.type} />
    </div>
  );
}

export default Input;
