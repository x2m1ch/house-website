import { Link } from "react-router";
import { useState } from "react";

import logo from "/assets/favicon/icon.svg";
import busket from "/assets/sections/header/basket.svg";
import busketHover from "/assets/sections/header/basket-hover.svg";
import busketActive from "/assets/sections/header/basket-active.svg";
import burger from "/assets/sections/header/burger.svg";
import burgerActive from "/assets/sections/header/burger-active.svg";

import "../app/styles/shared/header.css";

const header = ["Репродукции", "Новинки", "О нас"];

export const Header = () => {
  const [stateBusket, setStateBusket] = useState("passive");
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerMenu = (styles: object | undefined) =>
    isBurgerActive ? styles : undefined;

  return (
    <header>
      <Link to="" className="logo">
        <img src={logo} alt="" />
        <h1 className="icon">Ink. House</h1>
      </Link>

      <nav
        style={burgerMenu({
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 30,
        })}
      >
        <img
          onClick={() => setIsBurgerActive(!isBurgerActive)}
          src={isBurgerActive ? burgerActive : burger}
          alt=""
        />

        <section
          style={burgerMenu({
            display: "flex",
            fontSize: 18,
            gap: 40,
            flexDirection: "column",
          })}
          className="nav-buttons"
        >
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
            style={isBurgerActive ? { display: "none" } : undefined}
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
