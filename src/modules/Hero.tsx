import { Link } from "react-router";

import birdHero from "/assets/sections/main/hero/bird.png";

import "./styles/hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <section className="left-hero">
        <img src={birdHero} alt="" />
      </section>

      <section className="right-hero">
        <h2 className="hero-content-head">
          Реплики картин <br /> от{" "}
          <span style={{ color: "#598D66" }}>Ink. House</span>
        </h2>
        <p className="hero-content-body">
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </p>
        <Link to="" className="hero-button">
          Продукция
        </Link>
      </section>
    </section>
  );
};
