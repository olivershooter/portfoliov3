import { useState, useCallback } from "react";
import logo from "/OS_logo.svg";

const NAVIGATION_LINKS = [
	{ id: "about", label: "About" },
	{ id: "education", label: "Education" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
] as const;

type SectionId = typeof NAVIGATION_LINKS[number]["id"] | "header";

export const Navbar = () => {
	const [activeSection, setActiveSection] = useState<SectionId>(NAVIGATION_LINKS[0].id);

	const scrollToSection = useCallback((sectionId: SectionId) => {
		const targetElement = document.getElementById(sectionId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	}, []);

	return (
		<header className="w-9/12 sm:max-w-xl backdrop-blur-sm rounded-full shadow-md border border-gray-200 bg-white/80">
			<div className="flex sm:justify-between justify-center items-center px-2 sm:px-4">
				<button
					type="button"
					className="hidden sm:flex items-center gap-1 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
					onClick={() => scrollToSection("header")}
					aria-label="Go to top"
				>
					<img 
						src={logo} 
						alt="Oliver Shooter Logo" 
						className="w-8 h-6 sm:w-12 sm:h-10" 
					/>
				</button>

				<nav className="flex items-center gap-1 overflow-x-auto rounded-full justify-center sm:justify-start">
					{NAVIGATION_LINKS.map((link) => (
						<button
							key={link.id}
							type="button"
							className={`px-2.5 py-1.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
								activeSection === link.id
									? "bg-blue-600 text-white"
									: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
							}`}
							onClick={() => scrollToSection(link.id)}
							aria-current={activeSection === link.id ? "page" : undefined}
						>
							{link.label}
						</button>
					))}
				</nav>
			</div>
		</header>
	);
};
