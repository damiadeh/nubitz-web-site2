/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from "react";

/* -------------------------- Internal Depndencies -------------------------- */
import LittleCards from "../../../components/little-cards/LittleCards";
import { LITTLE_CARDS } from "./data";
import Styles from "./sectionTwo.module.scss";

const SectionTwo = () => {
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
		if (x === -500) {
			null;
		} else {
			setX(x - 100);
			setStep(step + 1);
		}
	};

	return (
		<div className={Styles.main}>
			<img
				src='/assets/home/bubbles/bubble-one.svg'
				alt='/'
				className={Styles.bubble}
			/>
			<div className='wrapper'>
				<div className={Styles.container}>
					<div className={Styles.content}>
						<h2>Services we provide</h2>
						<p>
							Leveraging our in-depth expertise, we quickly and effectively
							deliver a leading solution for your needs. Capitalize on your
							market potential, increase cash flows, and gauge interest among
							your clientele by upgrading your strategy, design, software
							development, data analytics and machine learning.
						</p>
					</div>
					<div>
						<div className={Styles.arrows}>
							<img
								src='/assets/home/section_two/right-arrow.svg'
								alt='left arrow'
								style={{ marginRight: "1vh" }}
								onClick={goLeft}
							/>
							<img
								src='/assets/home/section_two/left-arrow.svg'
								alt='right arrow'
								onClick={goRight}
							/>
							<h3>
								{`0${step}`}/<span>{`0${LITTLE_CARDS.items.length}`}</span>
							</h3>
						</div>
						<div className={Styles.cards}>
							{LITTLE_CARDS.items.map((item) => (
								<LittleCards
									icon={item.icon}
									title={item.title}
									text={item.text}
									titleColor={item.titleColor}
									textColor={item.textColor}
									backgroundColor={item.backgroundColor}
									width='520px'
									height='420px'
									radius='8px'
									slide={x}
									key={item.title}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
