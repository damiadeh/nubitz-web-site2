/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from "react";
import { Divider } from "@material-ui/core";

/* -------------------------- Internal Dependencies ------------------------- */
import Styles from "./sectionFive.module.scss";
import { TESTIMONIALS } from "./data";

const SectionFive = () => {
	const [x, setX] = useState(0);
	const [step, setStep] = useState(1);

	const goLeft = () => {
		if (x === 0) {
			null;
		} else {
			setX(x + 100);
			setStep(step - 1);
		}
	};
	const goRight = () => {
		if (x === -400) {
			null;
		} else {
			setX(x - 100);
			setStep(step + 1);
		}
	};

	return (
		<div className={Styles.main}>
			<img
				src='/assets/home/bubbles/bubble-three.svg'
				alt='/'
				className={Styles.bubble}
			/>
			<div className='wrapper'>
				<div className={Styles.container}>
					<div className={Styles.title}>
						<p>Clients Review</p>
						<h2>Testimonials</h2>
					</div>
					<div className={Styles.counter}>
						<p>
							{`0${step}`}/<span>{`0${TESTIMONIALS.items.length}`}</span>
						</p>
					</div>
					<div className={Styles.slider}>
						{TESTIMONIALS.items.map((item) => (
							<div
								className={Styles.client}
								style={{
									transform: `translateX(${x}%)`,
								}}>
								<div className={Styles.client_details}>
									<img
										src='/assets/home/section_five/left_arrow.svg'
										alt='left_arrow'
										onClick={goLeft}
									/>
									<div>
										<p className={Styles.client_details_name}>{item.client}</p>
										<p className={Styles.client_details_title}>
											Chief Consultant - <b>Teckit</b>
										</p>
									</div>
								</div>
								<Divider orientation='vertical' />
								<div className={Styles.client_remarks}>
									<p>{`${item.review}`}</p>
									<img
										src='/assets/home/section_five/right_arrow.svg'
										alt='right_arrow'
										onClick={goRight}
									/>
								</div>
								<div className={Styles.client_mobileArrows}>
									<img
										src='/assets/home/section_five/right-arrow.svg'
										alt='left_arrow'
										style={{ marginRight: "1vh" }}
										onClick={goLeft}
									/>
									<img
										src='/assets/home/section_five/left-arrow.svg'
										alt='right_arrow'
										onClick={goRight}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionFive;
