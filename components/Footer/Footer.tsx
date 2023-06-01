import styles from '../../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__line}></div>

        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <img src="/img/logo.svg" alt="logo" />
            <span>2010-2021</span>
            <span>ИВАН</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
