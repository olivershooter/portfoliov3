import { motion } from "framer-motion";
import TimelineItem from "./Timeline";

const Education = () => {
	const Birmingham = (
		<ul className="list-disc ml-8">
			<li>
				<strong>Graduate coursework:</strong>
			</li>
			<li>Artificial Intelligence & Machine Learning</li>
			<li>Data Structures & Algorithms</li>
			<li>Database Systems</li>
			<li>Full Stack Development</li>
			<li>Object-Oriented Programming</li>
			<li>Software Engineering Principles</li>
			<li>System Architecture Design</li>
		</ul>
	);

	const Lincoln = (
		<ul className="list-disc ml-8">
			<li>
				<strong>Undergraduate coursework:</strong>
			</li>
			<li>Digital Storytelling</li>
			<li>Media Production Fundamentals</li>
			<li>Audience Engagement</li>
			<li>Studio Production Techniques</li>
			<li>Design Thinking Principles</li>
			<li>Capstone: 20-Minute TV Pilot Production</li>
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

	const listItemAnimation = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		viewport: { once: true },
		transition: { delay: 0.2 },
	};

	return (
		<motion.div className="mt-12 mx-8 max-w-2xl" {...sectionAnimation}>
			<motion.h2
				className="text-3xl font-extrabold text-center mb-20"
				{...fadeInAnimation}
			>
				Education
			</motion.h2>

			<ol className="relative ml-4 mt-4 border-s border-gray-200">
				<motion.li {...listItemAnimation}>
					<TimelineItem
						jobTitle="MSc Computer Science"
						isEducation
						company="Birmingham"
						dateFrom="Sep 2020"
						dateTo="Oct 2021"
						description={Birmingham}
					/>
				</motion.li>

				<motion.li {...listItemAnimation}>
					<TimelineItem
						jobTitle="BA Media Production"
						isEducation
						company="University of Lincoln"
						dateFrom="September 2014"
						dateTo="June 2017"
						description={Lincoln}
					/>
				</motion.li>
			</ol>
		</motion.div>
	);
};

export default Education;
