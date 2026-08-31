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
          {card.src && <img src={card.src} className="card-image" />}
          <p className="card-creator">{card.creator}</p>
          <h3 className="card-name">{card.name}</h3>
          <p className="card-feature">{card.feature}</p>
        </section>

        <section className="card-bottom">
          <p className="card-price">{card.price}</p>
          <Link className="add-to-basket" to="/">
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
        <h2 className="catalog-head">Репродукции</h2>

        <section className="select-country-buttons">
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
                className={`${button} cards-switch-buttons`}
              >
                {button == "france"
                  ? "Франция"
                  : button == "germany"
                    ? "Германия"
                    : "Англия"}
              </button>
            );
          })}

          {/* <button
            onClick={() => setStateButtonSwitchCard("france")}
            className="france cards-switch-buttons"
          >
            Франция
          </button>
          <button
            onClick={() => setStateButtonSwitchCard("germany")}
            className="germany cards-switch-buttons"
          >
            Германия
          </button>
          <button
            onClick={() => setStateButtonSwitchCard("england")}
            className="england cards-switch-buttons"
          >
            Англия
          </button> */}
        </section>
      </section>

      <section className="catalog-body">{switchCards()}</section>
    </section>
  );
};
