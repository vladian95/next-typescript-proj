import styles from '../../styles/portfolio.module.scss';

interface IPortfolioSliderItem {
  title: string;
  imgSrc: string;
  link: string;
}

const PortfolioSliderItem = ({ title, imgSrc, link }: IPortfolioSliderItem) => {
  return (
    <div className={styles.portfolio__slide}>
      <a href={link} className={styles.portfolio__slide__link}>
        <span className={styles.portfolio__slide__inner}>
          <span className={styles.portfolio__slide__text}>{title}</span>
        </span>
        <img
          src={imgSrc}
          alt={title}
          className={styles.portfolio__slide__img}
        />
      </a>
    </div>
  );
};

export default PortfolioSliderItem;
