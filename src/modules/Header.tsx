import { Link } from "react-router";

import logo from "/assets/favicon/icon.svg";

import "./styles/header.css";

const header = ["Репродукции", "Новинки", "О нас"];

export const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="" />
        <h1 className="icon">Ink. House</h1>
      </a>

      <nav>
        {header.map((header) => (
          <Link className="nav-buttons" to="/">
            {header}
          </Link>
        ))}
        <Link className="basket" to="/"></Link>
      </nav>
    </header>
  );
};

export default Header;
