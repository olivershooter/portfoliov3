import { motion } from "framer-motion";
import { Button } from "./OliversButton";

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

const Projects = () => {
	const projects: Project[] = [
		{
			id: 1,
			title: "Candice - Android Language Translator",
			description:
				"A native Android application which makes use of Google's LLM models to translate to any language. Built with additional features like flashcards to test your most translated words.",
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
				"A Football Statistics website built with an API to present football games stats including but not limited to, subs, goals, posession, etc.",
			tags: [
				"Vite/React",
				"REST API",
				"Tanstack",
				"ShadCn",
				"FAST API",
				"Python",
			],
			image: "/football_home.png",
			links: {
				github: "https://github.com/olivershooter/football-statistics-website",
				demo: "https://football-statistics.olivershooter.com/",
			},
		},
		{
			id: 3,
			title: "Todo  App",
			description: "Collaborative task management system",
			tags: ["React", "Firebase", "Material UI", "Redux"],
			image: "https://picsum.photos/400/250",
			links: {
				github: "#",
				demo: "#",
			},
		},
		{
			id: 4,
			title: "E-Commerce Platform",
			description: "A full-stack e-commerce solution with modern features",
			tags: ["React", "Node.js", "MongoDB", "Stripe"],
			image: "https://picsum.photos/400/250",
			links: {
				github: "#",
				demo: "#",
			},
		},
		{
			id: 5,
			title: "Task Management App",
			description: "Collaborative task management system",
			tags: ["React", "Firebase", "Material UI", "Redux"],
			image: "https://picsum.photos/400/250",
			links: {
				github: "#",
				demo: "#",
			},
		},
		{
			id: 6,
			title: "Todo  App",
			description: "Collaborative task management system",
			tags: ["React", "Firebase", "Material UI", "Redux"],
			image: "https://picsum.photos/400/250",
			links: {
				github: "https://github.com/olivershooter/candice/tree/main",
				demo: "#",
			},
		},
		// Add more projects as needed
	];

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		whileInView: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							{...cardVariants}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -12 }}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
							viewport={{
								once: true,
								margin: "0px 0px -100px 0px",
								amount: 0.3,
							}}
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex space-x-4 text-center justify-center">
									{project.links.github && (
										<Button
											text="Github"
											className="text-white bg-blue-700 hover:bg-blue-800"
											onClick={() => console.log("Download CV clicked")}
										/>
									)}
									{project.links.demo && (
										<Button
											text="Live Demo"
											className="text-white bg-blue-700 hover:bg-blue-800"
											onClick={() => console.log("Download CV clicked")}
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
