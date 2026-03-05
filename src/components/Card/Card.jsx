import styles from "./Card.module.scss";

import default_card from "../../assets/default_card.png";

import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";
import card7 from "../../assets/card7.jpg";
import card8 from "../../assets/card8.jpg";
import { useState } from "react";

export const Card = () => {
  const predictions = [
    { title: "Рыба-1", desc: "Описание 1", icon: card1 },
    { title: "Рыба-2", desc: "Описание 2", icon: card2 },
    { title: "Рыба-3", desc: "Описание 3", icon: card3 },
    { title: "Рыба-4", desc: "Описание 4", icon: card4 },
    { title: "Рыба-5", desc: "Описание 5", icon: card5 },
    { title: "Рыба-6", desc: "Описание 6", icon: card6 },
    { title: "Рыба-7", desc: "Описание 7", icon: card7 },
    { title: "Рыба-8", desc: "Описание 8", icon: card8 },
  ];

  const [currentCard, setCurrentCard] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const drawCard = () => {
    if (isShuffling) return;

    setIsShuffling(true);
    setCurrentCard(null);

    setTimeout(() => {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * predictions.length);
      } while (randomIndex === lastIndex);

      setLastIndex(randomIndex);
      setCurrentCard(predictions[randomIndex]);
      setIsShuffling(false);
    }, 1200);
  };

  return (
    <section className={styles.card_section}>
      <div className={styles.card_inner}>
        <div>
          <h1>IT-Оракул</h1>
          <p>
            Загадай, выйдет ли сегодня баг, замержить ли PR или просто спроси
            совет у вселенной
          </p>
        </div>
        <div>
          <img
            className={`
    ${isShuffling ? styles.shuffling : ""}
    ${currentCard ? styles.visible : ""}
  `}
            alt=""
            src={currentCard ? currentCard.icon : default_card}
          />
        </div>

        <button
          className={styles.card_button}
          onClick={drawCard}
          disabled={isShuffling}
        >
          {isShuffling ? "Магия..." : "Тянуть карту"}
        </button>

        {currentCard && (
          <div className={`${styles.card} ${styles.cardVisible}`}>
            <h2>{currentCard.title}</h2>
            <p>{currentCard.desc}</p>
          </div>
        )}
      </div>
    </section>
  );
};
