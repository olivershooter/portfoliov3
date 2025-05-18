import { motion } from "framer-motion";

export const Button = ({
	text,
	className,
	onClick,
}: {
	text: string;
	className: string;
	onClick: () => void;
}) => (
	<motion.button
		className={`font-extrabold rounded-full text-sm px-5 py-3 text-center ${className}`}
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.9 }}
		transition={{ duration: 0.2 }}
		onClick={onClick}
	>
		{text}
	</motion.button>
);
