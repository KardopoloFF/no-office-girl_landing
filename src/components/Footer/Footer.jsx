import styles from "./Footer.module.scss";

import insta_logo from "../../assets/insta.png";
import telega_logo from "../../assets/telegram.png";

export const Footer = () => {
  const telegaLink = "https://t.me/valeryflame";
  const instaLink =
    "https://www.instagram.com/valeryflame?igsh=eWhldXZnaTVtZmUx";

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <h1>Мои соцсети</h1>

        <div className={styles.footer_buttons}>
          <a href={telegaLink} target="_blank" rel="noreferrer">
            <button className={styles.footer_action_button}>
              <img src={telega_logo} alt="Telegram" />
            </button>
          </a>

          <a href={instaLink} target="_blank" rel="noreferrer">
            <button className={styles.footer_action_button}>
              <img src={insta_logo} alt="Instagram" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};
