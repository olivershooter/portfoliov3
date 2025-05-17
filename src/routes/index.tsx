import Education from "@/components/Education";
import { Header } from "@/components/Header";
import Jobs from "@/components/Jobs";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<Navbar />
			<div
				id="#header"
				className="bg-[#fff8f0] h-screen w-full overflow-hidden"
			>
				<Header />
			</div>

			<div id="#employment" className="flex justify-center bg-[#fff8f0]">
				<Jobs />
			</div>
			<div id="#education" className="flex justify-center bg-[#fff8f0]">
				<Education />
			</div>

			<div id="#projects" className="flex justify-center bg-[#fff8f0]">
				<Projects />
			</div>
		</>
	);
}
