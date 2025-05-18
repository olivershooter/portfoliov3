import { motion } from "framer-motion";
import TimelineItem from "./Timeline";

const Jobs = () => {
	const civilService = (
		<ul className="list-disc ml-8">
			<li>
				Built full stack applications, handling tickets across backend (Java
				Spring Boot) and frontend (React/TypeScript)
			</li>
			<li>
				Collaborated with stakeholders and product owners to design and deliver
				products from concept to completion
			</li>
			<li>
				Designed system architecture using both microservices and monolithic
				patterns with focus on scalability and maintainability
			</li>
			<li>
				Implemented comprehensive testing including E2E (Cypress/Playwright) and
				unit testing (Jest/JUnit)
			</li>
			<li>
				Led diverse teams in hybrid environments, fostering collaboration and
				inclusion across remote/in-office setups
			</li>
		</ul>
	);

	const EPIK = (
		<ul className="list-disc ml-8">
			<li>Managed classroom of 20+ students independently</li>
			<li>
				Created lesson plans from scratch and adapted existing materials for
				different learning styles
			</li>
			<li>
				Developed strong cross-cultural communication skills to overcome
				language barriers
			</li>
		</ul>
	);

	const sectionAnimation = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
		transition: { duration: 0.5 },
	};

	const fadeInAnimation = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true, margin: "0px 0px -100px 0px", amount: 0.3 },
	};

	return (
		<motion.div className="mt-12 mx-8 max-w-2xl" {...sectionAnimation}>
			<motion.h2
				className="text-3xl font-extrabold text-center mb-20"
				{...fadeInAnimation}
			>
				Employment
			</motion.h2>

			<ol className="relative ml-4 mt-4 border-s border-gray-200">
				<TimelineItem
					jobTitle="Software Engineer"
					company="UK Government"
					dateFrom="Oct 2022"
					dateTo="Present"
					description={civilService}
					isLatest
				/>

				<TimelineItem
					jobTitle="Native English Teacher"
					company="English Teaching in Korea (EPIK)"
					dateFrom="February 2018"
					dateTo="March 2020"
					description={EPIK}
				/>
			</ol>
		</motion.div>
	);
};

export default Jobs;
