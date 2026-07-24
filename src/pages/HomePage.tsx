import Header from "../modules/Header";
import Hero from "../modules/Hero";
import Catalog from "../modules/Catalog";
import Promo from "../modules/Promo";
import OurTeam from "../modules/OurTeam";
import Footer from "../modules/Footer";

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
