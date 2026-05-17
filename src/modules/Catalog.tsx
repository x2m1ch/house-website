import { useState } from "react";

import { France, Germany, England } from "./cards";

import "./styles/catalog.css";
import "./styles/cards.css"

const Catalog = () => {
  const [stateButtonSwitchCards, setStateButtonSwitchCard] = useState("france");

  const switchCards1 = () => {
    if (stateButtonSwitchCards == "france") {
      return France.map((card) => (
        <article className="card">
          <section className="card-header">
            {card.src && (
              <img src={card.src} className="card-image" />
            )}
            <p className="card-creator">{card.creator}</p>
            <h3 className="card-name">{card.name}</h3>
            <p className="card-feature">{card.feature}</p>
          </section>

          <section className="card-bottom">
            <p className="card-price">{card.price}</p>
            <a className="add-to-basket" href="/">
              В корзину
            </a>
          </section>
        </article>
      ));
    }

    if (stateButtonSwitchCards == "germany") {
      return Germany.map((card) => (
        <article className="card">
          <section className="card-header">
            {card.src && (
              <img src={card.src} className="card-image" />
            )}
            <p className="card-creator">{card.creator}</p>
            <h3 className="card-name">{card.name}</h3>
            <p className="card-feature">{card.feature}</p>
          </section>

          <section className="card-bottom">
            <p className="card-price">{card.price}</p>
            <a className="add-to-basket" href="/">
              В корзину
            </a>
          </section>
        </article>
      ));
    }

    if (stateButtonSwitchCards == "england") {
      return England.map((card) => (
        <article className="card">
          <section className="card-header">
            {card.src && (
              <img src={card.src} className="card-image" />
            )}
            <p className="card-creator">{card.creator}</p>
            <h3 className="card-name">{card.name}</h3>
            <p className="card-feature">{card.feature}</p>
          </section>

          <section className="card-bottom">
            <p className="card-price">{card.price}</p>
            <a className="add-to-basket" href="/">
              В корзину
            </a>
          </section>
        </article>
      ));
    }
  };

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

      <section className="catalog-body">
        {switchCards1()}
      </section>
    </section>
  );
};

export default Catalog;
