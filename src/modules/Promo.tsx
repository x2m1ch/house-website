import { Link } from "react-router";

import starPromo from "/assets/sections/main/promo/star.svg";

import "./styles/promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <section className="promo-header">
        <img src={starPromo} alt="" />
        <h2 className="heading-promo">
          Новая коллекция <br /> французских авторов
        </h2>
      </section>

      <section className="promo-body">
        <p className="promo-text-body">
          Сложно сказать, почему акционеры крупнейших компаний <br /> призывают
          нас к новым свершениям, которые, в свою <br /> очередь, должны быть
          заблокированы в рамках своих <br /> собственных рациональных
          ограничений. <br />
          <br /> Принимая во внимание показатели успешности, граница <br />{" "}
          обучения кадров предопределяет высокую <br /> востребованность
          направлений прогрессивного развития.
        </p>
        <Link to="/" className="show-france-picture">
          Ознакомиться
        </Link>
      </section>
    </section>
  );
};

export default Promo;
