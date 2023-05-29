import { Link } from 'react-scroll';
import Logo from '../Logo/Logo';
import styles from '../../styles/header.module.scss';

const Header = () => {
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
              >
                Обо мне
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
              >
                Навыки
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
              >
                Портфолио
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
              >
                Обратная связь
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
