import { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "/OS_logo.svg";
import downarrow from "/down-arrow.svg";
import { Button } from "./OliversButton";

const TECH_STACK = [
	"TypeScript",
	"JavaScript",
	"Java",
	"Python",
	"React",
	"Next.js",
	"REST APIs",
	"Spring Boot",
];

const BASE_TEXT =
	"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with ";

export const Header = () => {
	const scrollToContact = useCallback(() => {
		const contactSection = document.getElementById("contact");
		contactSection?.scrollIntoView({ behavior: "smooth" });
	}, []);

	// Generate animation sequence more efficiently
	const animationSequence = TECH_STACK.flatMap((tech) => [
		`${BASE_TEXT}${tech}`,
		1000,
	]).concat([`${BASE_TEXT}many technologies!`, 8000]);

	const ScrollIndicator = () => (
		<div className="absolute bottom-8 left-0 right-0 flex justify-center">
			<div className="animate-bounce flex flex-col items-center">
				<img
					src={downarrow}
					alt="Scroll down for more content"
					className="w-8 h-8 mb-2"
				/>
				<p className="text-center text-xl font-bold text-black">
					Scroll for more
				</p>
			</div>
		</div>
	);

	return (
		<>
			<div className="h-full w-full flex flex-col items-center justify-center gap-12 z-10">
				<img
					src={logo}
					alt="Oliver Shooter Logo"
					className="w-48 h-48 sm:w-52 sm:h-52"
				/>
				<div className="max-w-4xl text-center font-bold text-lg sm:text-xl px-4 relative">
					{/* Hidden element to reserve space for the longest text */}
					<span
						className="invisible absolute inset-0 whitespace-pre-wrap"
						aria-hidden="true"
					>
						{BASE_TEXT}specializing in full-stack development and many
						technologies!
					</span>
					{/* Actual animation */}
					<TypeAnimation
						sequence={animationSequence}
						wrapper="span"
						speed={35}
						className="block"
						repeat={Number.POSITIVE_INFINITY}
					/>
				</div>
				<div className="flex flex-col sm:flex-row gap-4">
					<Button
						text="Request CV"
						className="text-white bg-blue-700 hover:bg-blue-800"
						onClick={scrollToContact}
					/>
					<Button
						text="Contact Me"
						className="text-slate-700 bg-gray-200 hover:bg-gray-300"
						onClick={scrollToContact}
					/>
				</div>
			</div>
			<ScrollIndicator />
		</>
	);
};
