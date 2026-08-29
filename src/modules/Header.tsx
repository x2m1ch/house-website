import { Link } from "react-router";
import { useState } from "react";

import logo from "/assets/favicon/icon.svg";
import busket from "/assets/sections/header/basket.svg";
import busketHover from "/assets/sections/header/basket-hover.svg";
import busketActive from "/assets/sections/header/basket-active.svg";

import "./styles/header.css";

const header = ["Репродукции", "Новинки", "О нас"];

export const Header = () => {
  const [stateBusket, setStateBusket] = useState("passive");

  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="" />
        <h1 className="icon">Ink. House</h1>
      </a>

      <nav>
        <section className="nav-buttons">
          {header.map((header) => (
            <Link to="/">{header}</Link>
          ))}
        </section>
        <Link
          onMouseEnter={() => setStateBusket("active")}
          onMouseLeave={() => setStateBusket("passive")}
          onMouseUp={() => setStateBusket("hover")}
          className="basket"
          to="/"
        >
          <img
            src={
              stateBusket == "passive"
                ? busket
                : stateBusket == "active"
                  ? busketActive
                  : busketHover
            }
            alt=""
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
