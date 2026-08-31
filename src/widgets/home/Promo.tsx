import { Link } from "react-router";

import starPromo from "/assets/sections/main/promo/star.svg";

import "../../app/styles/pages/home/widgets/promo.css";

export const Promo = () => {
  return (
    <section className="promo">
      <section className="promo-header">
        <img src={starPromo} alt="" />
        <h2 className="heading-promo">Новая коллекция французских авторов</h2>
      </section>

      <section className="promo-body">
        <p className="promo-text-body">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений. <br /> <br />{" "}
          Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного
          развития.
        </p>
        <Link to="/" className="show-france-picture">
          Ознакомиться
        </Link>
      </section>
    </section>
  );
};
