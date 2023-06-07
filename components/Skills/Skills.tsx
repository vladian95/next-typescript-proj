import MainTitle from '../MainTitle/MainTitle';
import styles from '../../styles/skills.module.scss';
import SkillsItem from './SkillsItem';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <MainTitle text="навыки" />
      </div>
      <div className="sub-container">
        <ul className={styles.skills__list}>
          <SkillsItem
            title="Веб-разработка"
            text="Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm."
            iconClass={styles.skills__web}
          />
          <SkillsItem
            title="Веб-разработка"
            text="Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm."
            iconClass={styles.skills__ux}
          />
          <SkillsItem
            title="Веб-разработка"
            text="Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm."
            iconClass={styles.skills__front}
          />
          <SkillsItem
            title="Веб-разработка"
            text="Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm."
            iconClass={styles.skills__seo}
          />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
