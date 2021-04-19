import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionTwo.module.scss";

const SectionTwo = () => {
  const distinctions = {
    items: [
      {
        number: "/assets/home/section_four/01.svg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas velit, ut nisi, ut lorem adipiscing. Eget vitae semper malesuada a. Sed phasellus et felis vestibulum vitae. Sit convallis nullam egestas condimentum diam sit. Tellus amet malesuada arcu gravida malesuada imperdiet turpis euismod. Hac ultrices vel bibendum",
      },
      {
        number: "/assets/home/section_four/02.svg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas velit, ut nisi, ut lorem adipiscing. Eget vitae semper malesuada a. Sed phasellus et felis vestibulum vitae. Sit convallis nullam egestas condimentum diam sit. Tellus amet malesuada arcu gravida malesuada imperdiet turpis euismod. Hac ultrices vel bibendum",
      },
      {
        number: "/assets/home/section_four/03.svg",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas velit, ut nisi, ut lorem adipiscing. Eget vitae semper malesuada a. Sed phasellus et felis vestibulum vitae. Sit convallis nullam egestas condimentum diam sit. Tellus amet malesuada arcu gravida malesuada imperdiet turpis euismod. Hac ultrices vel bibendum",
      },
    ],
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.wrapper_text}>
        <h2>Why work with us</h2>
        <p>
          Is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy textis simply dummy text
          of the print.
        </p>
      </div>
      <div className={Styles.distinctions}>
        {distinctions.items.map((item) => (
          <div key={item.number}>
          <img src={item.number} src={item.number} />
          <p>{item.text}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
