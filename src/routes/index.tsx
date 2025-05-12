import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Jobs from "@/components/Jobs";
import logo from "/OS_logo.svg";
import downarrow from "/down-arrow.svg";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const [viewportHeight, setViewportHeight] = useState(() =>
		typeof window !== "undefined" ? window.innerHeight : 0,
	);
	const { scrollY } = useScroll();

	useEffect(() => {
		const handleResize = () => {
			setViewportHeight(window.innerHeight);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scale = useTransform(scrollY, [0, viewportHeight], [1, 0.2], {
		clamp: true,
	});

	return (
		<>
			<div className="bg-gradient-to-tr from-amber-800/80 via-orange-400/85 to-yellow-900/90">
				<motion.div
					className="absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px]"
					style={{
						scale,
						width: "100%",
						height: "100vh",
						position: "relative",
					}}
				>
					<div className="h-full flex flex-col items-center justify-center gap-14 ">
						<img src={logo} alt="OS_logo" width="200rem" height="200rem" />
						<TypeAnimation
							sequence={[
								"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with languages like Typescript",
								1000, // wait 1s
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
								"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development. I've worked with technologies like APIs",
								1000,
								"Hi there! My name is Oliver and I'm a software engineer specializing in full-stack development... and more",
								10000,
							]}
							wrapper="span"
							speed={30}
							className="max-w-5/12 text-center font-extrabold"
							repeat={Number.POSITIVE_INFINITY}
						/>
						<div className="flex flex-row gap-4">
							<motion.button
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-3 text-center"
								whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
								whileTap={{ scale: 0.9 }}
								onClick={() => console.log("First button clicked!")}
							>
								Download CV
							</motion.button>

							<motion.button
								className="text-slate-700 bg-gray-100 hover:bg-gray-100 focus:ring-blue-300 font-extrabold rounded-full text-sm px-5 py-3 text-center"
								whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
								whileTap={{ scale: 0.9 }}
								onClick={() => console.log("Second button clicked!")}
							>
								Contact Me
							</motion.button>
						</div>
					</div>

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
				</motion.div>
			</div>
			<div
				id="#timeline"
				className="flex justify-center bg-gradient-to-r from-rose-100 to-teal-100"
			>
				<Jobs />
			</div>
		</>
	);
}
