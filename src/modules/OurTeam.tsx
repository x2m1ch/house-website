import ourTeamImage from "/assets/sections/main/our-team/our-team-img.png";
import personImageOne from "/assets/sections/main/our-team/team-persons/person-one.svg";
import personImageTwo from "/assets/sections/main/our-team/team-persons/person-two.svg";
import personImageThree from "/assets/sections/main/our-team/team-persons/person-three.svg";

import "./styles/our-team.css";

const OurTeam = () => {
  return (
    <section className="our-team-section">
      <section className="our-team-left">
        <img src={ourTeamImage} alt="" />
      </section>

      <section className="our-team-right">
        <h2 className="our-team-head">Наша команда</h2>
        <p className="our-team-body">
          Значимость этих проблем настолько очевидна, что базовый вектор <br />{" "}
          развития позволяет оценить значение экспериментов, поражающих <br />{" "}
          по своей масштабности и грандиозности. Мы вынуждены отталкиваться{" "}
          <br /> от того, что консультация с широким активом.
        </p>
        <section className="persons">
          <img src={personImageOne} alt="" />
          <img src={personImageTwo} alt="" />
          <img src={personImageThree} alt="" />
        </section>
      </section>
    </section>
  );
};

export default OurTeam;
