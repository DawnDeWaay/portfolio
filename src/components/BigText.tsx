import { motion, useAnimationControls, useMotionValue } from "motion/react";
import { useLayoutEffect, useRef } from "react";

const LARGE_FONT_SIZE = 200;
const SMALL_FONT_SIZE = 40;
const LARGE_HEADING_HEIGHT = 220;
const LARGE_Y = -11;
const FIXED_X = 28;
const FIXED_Y = 86;
const ANIMATION_DELAY = 64;

const BigText = ({ text }: { text: string }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const controls = useAnimationControls();
	const headingY = useMotionValue(0);

	useLayoutEffect(() => {
		const section = ref.current?.parentElement;
		if (!section) return;
		let wasFixed = false;
		let initialized = false;
		let isFadingOutAbove = false;
		let previousScrollTop = document.body.scrollTop;

		const updatePosition = () => {
			const scrollTop = document.body.scrollTop;
			const isScrollingUp = scrollTop < previousScrollTop;
			const rect = section.getBoundingClientRect();
			const headingTop = rect.top + LARGE_Y;
			const isPinned = headingTop <= FIXED_Y && rect.bottom > FIXED_Y;
			const shouldBeFixed =
				headingTop <= FIXED_Y - ANIMATION_DELAY && rect.bottom > FIXED_Y;

			if (!initialized) {
				headingY.set(isPinned ? FIXED_Y : headingTop);
				controls.set({
					fontSize: shouldBeFixed ? SMALL_FONT_SIZE : LARGE_FONT_SIZE,
					opacity: 1,
					x: shouldBeFixed ? FIXED_X : 0,
				});
				wasFixed = shouldBeFixed;
				initialized = true;
				previousScrollTop = scrollTop;
				return;
			}

			if (shouldBeFixed && !wasFixed) {
				isFadingOutAbove = false;
				headingY.set(FIXED_Y);
				if (isScrollingUp) {
					controls.stop();
					controls.set({
						fontSize: SMALL_FONT_SIZE,
						opacity: 0,
						x: FIXED_X,
					});
					void controls.start({ opacity: 1 });
				} else {
					void controls.start({
						fontSize: SMALL_FONT_SIZE,
						opacity: 1,
						x: FIXED_X,
					});
				}
			} else if (!shouldBeFixed && wasFixed && !isScrollingUp) {
				isFadingOutAbove = true;
				headingY.set(FIXED_Y);
				void controls.start({ opacity: 0 });
			} else if (!shouldBeFixed && wasFixed) {
				isFadingOutAbove = false;
				headingY.set(isPinned ? FIXED_Y : headingTop);
				void controls.start({
					fontSize: LARGE_FONT_SIZE,
					opacity: 1,
					x: 0,
				});
			} else if (!shouldBeFixed && !isFadingOutAbove) {
				headingY.set(isPinned ? FIXED_Y : headingTop);
			}

			wasFixed = shouldBeFixed;
			previousScrollTop = scrollTop;
		};

		updatePosition();
		document.body.addEventListener("scroll", updatePosition, { passive: true });
		window.addEventListener("resize", updatePosition);
		return () => {
			document.body.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
		};
	}, [controls, headingY]);

	return (
		<div
			id={text}
			ref={ref}
			className="w-full"
			style={{ height: LARGE_HEADING_HEIGHT }}
		>
			<motion.h1
				className="pointer-events-none fixed left-0 top-0 z-40 flex w-full text-nowrap leading-[1.1] overflow-x-hidden"
				style={{ y: headingY }}
				initial={{ opacity: 0, x: 0, fontSize: LARGE_FONT_SIZE }}
				animate={controls}
			>
				<span className="redaction35 text-[#796C98]">&nbsp;~ </span>
				{text}
			</motion.h1>
		</div>
	);
};

export default BigText;
