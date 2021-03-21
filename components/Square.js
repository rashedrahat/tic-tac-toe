import React from 'react';
import styles from '../styles/Square.module.css';

const Square = ({value, onClick}) => (
    <span onClick={onClick}>
        <div className={styles.card}>
            <h1 className={value === "O" ? styles.redSign: styles.blueSign}>
               {value}
            </h1>
        </div>
    </span>
);

export default Square;
