import { Divider } from "@material-ui/core";
import { Style } from "@material-ui/icons";
import { Link } from "react-scroll";
import useServices from "sections/aboutpage/section-one/object/useServices";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className="wrapper">
        <div className={Styles.container_main}>
          <div className={Styles.about}>
            <h2>
              Design and software development <span>done right</span>
            </h2>
          </div>
          <div className={Styles.quicklinks}>
            <p>Quick Links</p>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/project-request">Project Request</a>
              </li>
              {/* <li>
								<a href='/blog'>Blog</a>
							</li> */}
              <li>
                <a href="/career">Careers</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={Styles.services}>
            <p>Services</p>
            <ul>
              <li>
                <a href="/services" onClick={() => useServices(0)}>
                  Digital Martketing
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => useServices(2)}>
                  Product Design
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => useServices(1)}>
                  Product Development
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => useServices(3)}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => useServices(4)}>
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.mobile_mid}>
            <div className={Styles.mobile_quicklinks}>
              <p>Quick Links</p>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/project-request">Project Request</a>
                </li>
                {/* <li>
									<a href='/blog'>Blog</a>
								</li> */}
                <li>
                  <a href="/career">Careers</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={Styles.mobile_services}>
              <p>Services</p>
              <ul>
                <li>
                  <a href="/services" onClick={() => useServices(0)}>
                    Digital Martketing
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => useServices(2)}>
                    Product Design
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => useServices(1)}>
                    Product Development
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => useServices(3)}>
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={() => useServices(4)}>
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.contact}>
            <p>Get In Touch</p>
            <ul>
              <li>
                <a href="/career">Careers</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.extra}>
          <p>nor@nubitz.com</p>
          <p>+1 929-218-8640</p>
        </div>
      </div>

      <Divider />
      <p className={Styles.copyright}>
        <span style={{ marginRight: "8px" }}>&#169;</span>
        Copyright 2020 nubitz. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
