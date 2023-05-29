import styles from '../styles/header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.header__container}`}></div>
    </header>
  );
};

export default Header;
