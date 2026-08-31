import { Header } from "../shared/Header";
import { Hero } from "../widgets/home/Hero";
import { Catalog } from "../widgets/home/Catalog";
import { Promo } from "../widgets/home/Promo";
import { OurTeam } from "../widgets/home/OurTeam";
import { Footer } from "../shared/Footer";

import "../app/styles/pages/home/home-page.css";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Catalog />
        <Promo />
        <OurTeam />
      </main>

      <Footer />
    </>
  );
};
