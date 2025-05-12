import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
			<motion.div
				className="absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px]"
				style={{
					scale,
					width: "100%",
					height: "100vh",
					position: "relative",
				}}
			>
				<div className="h-full flex flex-col items-center justify-center gap-14">
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

			<div className="pt-20 mt-20 px-4 space-y-8">
				<h1 className="text-4xl font-bold">Scroll Effect Demo</h1>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">Exploring the Cosmos</h2>
					<p className="text-lg">
						The cosmos is all that is, or ever was, or ever will be. Our
						contemplations of the cosmos stir us - there is a tingling in the
						spine, a catch in the voice, a faint sensation as if a distant
						memory, of falling from a great height. We know we are approaching
						the grandest of mysteries.
					</p>
					<img
						src="https://source.unsplash.com/random/800x400?space"
						alt="Space"
						className="w-full h-64 object-cover rounded-lg"
					/>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">Quantum Mysteries</h2>
					<p className="text-lg">
						Quantum mechanics is the description of the behavior of matter and
						light in all its details and, in particular, of the happenings on an
						atomic scale. Things on a very small scale behave like nothing you
						have any direct experience with. They do not behave like waves, they
						do not behave like particles.
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Superposition principle</li>
						<li>Quantum entanglement</li>
						<li>Wave-particle duality</li>
						<li>Uncertainty principle</li>
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">The Pale Blue Dot</h2>
					<p className="text-lg">
						Look again at that dot. That's here. That's home. That's us. On it
						everyone you love, everyone you know, everyone you ever heard of,
						every human being who ever was, lived out their lives. The aggregate
						of our joy and suffering, thousands of confident religions,
						ideologies, and economic doctrines.
					</p>
					<img
						src="https://source.unsplash.com/random/800x400?earth"
						alt="Earth"
						className="w-full h-64 object-cover rounded-lg"
					/>
				</section>

				{/* Add more sections as needed */}
				{[...Array(20)].map((_, i) => (
					<section key={"placeholder-section"} className="space-y-4">
						<h2 className="text-2xl font-semibold">Section {i + 1}</h2>
						<p className="text-lg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</section>
				))}
			</div>
		</>
	);
}
