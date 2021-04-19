import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionThree.module.scss";

const SectionThree = () => {
  const distinctions = {
    items: [
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 1,
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 2,
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 3,
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 4,
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 5,
      },
      {
        number: "/assets/about/code-round.svg",
        text:
          "We create the optimal platform to develop and run digital applications for our clients",
        id: 6,
      },
    ],
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapper_text}>
        <h2>Our Mission</h2>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print.
        </p>
      </div>
      <div className={Styles.distinctions}>
        {distinctions.items.map((item) => (
          <div>
            <img src={item.number} src={item.number} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
