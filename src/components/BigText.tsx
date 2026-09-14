import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BigText = ({ text }: { text: string }) => {
	const [isTop, setIsTop] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const TOP_THRESHOLD_PX = 50;

		const updateIsTop = () => {
			if (!ref.current) return;

			const { top } = ref.current.getBoundingClientRect();
			setIsTop(top <= TOP_THRESHOLD_PX);
		};

		updateIsTop();

		window.addEventListener("scroll", updateIsTop, { passive: true });
		window.addEventListener("resize", updateIsTop);

		return () => {
			window.removeEventListener("scroll", updateIsTop);
			window.removeEventListener("resize", updateIsTop);
		};
	}, []);

	return (
		<>
			<div id={text} ref={ref} />
			<motion.h1
				className="pointer-events-none flex w-[100%] leading-[1.1] text-nowrap overflow-x-hidden overflow-y-auto z-[-1]"
				initial={{
					paddingBottom: "-5vw",
					y: "-1vw",
					fontSize: "18vw",
				}}
				animate={{
					fontSize: "18vw",
				}}
			>
				<span className="redaction35 text-[#796C98]">&nbsp;~ </span>
				{text}
			</motion.h1>
		</>
	);
};

export default BigText;
