import styles from "./FormCard.module.scss";

export const FormCard = () => {
  const goToGoogleForm = "";

  return (
    <div className={styles.form_card}>
      <div className={styles.inner}>
        <h1>Заполни форму, и я свяжусь с тобой</h1>
        <a rel="noreferrer" target="_blank" href={goToGoogleForm}>
          <button className={styles.help_button}>Записаться</button>
        </a>
        <span>
          Отвечаю в течение дня. Магию не гарантирую, но поддержку — да.
        </span>
      </div>
    </div>
  );
};
