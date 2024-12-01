import { motion, useAnimation } from "motion/react";

const SvgFlower = () => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
  };

  return (
    <motion.svg
      initial={{ fill: "black" }}
      animate={controls}
      whileHover={{ fill: "#796C98" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 160.54 160.54"
    >
      <path
        d="M160.54 120.4c0 22.17-17.97 40.13-40.13 40.13s-40.14-17.97-40.14-40.13c0 22.17-17.98 40.13-40.13 40.13S0 142.57 0 120.4s17.97-40.14 40.13-40.14C17.97 80.27 0 62.3 0 40.14S17.97 0 40.13 0s40.13 17.97 40.13 40.14C80.27 17.97 98.23 0 120.4 0s40.13 17.97 40.13 40.14-17.97 40.13-40.13 40.13c22.17 0 40.13 17.97 40.13 40.14Z"
        data-name="Calque 1"
      />
    </motion.svg>
  );
};

export default SvgFlower;
