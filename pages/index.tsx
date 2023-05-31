import Header from '@/components/Header/Header';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
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
