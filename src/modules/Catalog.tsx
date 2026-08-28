import { useState } from "react";
import { Link } from "react-router";

import { type Card, France, Germany, England } from "./cards";

import "./styles/catalog.css";
import "./styles/cards.css";

export const Catalog = () => {
  const [stateButtonSwitchCards, setStateButtonSwitchCard] = useState("france");

  const renderCard = (data: Card[]) =>
    data.map((card) => (
      <article className="card">
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
          <button
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
          </button>
        </section>
      </section>

      <section className="catalog-body">{switchCards()}</section>
    </section>
  );
};

export default Catalog;
