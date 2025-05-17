import { useState } from "react";
import logo from "/OS_logo.svg";

const links = [
	{ link: "/about", label: "Features" },
	{ link: "/pricing", label: "Pricing" },
	{ link: "/learn", label: "Learn" },
	{ link: "/community", label: "Community" },
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
			}}
		>
			{link.label}
		</a>
	));

	return (
		<div className="sticky top-4 z-50 w-full flex justify-center">
			<header className="w-9/12 sm:max-w-xl bg-gray-100 backdrop-blur-sm rounded-full shadow-slate-400 shadow-md border border-gray-200 py-1.5">
				<div className="h-10 sm:h-14 flex sm:justify-between justify-center items-center px-2 sm:px-4">
					<div className="hidden sm:flex items-center gap-1 p-1 rounded-full hover:bg-gray-100">
						<img src={logo} alt="OS_logo" className="w-8 h-6 sm:w-12 sm:h-10" />
					</div>

					<div className="flex items-center gap-1 overflow-x-auto bg-gray-100/80 rounded-full justify-center sm:justify-start">
						{items}
					</div>
				</div>
			</header>
		</div>
	);
};
