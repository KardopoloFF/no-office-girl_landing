import styles from "./Footer.module.scss";

import insta_logo from "../../assets/insta.png";
import telega_logo from "../../assets/telegram.png";

export const Footer = () => {
  const telegaLink = "https://t.me/valeryflame";
  const instaLink =
    "https://www.instagram.com/valeryflame?igsh=eWhldXZnaTVtZmUx";

  return (
    <footer>
      <a href={telegaLink} target="_blank" rel="noreferrer">
        <button>
          <img src={telega_logo} alt="" />
        </button>
      </a>
      <a href={instaLink} target="_blank" rel="noreferrer">
        <button>
          <img src={insta_logo} alt="" />
        </button>
      </a>
    </footer>
  );
};
