import styles from '../../styles/mainTitle.module.scss';

const MainTitle = ({ text }: { text: string }) => {
  return (
    <h2 className={styles.title}>
      {text.toLocaleUpperCase()} <span className={styles.title__border}></span>
    </h2>
  );
};

export default MainTitle;
