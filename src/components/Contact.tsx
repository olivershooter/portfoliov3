import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { useRef } from "react";

const Contact = () => {
	const { enqueueSnackbar } = useSnackbar();
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const data = await response.json();
			console.log("data ", data);

			if (data.success) {
				enqueueSnackbar("Message sent successfully!", { variant: "success" });
				formRef.current?.reset();
			} else {
				enqueueSnackbar("Failed to send message. Please try again.", {
					variant: "error",
				});
			}
		} catch (error) {
			enqueueSnackbar("An error occurred. Please check your connection.", {
				variant: "error",
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full mx-auto p-8 mb-20"
		>
			<h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
				Contact Me
			</h2>

			<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
				<input
					type="hidden"
					name="access_key"
					value="9ca399db-68c9-47da-9e2b-92e21c745861"
				/>

				<div>
					<label htmlFor="name" className="block text-sm font-medium">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
					/>
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
					/>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
					/>
				</div>

				<button
					type="submit"
					className="btn w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
				>
					Send Message
				</button>
			</form>
		</motion.div>
	);
};

export default Contact;
