/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";

/* ------------------------- Internal  Dependeniceis ------------------------ */
import Styles from "../styles/about.module.scss";
import SectionOne from "../sections/aboutpage/section-one/SectionOne";
import SectionTwo from "../sections/aboutpage/section-two/SectionTwo";
import SectionThree from "../sections/aboutpage/section-three/SectionThree";
import Layout from "components/layout";

const About = () => {
	return (
		<Layout variant='dark' title='About us'>
			<div className={Styles.container}>
				<div className='wrapper'>
					<div className={Styles.wrapperd}>
						<div className={Styles.wrapperd_text}>
							<h2>Who we are</h2>
							<p>
								We are a global IT company, specializing in strategic IT
								business solutions and services for complex business problems,
								in multiple industry sectors including retail, healthcare,
								finance, education, and more. Our vast technology and industry
								expertise enable us to focus on cutting-edge internet
								technologies with the aim to develop scalable, secure and
								easy-to-use web applications that work across multiple devices.
								Our belief is that a good design along with the judicious use of
								technology; helps simplify things, provide valuable insights,
								connect people - all of which ultimately helps in the success of
								a business.
							</p>
						</div>
						<div className={Styles.imageGrid}>
							<div className={Styles.imageGrid_lhs}>
								<img src='/assets/about/big-image.png' alt='section_one' />
							</div>
							<div className={Styles.imageGrid_rhs}>
								<div className={Styles.imageGrid_rhs_top}>
									<div className={Styles.imageGrid_rhs_top_one}>
										<img src='/assets/about/small-one.png' alt='section_one' />
									</div>
									<div className={Styles.imageGrid_rhs_top_two}>
										<img src='/assets/about/small-two.png' alt='section_one' />
									</div>
								</div>
								<div className={Styles.imageGrid_rhs_bottom}>
									<div className={Styles.imageGrid_rhs_bottom_three}>
										<img
											src='/assets/about/small-three.png'
											alt='section_one'
										/>
									</div>
									<div className={Styles.imageGrid_rhs_bottom_four}>
										<img src='/assets/about/small-four.png' alt='section_one' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<SectionOne />
					<SectionTwo />
					<SectionThree />
				</div>
			</div>
		</Layout>
	);
};

export default About;
