import React from 'react';
import { GoSearch } from 'react-icons/go';
import styles from './Input.module.css';

const Input = ({ type, placeholder, handleChange }) => {
  return (
    <div className={`${styles.input}`}>
      <GoSearch />
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};
export default Input;
