import { Link } from 'react-scroll';
import Logo from '../Logo/Logo';
import styles from '../../styles/header.module.scss';
import { useMediaQuery } from '@/hooks';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery(640);
  const [menuOpen, setMenuOpen] = useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;

  const handleToggleMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.toggle(
      'overflow-hidden'
    );
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.remove(
      'overflow-hidden'
    );
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {isMobile && (
          <button
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}
            onClick={handleToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        )}
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
