import Styles from "./card.module.scss";

const Card = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <h2 className={Styles.number}>
          {/* <img src="/assets/home/header/one.svg" alt="experience" className={Styles.colored}/>
          <img src="/assets/home/header/experience.svg" alt="experience" className={Styles.white}/> */}
          <span>3+</span>
        </h2>
        <p className={Styles.title}>years of proven experience</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <h2 className={Styles.number}>
          {/* <img src="/assets/home/header/two.svg" alt="projects" className={Styles.colored}/>
          <img src="/assets/home/header/projects.svg" alt="projects" className={Styles.white}/> */}
          <span>200+</span>
        </h2>
        <p className={Styles.title}>projects outsourced</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div className={Styles.number}>
          {/* <img src="/assets/home/header/three.svg" alt="clients" className={Styles.colored}/>
          <img src="/assets/home/header/clients.svg" alt="clients" className={Styles.white}/> */}
          30+
        </div>
        <p className={Styles.title}>satisfied customers</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
      <div className={Styles.card}>
        <div className={Styles.number}>
          {/* <img src="/assets/home/header/three.svg" alt="clients" className={Styles.colored}/>
          <img src="/assets/home/header/clients.svg" alt="clients" className={Styles.white}/> */}
          155%
        </div>
        <p className={Styles.title}>Company growth rate</p>
        {/* <p className={Styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
      </div>
    </div>
  );
};

export default Card;
