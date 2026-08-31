import ourTeamImage from "/assets/widgets/home/our-team/our-team-img.png";

import "../../app/styles/pages/home/widgets/our-team.css";

const baseUrl = import.meta.env.BASE_URL;

const IMAGES = [
  `${baseUrl}assets/widgets/home/our-team/team-persons/person-one.svg`,
  `${baseUrl}assets/widgets/home/our-team/team-persons/person-two.svg`,
  `${baseUrl}assets/widgets/home/our-team/team-persons/person-three.svg`,
];

export const OurTeam = () => {
  return (
    <section className="our-team-section">
      <img src={ourTeamImage} alt="" />

      <section className="our-team-right">
        <h2>Наша команда</h2>
        <p>
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
        <section>
          {IMAGES.map((image) => (
            <img src={image}></img>
          ))}
        </section>
      </section>
    </section>
  );
};
