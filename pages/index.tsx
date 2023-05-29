import Header from '@/components/Header/Header';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main></main>
      <div className={styles.container}>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>
      </div>
    </>
  );
}
