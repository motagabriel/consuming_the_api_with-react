import React from 'react';
import styles from './Select.module.css';

const Select = ({ handleClick, select }) => {
  return (
    <select className={styles.select} value={select} onChange={handleClick}>
      <option value="1" disabled>
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Select;
