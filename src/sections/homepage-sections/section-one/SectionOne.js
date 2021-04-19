import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionText from "../../../components/section_text/SectionText";
import Styles from "./sectionOne.module.scss";

const SectionOne = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.img}>
        <img src="/assets/home/section_one/section_one.svg" alt="section_one" />
      </div>
      <div>
        <div className={Styles.text} data-aos="fade-left">
          <SectionText
            welcome="Welcome to Nubitz"
            title="We deal with Every Aspect of IT Solutions"
            description=" We are the world’s leading IT solutions firm, where bold thinking,
            inspired people with passion for results come together for
            extraordinary impact."
          />

          <div className={Styles.text_points}>
            <div>
              <img src="/assets/home/section_one/check.svg" alt="check" />
              <p>Over 13 years of expertise</p>
            </div>
            <div>
              <img src="/assets/home/section_one/check.svg" alt="check" />
              <p>With over 150 proefessional employees</p>
            </div>
            <div>
              <img src="/assets/home/section_one/check.svg" alt="check" />
              <p>We‘ve delievered more than 300,000 client’s interaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
