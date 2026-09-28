import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";

const TechIcon = ({
	path,
	x,
	y,
	size = 80,
}: {
	path: string;
	x: number;
	y: number;
	size?: number;
}) => {
	return (
		<motion.div
			className="absolute -translate-x-1/2 -translate-y-1/2"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			style={{
				left: `calc(50% + ${x}%)`,
				top: `calc(50% + ${y}%)`,
			}}
		>
			<motion.div
				initial={false}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 1 }}
				className="cursor-pointer"
			>
				<Tilt
					glareEnable={true}
					glareMaxOpacity={0.4}
					glarePosition="top"
					tiltMaxAngleX={12}
					tiltMaxAngleY={12}
				>
					<img src={path} height={size} width={size} alt="Icon" />
				</Tilt>
			</motion.div>
		</motion.div>
	);
};

export default TechIcon;
