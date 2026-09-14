import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BigText = ({ text }: { text: string }) => {
	const [isTop, setIsTop] = useState(false);
	const [largeFontSize, setLargeFontSize] = useState(
		() => window.innerWidth * 0.18,
	);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const section = ref.current?.parentElement;
		if (!section) return;

		const updatePosition = () => {
			const rect = section.getBoundingClientRect();
			setIsTop(rect.top <= 0 && rect.bottom > 0);
		};
		const handleResize = () => {
			setLargeFontSize(window.innerWidth * 0.18);
			updatePosition();
		};

		updatePosition();
		document.body.addEventListener("scroll", updatePosition, { passive: true });
		window.addEventListener("resize", handleResize);
		return () => {
			document.body.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div id={text} ref={ref} className="h-[19.8vw] w-full">
			<motion.h1
				className={
					isTop
						? "pointer-events-none fixed left-0 top-0 z-40 text-nowrap leading-[1.1]"
						: "pointer-events-none flex w-[100%] leading-[1.1] text-nowrap overflow-x-hidden overflow-y-auto z-[-1]"
				}
				initial={{
					x: 0,
					y: largeFontSize / -18,
					fontSize: largeFontSize,
				}}
				animate={{
					fontSize: isTop ? 40 : largeFontSize,
					x: isTop ? 28 : 0,
					y: isTop ? 86 : largeFontSize / -18,
				}}
			>
				<span className="redaction35 text-[#796C98]">&nbsp;~ </span>
				{text}
			</motion.h1>
		</div>
	);
};

export default BigText;
