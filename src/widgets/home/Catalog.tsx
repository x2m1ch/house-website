import { useState } from "react";
import { Link } from "react-router";

import { type Card, France, Germany, England } from "../../entities/home/cards";

import "../../app/styles/pages/home/widgets/catalog.css";
import "../../app/styles/pages/home/widgets/cards.css";

const BUTTONS = ["france", "germany", "england"];

export const Catalog = () => {
  const [stateButtonSwitchCards, setStateButtonSwitchCard] = useState("france");

  const renderCard = (data: Card[]) =>
    data.map((card) => (
      <article id={stateButtonSwitchCards} className="card">
        <section className="card-header">
          {card.src && <img src={card.src} />}
          <p className="card-creator">{card.creator}</p>
          <h3>{card.name}</h3>
          <p>{card.feature}</p>
        </section>

        <section className="card-bottom">
          <p>{card.price}</p>
          <Link className="button" to="">
            В корзину
          </Link>
        </section>
      </article>
    ));

  const switchCards = () =>
    stateButtonSwitchCards == "germany"
      ? renderCard(Germany)
      : stateButtonSwitchCards == "england"
        ? renderCard(England)
        : renderCard(France);

  return (
    <section className="catalog">
      <section className="catalog-header">
        <h2>Репродукции</h2>

        <section>
          {BUTTONS.map((button) => {
            const isActive = button == stateButtonSwitchCards;

            return (
              <button
                onClick={() => setStateButtonSwitchCard(button)}
                style={
                  isActive
                    ? { backgroundColor: "#376b44", color: "#f4f6f5" }
                    : undefined
                }
                className={`${button}`}
              >
                {button == "france"
                  ? "Франция"
                  : button == "germany"
                    ? "Германия"
                    : "Англия"}
              </button>
            );
          })}
        </section>
      </section>

      <section className="catalog-body">{switchCards()}</section>
    </section>
  );
};
