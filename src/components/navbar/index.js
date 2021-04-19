/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import useAimScroll from "aimscroll/bundle-cjs/use-aim-scroll";
import PropTypes from "prop-types";
import Image from "next/image";

/* --------------------------- Styles Dependencies -------------------------- */
import Styles from "./navbar.module.scss";

/* ---------------------------- Navbar PropTypes --------------------------- */
const propTypes = {
  variant: PropTypes.string,
};

const Navbar = ({ variant = "light" }) => {
  const router = useRouter();
  let userScrolledUp = null;
  if (process.browser) {
    [userScrolledUp] = useAimScroll(10);
  }
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav
      className={`${userScrolledUp && Styles.scrolled_up} ${Styles.navbar} ${
        variant !== "light" && Styles.scrolled_up_min
      }`}
    >
      <div className="wrapper">
        <div className={Styles.logo_container}>
          <Link href="/">
            {variant === "light" && !userScrolledUp ? (
              <Image
                src="/assets/home/accomplishments/logopix.svg"
                width="100"
                height="50"
                alt="nubitz-logo"
              />
            ) : (
              <Image
                src="/assets/logo.svg"
                width="100"
                height="50"
                alt="nubitz-logo"
              />
            )}
          </Link>
        </div>
        <div className={Styles.nav_items}>
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
        </div>
        <Scroll to="contact" spy={true} smooth={true} duration={1000}>
          <div className={Styles.contactButton}>Contact us</div>
        </Scroll>
        <div className={Styles.hamburger}>
          <img
            src="/assets/menu-white.svg"
            alt="close-menu"
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
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
export default Navbar;
