import React from 'react';
import MainTitle from '../MainTitle/MainTitle';
import styles from '../../styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <MainTitle text="портфолио" />
      </div>
      <div className="sub-container">
        <div className={styles.portfolio__inner}></div>
      </div>
    </section>
  );
};

export default Portfolio;
