import ArrowSvg from '../ArrowSvg/ArrowSvg';
import styles from '../../styles/portfolio.module.scss';

interface IPortfolioTabControl {
  title: string;
  isActive: boolean;
  handler: () => void;
}

const PortfolioTabControl = ({
  title,
  isActive,
  handler,
}: IPortfolioTabControl) => {
  return (
    <li className={styles.portfolio__tabs__item} onClick={handler}>
      <button className={styles.portfolio__tabs__item__btn}>
        <span
          className={styles.portfolio__tabs__item__btn__text}
          style={{ color: isActive ? '#f2f2f2' : '#b7bfd1' }}
        >
          {title}
        </span>
        {isActive && (
          <span className={styles.portfolio__tabs__item__btn__arrow}>
            <ArrowSvg />
          </span>
        )}
        <span
          className={`${styles.portfolio__tabs__item__btn__border} ${
            isActive ? styles.portfolio__tabs__item__btn__border__active : ''
          }`}
        />
      </button>
    </li>
  );
};

export default PortfolioTabControl;
