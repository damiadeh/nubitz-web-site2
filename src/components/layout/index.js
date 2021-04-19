/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

/* -------------------------- Internal Dependencies ------------------------- */
import Footer from "components/footer/Footer";
import Navbar from "components/navbar";
import Contact from "components/contact/Contact";

/* ---------------------------- Layout PropTypes ---------------------------- */
const propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	title: PropTypes.string,
	variant: PropTypes.string,
};

export const ThemeContext = React.createContext();

const Layout = ({
	children,
	title = "Nubitz | Design and software development done right",
	variant = "light",
}) => {
	return (
		<div className='app__section'>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar variant={variant} />
			<main>{children}</main>
			<Contact />
			<Footer />
		</div>
	);
};

Layout.propTypes = propTypes;

export default Layout;
