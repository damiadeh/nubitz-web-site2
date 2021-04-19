import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../components/primary-button/Button";
import Styles from "../styles/case-study.module.scss";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import SectionThree from "../sections/homepage-sections/section-three";

const CaseStudy = () => {
  const router = useRouter();
  const [caseStudyItem, setCaseStudyItem] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  let myRef = useRef();

  useEffect(() => {
    getIdFromLocalStorage();
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  }, []);

  const getIdFromLocalStorage = () => {
    setCaseStudyItem(JSON.parse(localStorage.getItem("caseStudy")));
  };

  return (
    <div className={Styles.container}>
      <nav
        style={{
          backgroundColor: `${
            !caseStudyItem?.backgroundColor
              ? caseStudyItem?.secondbackgroundColor
              : caseStudyItem?.backgroundColor
          }`,
        }}
      >
        <div className={Styles.logo_container}>
          <Link href="/">
            <Image
              src="/assets/home/header/logo.svg"
              width="120"
              height="50"
              alt="nubitz-logo"
            />
          </Link>
        </div>
        <div className={Styles.nav_items} ref={myRef}>
          <ul>
            <li className={router.pathname === "/about" ? Styles.active : ""}>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li
              className={
                router.pathname === "/project-request" ? Styles.active : ""
              }
            >
              <Link href="/project-request">
                <a>Project request</a>
              </Link>
            </li>
            {/* <li className={router.pathname === "/blog" ? Styles.active : ""}>
							<Link href='/blog'>
								<a>Blog</a>
							</Link>
						</li> */}
            <li className={router.pathname === "/career" ? Styles.active : ""}>
              <Link href="/career">
                <a>Careers</a>
              </Link>
            </li>
          </ul>
          <Button text="Get Started" primary />
        </div>
        <div className={Styles.hamburger}>
          <img
            src="/assets/menu-white.svg"
            alt="hamburger-menu"
            onClick={() => setOpenMenu(true)}
          />
        </div>
        {openMenu && (
          <div className={Styles.mobileNav}>
            <div className={Styles.mobileNav_top}>
              <Link href="/">
                <img src="/assets/logo-dark.svg" alt="logo-mobile" />
              </Link>
              <img
                src="/assets/close.svg"
                alt="close-menu"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <div className={Styles.mobileNav_lists}>
              <ul>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/project-request">Project request</Link>
                </li>
                {/* <li onClick={() => setOpenMenu(false)}>
									<Link href='/blog'>Blog</Link>
								</li> */}
                <li onClick={() => setOpenMenu(false)}>
                  <Link href="/career">Careers</Link>
                </li>
              </ul>
            </div>
            <Link href="/contact-us">
              <button className={Styles.mobileNav_button}>Get Started</button>
            </Link>
          </div>
        )}
      </nav>
      <div
        className={Styles.hero}
        style={{
          backgroundColor: `${
            !caseStudyItem?.backgroundColor
              ? caseStudyItem?.secondbackgroundColor
              : caseStudyItem?.backgroundColor
          }`,
        }}
      >
        <div className={Styles.hero_container}>
          <div className={Styles.hero_text}>
            <img src="/assets/case-study/ova-logo.svg" alt="ova-logo" />
            <h3>
              {!caseStudyItem?.name
                ? caseStudyItem?.secondname
                : caseStudyItem?.name}
            </h3>
            <p>
              {!caseStudyItem?.product
                ? caseStudyItem?.secondproduct
                : caseStudyItem?.product}
            </p>
          </div>
          <div className={Styles.hero_image}>
            <img src="/assets/case-study/iphone.svg" alt="/" />
          </div>
        </div>
      </div>
      <div className={Styles.overviews}>
        <h5>Overview {"&"} Problems</h5>
        <div className={Styles.overviews_wrapper}>
          <div className={Styles.overviews_lhs}>
            <h5>Overview {"&"} Problems</h5>
            <p>
              Mauris volutpat maecenas quis molestie pellentesque sit diam
              egestas sed. Est ornare bibendum ut facilisis rhoncus porta
              habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
              Nulla sit lorem tortor, nunc. Sed lacus aliquet morbi sit lectus
              morbi. Varius suspendisse quis nascetur mattis risus a, eget.
              Habitant venenatis augue senectus tellus sed ullamcorper etiam
              proin. Molestie faucibus aliquet congue quis sed vitae quis. Nibh
              ut consequat netus quis egestas libero.
            </p>
          </div>
          <div className={Styles.overviews_rhs}>
            <div className={Styles.overviews_rhs_container}>
              <h4>OVA PAY</h4>
              <hr />
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
              <div className={Styles.overviews_rhs_item}>
                <p>Industry</p>
                <div></div>
                <p>Fintech</p>
              </div>
            </div>
            <div className={Styles.button}>
              <Button
                text="View Live Site >>"
                backgroundColor="#00103C"
                textColor="white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.solutions}>
        <h5>Solution Delivered</h5>
        <div className={Styles.solutions_wrapper}>
          <div className={Styles.solutions_lhs}>
            <h5>Solution Delivered</h5>
            <p>
              Mauris volutpat maecenas quis molestie pellentesque sit diam
              egestas sed. Est ornare bibendum ut facilisis rhoncus porta
              habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
              Nulla sit lorem tortor, nunc.
            </p>
          </div>
          <div className={Styles.solutions_rhs}>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
            <div className={Styles.solutions_rhs_item}>
              <div></div>
              <p>
                habitant. Scelerisque amet ut posuere sit nulla urna vitae amet.
                Nulla sit lorem tortor, nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionThree />
      <div className={Styles.reviews}>
        <img src="/assets/case-study/quote.svg" alt="quote" />
        <h5>Client’s Review</h5>
        <p>
          Mauris volutpat maecenas quis molestie pellentesque sit diam egestas
          sed. Est ornare bibendum ut facilisis rhoncus porta habitant.
          Scelerisque amet ut posuere sit nulla urna vitae amet. Nulla sit lorem
          tortor, nunc.
        </p>
        <span>Alwe Ola - CEO Alwena Ltd</span>
      </div>
      <div className={Styles.projects}>
        <hr
          style={{
            background: "rgba(0, 16, 60, 0.32)",
          }}
        />
        <h5>Other Projects We’ve Worked On</h5>
        <div className={Styles.projects_wrapper}>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Facebook</h5>
              <span>Web Development</span>
            </div>
          </div>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Spotify</h5>
              <span>Web Development </span>
            </div>
          </div>
          <div className={Styles.projects_item}>
            <img src="/assets/case-study/project.png" alt="/" />
            <div className={Styles.projects_item_text}>
              <h5>Greenish</h5>
              <span>Web Development</span>
            </div>
          </div>
        </div>
        <hr
          style={{
            background: "rgba(0, 16, 60, 0.32)",
          }}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default CaseStudy;
