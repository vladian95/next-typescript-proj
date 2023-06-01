import styles from '../../styles/footer.module.scss';
import SocialListFooter from './SocialListFooter';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__line}></div>

        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <img
              className={styles.footer__logo__img}
              src="/img/logo.svg"
              alt="logo"
            />
            <span className={styles.footer__logo__name}>
              2010-2021
              <br />
              ИВАН
            </span>
          </div>
          <div className={styles.footer__info}>
            <div className={styles.footer__info__social}>
              <span className={styles.footer__info__social__title}>
                Поделитесь сайтом с друзьями:
              </span>
              <SocialListFooter />
            </div>
            <div className={styles.footer__info__Links}>
              <div className={styles.footer__info__Links__wrap}>
                <a href="#">Политика использования файлов cookie</a>
                <a href="#">Политика конфиденциальности</a>
              </div>

              <div className={styles.footer__info__Links__wrap}>
                <a href="#">Политика обработки персональных данных</a>
                <a href="#">
                  Согласие на обработку персональных данных клиентов -
                  физических лиц
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
