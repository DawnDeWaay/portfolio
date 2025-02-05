import { motion } from "motion/react";

const SvgStairs = () => (
  <motion.svg
    initial={{ fill: "black", scaleX: -1 }}
    whileHover={{ fill: "#796C98", scale: 1.05, rotate: -90 }}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 160.54 160.54"
  >
    <g data-name="Calque 1">
      <path
        d="M53.51 26.76c0 14.78 11.98 26.76 26.76 26.76s26.76 11.98 26.76 26.76 11.98 26.76 26.76 26.76 26.76 11.98 26.76 26.76-11.98 26.76-26.76 26.76H53.51C23.96 160.56 0 136.6 0 107.05V26.76C0 11.98 11.98 0 26.76 0s26.76 11.98 26.76 26.76Z"
        data-name="rounded stairs"
      />
    </g>
  </motion.svg>
);
export default SvgStairs;
