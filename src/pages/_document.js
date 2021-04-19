/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<title>Nubitz | Design and software development done right</title>
					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://nubitz.com' />
					<meta property='og:title' content='Nubitz' />
					<meta
						property='og:description'
						content='Design and software development done right
- We make your ideas succeed through design and software development'
					/>
					<meta
						name='description'
						content='Design and software development done right
- We make your ideas succeed through design and software development'
					/>
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:site' content='@nubitz' />
					<meta name='twitter:creator' content='@nubitz' />
					<meta property='og:type' content='website' />
					<meta property='og:image' content='/assets/nubitz-thumbnail.png' />
					<meta
						property='og:image:alt'
						content='Nubitz - Design and software development done right'
					/>
					<meta
						property='twitter:label1'
						value='Start your project with us now'
					/>
					<meta
						property='twitter:data1'
						value='https://nubitz.com/project-request'
					/>
					<meta property='twitter:label2' value='Rating' />
					<meta
						property='twitter:data2'
						value=':star::star::star::star::star:'
					/>
					<meta property='og:image:width' content='773' />
					<meta property='og:image:height' content='459' />
					<meta property='og:locale' content='en_US' />
					<meta name='robots' content='index,follow' />
					<meta name='googlebot' content='index,follow' />
					<meta property='og:url' content='https://nubitz.com' />
					<link rel='canonical' href='https://nubitz.com' />
					<meta name='keywords' content='nubitz' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='robots' content='index, nofollow' />
					<meta name='apple-mobile-web-app-title' content='Nubitz' />
					<link rel='icon' href='/assets/favicon.ico' />
					<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
					<meta content='#0855ba' name='theme-color' />
					<meta content='#0855ba' name='msapplication-TileColor' />
					<link rel='stylesheet' href='/styles/nprogress.css' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
