import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../components/footer/Footer";
import Styles from "../styles/services.module.scss";
import Contact from "../components/contact/Contact";
import Button from "../components/primary-button/Button";
import SectionThree from "../sections/homepage-sections/section-three";
import Layout from "components/layout";

const services = () => {
	const router = useRouter();
	const [serviceItem, setServiceItem] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);

	const getServiceItemFromLocalStorage = () => {
		setServiceItem(JSON.parse(localStorage.getItem("currentServiceItem")));
	};

	useEffect(() => {
		getServiceItemFromLocalStorage();
	}, []);

	console.log(serviceItem);

	return (
		<Layout variant='secondary' title='Our Services'>
			<div className={Styles.container}>
				<div className={Styles.hero}>
					<img src={serviceItem?.hero} alt='hero' width='100%' />
					<div className='wrapper'>
						<div className={Styles.hero_text}>
							<div>
								<h2 className={Styles.hero_title}>{serviceItem?.name}</h2>
								<p className={Styles.hero_description}>
									Is simply dummy text of the printing and types etting
									industry. Lorem Ipsum has been the indu stry's standard dummy
									textis simply of the printing and types.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={Styles.offer}>
					<div className={Styles.offer_image}>
						<img
							src={serviceItem?.service}
							alt='service'
							className={Styles.service}
						/>
						<img
							src='/assets/services/bubbles/circle.svg'
							alt='circle'
							className={Styles.circle}
						/>
					</div>
					<div className={Styles.offer_text}>
						<div>
							<p className={Styles.offer_welcome}>What We Do</p>
							<h2 className={Styles.offer_title}>
								{serviceItem?.name} - How we do it
							</h2>
							<p className={Styles.offer_description}>
								Is simply dummy text of the printing and types etting industry.
								Lorem Ipsum has been the indu stry's standard dummy textis
								simply of the printing and types.
							</p>
							<p className={Styles.offer_description}>
								Is simply dummy text of the printing and types etting industry.
								Lorem Ipsum has been the indu stry's standard dummy textis
								simply
							</p>
						</div>
					</div>
				</div>

				<div className={Styles.services}>
					<div className={Styles.bubbles}>
						<img
							src='/assets/services/bubbles/bubble-one.svg'
							alt='bubble-one'
							className={Styles.bubble}
						/>
						<img
							src='/assets/services/bubbles/bubble-two.svg'
							alt='bubble-two'
							className={Styles.bubble}
						/>
					</div>
					<div className='wrapper'>
						<div className={Styles.wrapper}>
							<div>
								<p className={Styles.services_welcome}>Our Services</p>
								<h2 className={Styles.services_title}>
									Solutions we bring to your product
								</h2>
								<p className={Styles.services_description}>
									Is simply dummy text of the printing and types etting
									industry. Lorem Ipsum has been the indu stry's standard dummy
									textis simply of the printing and types.
								</p>
							</div>
							<div className={Styles.services_boxes}>
								<div className={Styles.top_wrapper}>
									<div className={Styles.services_boxes_box}>
										<p>Product Maintanace</p>
									</div>
									<div className={Styles.services_boxes_box}>
										<p>Product Redesign</p>
									</div>
								</div>
								<div className={Styles.bottom_wrapper}>
									<div className={Styles.services_boxes_box}>
										<p>New Product Design</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SectionThree />
				<div className='wrapper'>
					<div className={Styles.projects}>
						<hr
							style={{
								background: "rgba(0, 16, 60, 0.32)",
							}}
						/>
						<h5>Other services we provide</h5>
						<div className={Styles.projects_wrapper}>
							<div className={Styles.projects_item}>
								<img src='/assets/case-study/project.png' alt='/' />
								<div className={Styles.projects_item_text}>
									<h5>Digital Marketing</h5>
									<span>
										Is simply dummy text of the description of digital marketing
									</span>
								</div>
							</div>
							<div className={Styles.projects_item}>
								<img src='/assets/case-study/project.png' alt='/' />
								<div className={Styles.projects_item_text}>
									<h5>Cloud Services</h5>
									<span>
										Is simply dummy text of the description of digital marketing
									</span>
								</div>
							</div>
							<div className={Styles.projects_item}>
								<img src='/assets/case-study/project.png' alt='/' />
								<div className={Styles.projects_item_text}>
									<h5>Web Development</h5>
									<span>
										Is simply dummy text of the description of digital marketing
									</span>
								</div>
							</div>
						</div>
						<hr
							style={{
								background: "rgba(0, 16, 60, 0.32)",
							}}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default services;
