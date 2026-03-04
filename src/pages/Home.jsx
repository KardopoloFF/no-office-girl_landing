import { Header } from "../components/Header/Header";
import styles from "./Home.module.scss";

export const HomePage = () => {
  return (
    <main className={styles.Container}>
      <Header />
    </main>
  );
};
