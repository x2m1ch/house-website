import { Link } from "react-router";

import logo from "/assets/favicon/icon.svg";

import "./styles/footer.css";

const baseUrl = import.meta.env.BASE_URL;

interface Column {
  name: string;
}

interface CenterColumn extends Column {
  body: string[];
}

const COLUMNS: Column[] = [
  {
    name: "footer-center",
  },
  {
    name: "footer-right",
  },
];

const CENTER_COLUMNS_BODY = {
  one: ["Франция", "Германия", "Англия"],
  two: ["2021", "2020"],
  three: ["Художники", "Менеджеры"],
};

const CENTER_COLUMNS: CenterColumn[] = [
  {
    name: "Репродукции",
    body: CENTER_COLUMNS_BODY.one,
  },
  {
    name: "Новинки",
    body: CENTER_COLUMNS_BODY.two,
  },
  {
    name: "О нас",
    body: CENTER_COLUMNS_BODY.three,
  },
];

const IMAGES = [
  `${baseUrl}assets/sections/footer/facebook.svg`,
  `${baseUrl}assets/sections/footer/youtube.svg`,
  `${baseUrl}assets/sections/footer/instagram.svg`,
];

const RIGHT_COLUMNS: Column[] = [
  {
    name: "messanger-logos",
  },
  {
    name: "rights",
  },
];

export const Footer = () => {
  return (
    <footer>
      <section className="footer-left">
        <Link to="" className="footer-logo">
          <img src={logo} alt="" />
          <h2 className="icon">Ink. House</h2>
        </Link>

        <section className="footer-left-bottom">
          <p style={{ color: "#2C2D35" }}>+7 (999) 543-54-54</p>
          <p>Мастерская</p>
        </section>
      </section>

      <section className="footer-information">
        {COLUMNS.map((column) => (
          <section className={column.name}>
            {column.name == "footer-center" ? (
              <>
                {CENTER_COLUMNS.map((column) => (
                  <section
                    className={`footer-center-columns footer-column-${column.body == CENTER_COLUMNS_BODY.one ? "one" : column.body == CENTER_COLUMNS_BODY.two ? "two" : "three"}`}
                  >
                    <h2>{column.name}</h2>
                    <section className="columns-body">
                      {column.body.map((body) => (
                        <Link to="">{body}</Link>
                      ))}
                    </section>
                  </section>
                ))}
              </>
            ) : (
              <>
                {RIGHT_COLUMNS.map((column) => (
                  <section className={column.name}>
                    {column.name == "messanger-logos" ? (
                      IMAGES.map((image) => (
                        <Link to="">
                          <img src={image}></img>
                        </Link>
                      ))
                    ) : (
                      <>
                        <p>Ink. House ®</p>
                        <p>All rights reserved</p>
                      </>
                    )}
                  </section>
                ))}
              </>
            )}
          </section>
        ))}
      </section>
    </footer>
  );
};
