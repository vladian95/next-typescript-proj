import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio/Portfolio';
import Skills from '@/components/Skills/Skills';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
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
