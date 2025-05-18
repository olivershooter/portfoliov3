import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import logo from "/OS_logo.svg";
import downarrow from "/down-arrow.svg";
import { Button } from "./OliversButton";

export const Header = () => {
	const ScrollIndicator = () => (
		<div className="absolute bottom-8 left-0 right-0 flex justify-center">
			<div className="animate-bounce flex flex-col items-center">
				<img
					src={downarrow}
					alt="downward-arrow"
					className="text-black text-2xl mb-2"
					width="30rem"
					height="30rem"
				/>
				<p className="text-center text-2xl font-extrabold text-black">
					Scroll for more
				</p>
			</div>
		</div>
	);

	return (
		<>
			<div className="h-full w-full flex flex-col items-center justify-center gap-12 z-10">
				<img src={logo} alt="OS_logo" width="200rem" height="200rem" />
				<TypeAnimation
					sequence={[
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with languages like Typescript",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with languages like Javascript",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with languages like Java",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with languages like Python",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with technologies like React",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with technologies like NextJS",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with technologies like REST APIs",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with technologies like Spring Boot",
						1000,
						"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development... and much more!",
						10000,
					]}
					wrapper="span"
					speed={30}
					className="max-w-5/12 text-center font-extrabold"
					repeat={Number.POSITIVE_INFINITY}
				/>
				<div className="flex flex-row gap-4">
					<Button
						text="Download CV"
						className="text-white bg-blue-700 hover:bg-blue-800"
						onClick={() => console.log("Download CV clicked")}
					/>
					<Button
						text="Contact Me"
						className="text-slate-700 bg-gray-200 hover:bg-gray-300"
						onClick={() => console.log("Contact Me clicked")}
					/>
				</div>
			</div>
			<ScrollIndicator />
		</>
	);
};
