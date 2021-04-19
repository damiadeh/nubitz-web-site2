import Styles from "./sectionText.module.scss";

const SectionText = ({
	welcome,
	title,
	width,
	description,
	textColor,
	secondary,
	lineHeight,
	padding,
	fontSize,
	number,
	mini,
	backgroundColor,
}) => {
	return (
		<div
			className={Styles.text}
			style={{
				backgroundColor: `${backgroundColor}`,
				color: `${textColor}`,
				borderRadius: "5px",
				padding: `${padding}`,
			}}>
			<p
				className={Styles.text_welcome}
				style={
					!secondary
						? {
								color: " var(--primary)",
						  }
						: { color: `${textColor}` }
				}>
				{welcome && welcome}
				{number && <img src={number} alt='/' />}
			</p>
			{!mini ? (
				<h2
					className={Styles.text_title}
					style={
						!secondary
							? {
									color: "var(--text-black)",
							  }
							: { color: `${textColor}` }
					}>
					{title}
				</h2>
			) : (
				<p
					className={Styles.text_title_mini}
					style={
						!secondary
							? {
									color: "var(--text-black)",
							  }
							: { color: `${textColor}` }
					}>
					{title}
				</p>
			)}

			{!mini ? (
				<p
					className={Styles.text_description}
					style={
						!secondary
							? {
									color: "#333533",
									width: `${width}`,
							  }
							: {
									color: `${textColor}`,
									width: `${width}`,
							  }
					}>
					{description}
				</p>
			) : (
				<p
					className={Styles.text_description_mini}
					style={
						!secondary
							? {
									color: "#333533",
									fontSize: `${fontSize}`,
									lineHeight: `${lineHeight}`,
							  }
							: {
									color: `${textColor}`,
							  }
					}>
					{description}
				</p>
			)}
		</div>
	);
};

export default SectionText;
