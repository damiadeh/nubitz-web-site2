/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from "react";
import Aos from "aos";

/* ---------------------------- Style Dependency ---------------------------- */
import "aos/dist/aos.css";
import Styles from "./sectionThree.module.scss";

/* --------------------------- Internal Dependency -------------------------- */
import { LANGUAGES, TIMELINE_OBJECTS } from "./data";

const SectionThree = () => {
	const [active, setActive] = useState(1);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className={Styles.container}>
			<div className='wrapper'>
				<div>
					<div className={Styles.hero}>
						<h2>Technical stack</h2>
					</div>

					<div className={Styles.timeline}>
						<ul>
							{TIMELINE_OBJECTS.items.map((item) => (
								<li
									onClick={() => setActive(item.id)}
									className={active === item.id && Styles.active}>
									<span className={Styles.circle}></span>
									{item.name}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={Styles.languages}>
					{LANGUAGES.items.map((item) => (
						<>
							{item.id === active ? (
								<div key={item.id} className={Styles.language}>
									<div data-aos='zoom-in'>
										<img src={item.image} alt={item.name} />
										<p>{item.name}</p>
									</div>
								</div>
							) : (
								""
							)}
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
