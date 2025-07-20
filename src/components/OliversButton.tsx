import { motion } from "framer-motion";
import { memo } from "react";

interface ButtonProps {
	text: string;
	className: string;
	onClick: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
}

export const Button = memo<ButtonProps>(({
	text,
	className,
	onClick,
	disabled = false,
	type = "button",
}) => (
	<motion.button
		type={type}
		disabled={disabled}
		className={`font-bold rounded-full text-sm px-5 py-3 text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${className}`}
		whileHover={disabled ? {} : { scale: 1.05 }}
		whileTap={disabled ? {} : { scale: 0.95 }}
		transition={{ duration: 0.15, ease: "easeInOut" }}
		onClick={onClick}
		aria-label={text}
	>
		{text}
	</motion.button>
));
