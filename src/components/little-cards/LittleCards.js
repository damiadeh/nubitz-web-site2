import Styles from "./littleCards.module.scss";

const LittleCards = ({
	icon,
	title,
	text,
	slide,
	width,
	height,
	radius,
	backgroundColor,
	textColor,
	titleColor,
}) => {
	let useStyle = {
		// backgroundColor: "var(--primary)",
		background: "var(--primary)",
		// background: "var(--primary)",
		// width: `${width}`,
		height: `${height}`,
		// borderRadius: `${radius}`,
		transform: `translateX(${slide}%)`,
	};

	if (backgroundColor) {
		useStyle = {
			backgroundColor: `${backgroundColor}`,
			// width: `${width}`,
			height: `${height}`,
			// borderRadius: `${radius}`,
			border: "0.5px solid #C2D9EB",
			color: "#a9b1cc",
			transform: `translateX(${slide}%)`,
		};
	}

	return (
		<div className={Styles.card} style={useStyle}>
			<div className={Styles.card_icon}>
				<img src={icon} alt='icon' />
			</div>
			<p
				className={Styles.card_title}
				style={{
					color: `${titleColor}`,
				}}>
				{title}
			</p>
			<p
				className={Styles.card_text}
				style={{
					color: `${textColor}`,
					width: `${width}`,
				}}>
				{text}
			</p>
		</div>
	);
};

export default LittleCards;
