import styles from '../../styles/about.module.scss';
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <MainTitle text="Обо мне" />
      </div>
      <div className={`sub-container ${styles.about__sub_container}`}>
        <img className={styles.about__img} src="/img/avatar.png" alt="avatar" />
        <div className={styles.about__inner}>
          <h3 className={styles.about__title}>
            <span className={styles.about__title__border}>
              <span className={styles.about__title__border__arrow}>
                <ArrowSvg />
              </span>
              <span className={styles.about__title__border__line} />
            </span>
          </h3>
          <p className={styles.about__text}>
            Расположенный в Хартфорде, штат Коннектикут. В настоящее время я
            работаю по совместительству Удаленным младшим веб-разработчиком для
            Coolor, расположенного в Лас-Вегасе.Я ищу, чтобы взять на себя
            больше работы и повысить свои навыки в качестве веб-разработчика.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
