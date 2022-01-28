import React from 'react';
import styles from './Card.module.css';

const Card = ({ common, population, region, capital, flags }) => {
  return (
    <div className={styles.card}>
      <img src={flags} alt={common} />
      <div>
        <h4>{common}</h4>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
