import { useState } from "react";
import logo from "/OS_logo.svg";
const links = [
	{ link: "#about", label: "About" },
	{ link: "#projects", label: "Projects" },
	{ link: "#contact", label: "Contact" },
	{ link: "#education", label: "Education" },
];
export const Navbar = () => {
	const [active, setActive] = useState(links[0].link);
	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className="px-2.5 py-1.5 text-sm sm:text-md font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 rounded-full data-[active]:bg-blue-600 data-[active]:text-white"
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				const targetId = link.link.substring(1); // Remove the #
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				}
			}}
		>
			{link.label}
		</a>
	));
	return (
		<header className="w-9/12 sm:max-w-xl  backdrop-blur-sm rounded-full shadow-md border border-gray-200">
			<div className="flex sm:justify-between justify-center items-center px-2 sm:px-4">
				<div className="hidden sm:flex items-center gap-1 p-1 rounded-full hover:bg-gray-100">
					<img src={logo} alt="OS_logo" className="w-8 h-6 sm:w-12 sm:h-10" />
				</div>

				<div className="flex items-center gap-1 overflow-x-auto rounded-full justify-center sm:justify-start">
					{items}
				</div>
			</div>
		</header>
	);
};
