import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";

const ExampleImage = ({
	path,
	rotate = -10,
	initialRotate = -5,
	initialX = -100,
	initialY = 50,
}: {
	path: string;
	rotate?: number;
	initialRotate?: number;
	initialX?: number;
	initialY?: number;
}) => {
	return (
		<motion.div
			initial={{ rotate: initialRotate }}
			whileInView={{ rotate: rotate }}
			whileHover={{ rotate: 0, scale: 1.05 }}
			viewport={{ once: true }}
		>
			<Tilt
				glareEnable={true}
				glareMaxOpacity={0.4}
				glarePosition="top"
				tiltMaxAngleX={3}
				tiltMaxAngleY={3}
			>
				<motion.div
					className="bg-white p-4 shadow-lg cursor-pointer"
					initial={{
						opacity: 0,
						x: initialX,
						y: initialY,
					}}
					whileInView={{ opacity: 1, x: 0, y: 0 }}
					viewport={{ once: true }}
					transition={{
						x: {
							duration: 0.1,
							delay: 0.5,
							type: "spring",
							stiffness: 260,
							damping: 22,
							mass: 0.6,
						},
						y: {
							duration: 0.1,
							delay: 0.5,
							type: "spring",
							stiffness: 260,
							damping: 22,
							mass: 0.6,
						},
						opacity: {
							delay: 0.5,
						},
					}}
				>
					<img src={path} alt="Skillmp" />
				</motion.div>
			</Tilt>
		</motion.div>
	);
};

export default ExampleImage;
