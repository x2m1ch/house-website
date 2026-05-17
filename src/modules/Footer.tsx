import logo from "/assets/favicon/icon.svg";
import facebook from "/assets/sections/footer/facebook.svg";
import youtube from "/assets/sections/footer/youtube.svg";
import instagram from "/assets/sections/footer/instagram.svg";

import "./styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <div className="logo">
          <img src={logo} alt="" />
          <h2 className="icon">Ink. House</h2>
        </div>

        <section className="footer-left-bottom">
          <p style={{ color: "#2C2D35" }}>+7 (999) 543-54-54</p>
          <p>Мастерская</p>
        </section>
      </section>

      <section className="footer-center">
        <section className="footer-column-one footer-center-columns">
          <h2>Репродукции</h2>
          <section className="columns-body">
            <p>Франция</p>
            <p>Германия</p>
            <p>Англия</p>
          </section>
        </section>

        <section className="footer-column-two footer-center-columns">
          <h2>Новинки</h2>
          <section className="columns-body">
            <p>2021</p>
            <p>2020</p>
          </section>
        </section>

        <section className="footer-column-three footer-center-columns">
          <h2>О нас</h2>
          <section className="columns-body">
            <p>Художники</p>
            <p>Менеджеры</p>
          </section>
        </section>
      </section>

      <section className="footer-right">
        <section className="messanger-logos">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </section>

        <section className="rights">
          <p>Ink. House ®</p>
          <p>All rights reserved</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
