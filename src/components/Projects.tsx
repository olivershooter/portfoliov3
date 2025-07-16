import { motion } from "framer-motion";
import { Button } from "./OliversButton";
import { useCallback } from "react";

interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	image: string;
	links: {
		github?: string;
		demo?: string;
	};
}

const PROJECTS: Project[] = [
	{
		id: 1,
		title: "Candice - Android Language Translator",
		description:
			"A native Android application using Google's LLM models to translate to any language. Features flashcards to test your most translated words.",
		tags: ["Java", "SQLite", "Android", "Material Design"],
		image: "/candice_home.png",
		links: {
			github: "https://github.com/olivershooter/candice/tree/main",
		},
	},
	{
		id: 2,
		title: "Football Statistics",
		description:
			"A Football Statistics website with API to present game stats including subs, goals, possession, and more.",
		tags: [
			"Vite/React",
			"REST API",
			"Tanstack",
			"ShadCn",
			"FastAPI",
			"Python",
		],
		image: "/football_home.png",
		links: {
			github: "https://github.com/olivershooter/football-statistics-website",
			demo: "https://football-statistics.olivershooter.com/",
		},
	},
];

const cardVariants = {
	initial: { y: 30, opacity: 0 },
	whileInView: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 25,
		},
	},
};

const Projects = () => {
	const openLink = useCallback((url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	}, []);

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
					Projects
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{PROJECTS.map((project, index) => (
						<motion.div
							key={project.id}
							{...cardVariants}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -8, transition: { duration: 0.2 } }}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
							viewport={{
								once: true,
								margin: "0px 0px -100px 0px",
								amount: 0.3,
							}}
						>
							<img
								src={project.image}
								alt={`${project.title} screenshot`}
								className="w-full h-48 object-cover"
								loading="lazy"
							/>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-3 justify-center">
									{project.links.github && (
										<Button
											text="GitHub"
											className="text-white bg-blue-700 hover:bg-blue-800"
											onClick={() => openLink(project.links.github!)}
										/>
									)}
									{project.links.demo && (
										<Button
											text="Live Demo"
											className="text-white bg-green-600 hover:bg-green-700"
											onClick={() => openLink(project.links.demo!)}
										/>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
