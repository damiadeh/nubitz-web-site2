import Link from "next/link";

import Styles from "./button.module.scss";

const Button = ({
	text,
	backgroundColor,
	marginLeft,
	textColor,
	primary,
	width,
	format,
	route,
	onClick,
}) => {
	let useStyle = {
		backgroundColor: "var(--white)",
		color: "var(--primary)",
		width: `${width}`,
	};

	if (!primary) {
		useStyle = {
			backgroundColor: `${backgroundColor}`,
			color: `${textColor}`,
			width: `${width}`,
			marginLeft: `${marginLeft}`,
		};
	}
	if (format && format == "fill") {
		useStyle = {
			backgroundColor: `${backgroundColor}`,
			color: `${textColor}`,
			width: `${width}`,
			marginLeft: `${marginLeft}`,
		};
	}
	if (format && format == "outline") {
		useStyle = {
			background: "none",
			color: `${textColor}`,
			width: `${width}`,
			marginLeft: `${marginLeft}`,
			border: `2px solid ${textColor}`,
			boxShadow: `2px 5px ${backgroundColor}`,
		};
	}

	return (
		<>
			{route ? (
				<Link href={`${route}`}>
					<button style={useStyle} className={Styles.button} onClick={onClick}>
						{text}
					</button>
				</Link>
			) : (
				<button style={useStyle} className={Styles.button} onClick={onClick}>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
