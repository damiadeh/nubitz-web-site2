/* -------------------------- Internal Dependencies ------------------------- */
import Styles from "./sectionOne.module.scss";
import servicesObject from "./object/servicesObject";
import useServices from "./object/useServices";

const SectionOne = () => {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.wrapper_text}>
				<h2>Our Services</h2>
				<p>
					Is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's standard dummy textis simply dummy text
					of the print.
				</p>
			</div>
			<div className={Styles.languages}>
				{servicesObject.items.map((item, index) => (
					<div key={item.id} onClick={() => useServices(index)}>
						<img src={item.image} alt={item.name} />
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionOne;
