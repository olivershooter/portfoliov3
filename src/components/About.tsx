import { motion } from "framer-motion";

const About = () => {
	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		whileInView: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
			},
		},
	};

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					{...cardVariants}
					viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.3 }}
				>
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						A Bit About Myself
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed">
						Hey there! 👋 I'm a full-stack developer who loves turning coffee
						into code and building stuff that makes life a little smoother. When
						I'm not wrestling with production bugs, you'll find me tinkering
						with my homelab - my personal playground where I play with Docker
						containers, automate everything that moves, and host family-friendly
						alternatives to big tech services (looking at you, Google Drive!).
						<br />
						<br />
						Between Thinkcentre clusters and reverse proxy configs, I squeeze in
						time for tech reads and the occasional gaming marathon. Always up
						for chatting about self-hosted photo backups (shoutout to Immich!).
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
