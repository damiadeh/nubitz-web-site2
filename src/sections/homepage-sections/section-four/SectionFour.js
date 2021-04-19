import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionFour.module.scss";

const SectionFour = () => {
  const distinctions = {
    items: [
      {
        number: "/assets/home/section_four/01.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 1,
      },
      {
        number: "/assets/home/section_four/02.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 2,
      },
      {
        number: "/assets/home/section_four/03.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 3,
      },
      {
        number: "/assets/home/section_four/04.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 4,
      },
      {
        number: "/assets/home/section_four/05.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 5,
      },
      {
        number: "/assets/home/section_four/06.svg",
        title: "High Quality Handware",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 6,
      },
    ],
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.main_image}>
        <img
          src="/assets/home/bubbles/bubble-two.svg"
          alt="/"
          className={Styles.bubble}
        />
      </div>
      <div className={Styles.container}>
        <div className={Styles.title}>
          <p>Our distinctions</p>
          <h2>Why Choose Us</h2>
        </div>
        <div className={Styles.distinctions}>
          {distinctions.items.map((item) => (
            <SectionText
              number={item.number}
              title={item.title}
              description={item.text}
              mini
              width="unset"
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
