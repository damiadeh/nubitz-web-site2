/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import { Link as Scroll } from "react-scroll";
import { Chip } from "@material-ui/core";

/* --------------------------- Style Dependencies --------------------------- */
import "aos/dist/aos.css";

/* -------------------------- Components Dependencies ------------------------- */
import Card from "components/cards/Card";
import SectionFive from "sections/homepage-sections/section-five";
import SectionSix from "sections/homepage-sections/section-six";
import SectionThree from "sections/homepage-sections/section-three";
import SectionTwo from "sections/homepage-sections/section-two";
import Styles from "styles/home.module.scss";
import Layout from "components/layout";

/* -------------------------- Internal Dependencies ------------------------- */
import { COMPANIES, POSTS, DISTINCTIONS } from "utils";

const HomePage = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Layout variant="light">
      <div className={Styles.homepage_main}>
        <div className={Styles.mainWrapper}>
          <div className={Styles.videoContainer}>
            <video
              src={require("../../public/assets/home/header/hero-video.mp4")}
              muted
              loop
              autoPlay
            ></video>
            <img
              src="/assets/home-hero.png"
              alt="/"
              className={Styles.heroImage}
            />
            <div className={Styles.overlay}></div>
            <div className={Styles.hero}>
              <div className={`${Styles.hero_text} wrapper`}>
                <h1>Design and software development done right</h1>
                <p>
                  We make your ideas succeed through design and software
                  development.
                </p>
                <Scroll to="cases" spy={true} smooth={true} duration={1000}>
                  <div className={Styles.heroButton}>
                    Explore latest cases
                    <img
                      src="/assets/home/header/arrow.svg"
                      alt="arrow-right"
                    />
                  </div>
                </Scroll>
              </div>
            </div>
            <div className={Styles.accomplishments}>
              <Card />
            </div>
          </div>
        </div>

        <SectionTwo />
        <SectionThree />

        <div className={Styles.recognition}>
          <div className="wrapper">
            <div className={Styles.recognition_text}>
              <h6>Awards</h6>
              <h2>Reviews and recognition</h2>
              <p>
                100% client satisfaction, flawless perfromance of our products,
                and a leading approach to R{"&"}D has been the center of our
                operations.
                <span>
                  We were honored to have recieved awards, recognitions, and
                  nominations globally accross various industries.
                </span>
              </p>
            </div>
            <div className={Styles.recognitions}>
              <div className={Styles.recognitions_recognition}>
                <img src="/assets/home/accomplishments/medtox.svg" alt="/" />
              </div>
              <div className={Styles.recognitions_recognition}>
                <img src="/assets/home/accomplishments/medtox.svg" alt="/" />
              </div>
              <div className={Styles.recognitions_recognition}>
                <img src="/assets/home/accomplishments/medtox.svg" alt="/" />
              </div>
              <div className={Styles.recognitions_recognition}>
                <img src="/assets/home/accomplishments/medtox.svg" alt="/" />
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.company}>
          <div className="wrapper">
            <div className={Styles.title}>
              <h2>Our happy clients</h2>
            </div>
            <div className={Styles.companies}>
              {COMPANIES.items.map((item) => (
                <div key={item.id}>
                  {id === item.id ? (
                    <img
                      src={item.active}
                      alt={item.name}
                      onMouseLeave={() => setId(null)}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.name}
                      onMouseEnter={() => setId(item.id)}
                    />
                  )}
                </div>
              ))}
            </div>
            <p>Become a client</p>
          </div>
        </div>

        <SectionFive />

        <div className={Styles.choose}>
          <div className="wrapper">
            <h2 className={Styles.headline}>Why choose us</h2>
          </div>
          <div className={Styles.distinctions}>
            {DISTINCTIONS.items.map((item) => (
              <div key={item.number}>
                {/* <img src={item.number} src={item.number} /> */}
                <h3>{item.title}</h3>
                <p>
                  We estimate the pricing using the standard workflow frameworks
                  and offer various payment options. You will not come across
                  any unexpected bills or hidden fees.
                  <span>
                    SCRUM-certified and will ensure the project delivery is
                    time- and cost-optimized so you can enjoy the flawless
                    performance of your software in a timely manner.
                  </span>
                </p>
                <h2 className={Styles.numberText}>{item.numberText}</h2>
              </div>
            ))}
          </div>
        </div>

        <SectionSix />

        <div className={Styles.postContainer}>
          {/* <div className="wrapper">
            <div className={Styles.postContainer_wrapper}>
              <div className={Styles.heading}>
                <p className={Styles.topHead}> Our Blog</p>
                <h2>Nubitz News</h2>
              </div>
              <div className={Styles.post}>
                {POSTS.items.map((post) => (
                  <Link href={`/blog/${encodeURIComponent(post.title)}`}>
                    <div key={post.id} data-aos="zoom-in">
                      <img src={post.image} alt="/" />
                      <div className={Styles.post_content}>
                        <Chip
                          variant="outlined"
                          size="small"
                          label="#development"
                          className={Styles.tag}
                        />
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                        <div className={Styles.post_person}>
                          <img src={post.profile} alt="/" />
                          <div>
                            <p>{post.author}</p>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          <Link href="/blog">
            <div className={Styles.cta}>{/* <p>View All Articles</p> */}</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
