/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";

/* -------------------------- Internal Dependenceis ------------------------- */
import Styles from "../styles/project-request.module.scss";
import SectionText from "../components/section_text/SectionText";
import Stepper from "../components/stepper/stepper";
import Layout from "components/layout";

const ProjectRequest = () => {
	return (
		<Layout variant='secondary' title='Project Request'>
			<div className={Styles.container}>
				<div className='wrapper'>
					<div className={Styles.hero}>
						<SectionText
							textColor='var(--primary)'
							title='Ut mattis iaculis nulla donec quam enim amet dictum a. Auctor.'
							description='Mauris volutpat maecenas quis molestie pellentesque sit diam egestas sed. Est ornare bibendum ut facilisis rhoncus porta habitant. Scelerisque amet ut posuere sit nulla urna vitae amet. Nulla sit lorem tortor, nunc. Sed'
						/>
					</div>
					<Stepper />
				</div>
			</div>
		</Layout>
	);
};

export default ProjectRequest;
