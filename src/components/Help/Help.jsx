import styles from "./Help.module.scss";

import helpIcon from "../../assets/help.png";
import sobesIcon from "../../assets/sobes.png";

export const Help = () => {
  const goToGoogleForm = "";

  return (
    <section className={styles.help_section}>
      <div className={styles.help_card}>
        <img alt="" src={helpIcon} />
        <h2>Индивидуальная консультация</h2>
        <p>
          Разберём твой карьерный путь, вопросы по проектам, подготовимся к
          сложным разговорам с руководством. Поддержка и честный взгляд со
          стороны.
        </p>
      </div>
      <div className={styles.help_card}>
        <img alt="" src={sobesIcon} />
        <h2>Мок-собеседование</h2>
        <p>
          Проведу собеседование в комфортной обстановке, дам честную обратную
          связь и поддержу. Опыт 6+ лет, реальные кейсы.
        </p>
      </div>
    </section>
  );
};
