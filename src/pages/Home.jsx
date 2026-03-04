import { About } from "../components/About/About";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Help } from "../components/Help/Help";
import styles from "./Home.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.Container}>
      <Header />
      <About />
      <Card />
      <Help />
      <Footer />
    </main>
  );
};
