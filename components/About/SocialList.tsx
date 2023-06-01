import styles from '../../styles/socialList.module.scss';

const SocialList = () => {
  return (
    <ul className={styles.social__list}>
      <li className={styles.social__list__item}>
        <a href="#" className={styles.social__list__item__link}>
          <span className={styles.social__list__item__link__text}>
            facebook
          </span>
          <span className={styles.social__list__item__link__icon}>
            <img
              className={styles.social__list__item__link__img}
              src="/img/facebook.svg"
              alt="facebook"
            />
          </span>
        </a>
      </li>
      <li className={styles.social__list__item}>
        <a href="#" className={styles.social__list__item__link}>
          <span className={styles.social__list__item__link__text}>vk</span>
          <span className={styles.social__list__item__link__icon}>
            <img
              className={styles.social__list__item__link__img}
              src="/img/youtube.svg"
              alt="facebook"
            />
          </span>
        </a>
      </li>
      <li className={styles.social__list__item}>
        <a href="#" className={styles.social__list__item__link}>
          <span className={styles.social__list__item__link__text}>youtube</span>
          <span className={styles.social__list__item__link__icon}>
            <img
              className={styles.social__list__item__link__img}
              src="/img/vk.svg"
              alt="facebook"
            />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
