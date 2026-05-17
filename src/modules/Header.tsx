import logo from "/assets/favicon/icon.svg";

import "./styles/header.css";

const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="" />
        <h1 className="icon">Ink. House</h1>
      </a>

      <nav>
        <a className="nav-buttons" href="/">
          Репродукции
        </a>
        <a className="nav-buttons" href="/">
          Новинки
        </a>
        <a className="nav-buttons" href="/">
          О нас
        </a>
        <a className="basket" href="/"></a>
      </nav>
    </header>
  );
};

export default Header;
