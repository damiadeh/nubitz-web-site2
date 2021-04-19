/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import NProgress from "nprogress";
import { Router } from "next/router";

/* --------------------------- Styles Dependencies -------------------------- */
import "../styles/globals.scss";

Router.events.on("routeChangeStart", (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;
