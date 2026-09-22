import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

const LARGE_FONT_SIZE = 200;
const SMALL_FONT_SIZE = 40;
const LARGE_HEADING_HEIGHT = 220;
const LARGE_Y = -11;
const HEADER_ROW_HEIGHT = 48;
const FIXED_Y_OFFSET = 16;

type HeadingMode = "large" | "fixed" | "hidden";

const BigText = ({ text }: { text: string }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const [mode, setMode] = useState<HeadingMode>("large");
	const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 });

	useLayoutEffect(() => {
		const section = ref.current?.parentElement;
		const header = document.querySelector<HTMLElement>(".header");
		if (!section || !header) return;

		let fixedX = 0;
		let fixedY = 0;

		const updateHeaderPosition = () => {
			const headerRect = header.getBoundingClientRect();
			fixedX = headerRect.left;
			fixedY = headerRect.top + HEADER_ROW_HEIGHT + FIXED_Y_OFFSET;

			setFixedPosition((currentPosition) =>
				currentPosition.x === fixedX && currentPosition.y === fixedY
					? currentPosition
					: { x: fixedX, y: fixedY },
			);
		};

		const updatePosition = () => {
			const rect = section.getBoundingClientRect();
			const nextMode: HeadingMode =
				rect.top + LARGE_Y > fixedY
					? "large"
					: rect.bottom > fixedY
						? "fixed"
						: "hidden";

			setMode((currentMode) =>
				currentMode === nextMode ? currentMode : nextMode,
			);
		};

		const updateLayout = () => {
			updateHeaderPosition();
			updatePosition();
		};

		updateLayout();
		document.body.addEventListener("scroll", updatePosition, { passive: true });
		window.addEventListener("resize", updateLayout);
		return () => {
			document.body.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updateLayout);
		};
	}, []);

	const isLarge = mode === "large";

	return (
		<div
			id={text}
			ref={ref}
			className="relative w-full z-40"
			style={{ height: LARGE_HEADING_HEIGHT }}
		>
			<motion.h1
				className={`pointer-events-none left-0 flex w-full z-40 text-nowrap leading-[1.1] overflow-x-hidden ${isLarge ? "absolute" : "fixed"}`}
				style={{ top: isLarge ? LARGE_Y : fixedPosition.y }}
				initial={{ opacity: 0, x: 0, fontSize: LARGE_FONT_SIZE }}
				animate={{
					fontSize: isLarge ? LARGE_FONT_SIZE : SMALL_FONT_SIZE,
					opacity: mode === "hidden" ? 0 : 1,
					x: isLarge ? 0 : fixedPosition.x,
				}}
			>
				<span className="redaction35 text-[#796C98]">&nbsp;~ </span>
				{text}
			</motion.h1>
		</div>
	);
};

export default BigText;
