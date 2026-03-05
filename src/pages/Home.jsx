import { About } from "../components/About/About";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import { FormCard } from "../components/FormCard/FormCard";
import { Header } from "../components/Header/Header";
import { Help } from "../components/Help/Help";
import styles from "./Home.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.Container}>
      <Header />

      <section className={styles.content}>
        <About />
        <Card />
        <Help />
        <FormCard />
      </section>

      <Footer />
    </main>
  );
};
