import { motion } from "motion/react";

const SvgSpinner = () => (
  <motion.svg
    initial={{ fill: "black" }}
    whileHover={{ fill: "#796C98", scale: 1.05, rotate: -90 }}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 160.54 160.54"
  >
    <path
      d="M107.02 58.1v-4.58h26.76c14.78 0 26.76-11.98 26.76-26.76S148.56 0 133.78 0h-.01C98.82 0 69.11 22.35 58.1 53.52h-4.57V26.76C53.52 11.99 41.54 0 26.76 0S0 11.99 0 26.76c0 34.96 22.34 64.67 53.51 75.68v4.57H26.76C11.99 107.02 0 119 0 133.78s11.98 26.76 26.76 26.76c34.94 0 64.65-22.34 75.67-53.51h4.59v26.75c0 14.78 11.98 26.76 26.76 26.76s26.76-11.98 26.76-26.76c0-34.95-22.35-64.66-53.52-75.67Z"
      data-name="Calque 1"
    />
  </motion.svg>
);
export default SvgSpinner;
