import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { useRef, useState, useCallback } from "react";

const Contact = () => {
	const { enqueueSnackbar } = useSnackbar();
	const formRef = useRef<HTMLFormElement>(null);
	const captchaRef = useRef<HCaptcha>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const resetForm = useCallback(() => {
		formRef.current?.reset();
		setToken(null);
		captchaRef.current?.resetCaptcha();
	}, []);

	const handleCaptchaError = useCallback((error: string) => {
		enqueueSnackbar("CAPTCHA error occurred", { variant: "error" });
		console.error("hCaptcha Error:", error);
	}, [enqueueSnackbar]);

	const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!token) {
			enqueueSnackbar("Please complete the CAPTCHA", { variant: "error" });
			setIsSubmitting(false);
			return;
		}

		const formData = new FormData(e.currentTarget);
		formData.append("h-captcha-response", token);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			if (data.success) {
				enqueueSnackbar("Message sent successfully!", { variant: "success" });
				resetForm();
			} else {
				enqueueSnackbar(
					data.message || "Failed to send message. Please try again.",
					{ variant: "error" }
				);
			}
		} catch (error) {
			const errorMessage = error instanceof Error 
				? `Network error: ${error.message}` 
				: "An error occurred. Please check your connection.";
			enqueueSnackbar(errorMessage, { variant: "error" });
		} finally {
			setIsSubmitting(false);
		}
	}, [token, enqueueSnackbar, resetForm]);

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
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Request Type
					</label>
					<div className="space-y-2">
						<label className="flex items-center">
							<input
								type="radio"
								name="request_type"
								value="general"
								defaultChecked
								className="mr-2 text-blue-600 focus:ring-blue-500"
							/>
							<span className="text-sm text-gray-700">General inquiry</span>
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="request_type"
								value="cv_request"
								className="mr-2 text-blue-600 focus:ring-blue-500"
							/>
							<span className="text-sm text-gray-700">Request CV</span>
						</label>
					</div>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={4}
						placeholder="Please let me know why you're interested in my CV or any other details..."
						className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<HCaptcha
					ref={captchaRef}
					sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
					onVerify={setToken}
					onExpire={() => setToken(null)}
					onError={handleCaptchaError}
					reCaptchaCompat={false}
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					disabled={!token || isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Send Message"}
				</button>
			</form>
		</motion.div>
	);
};

export default Contact;
