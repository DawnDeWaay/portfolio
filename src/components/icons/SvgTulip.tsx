import { motion } from "motion/react";

const SvgTulip = () => (
  <motion.svg
    initial={{ fill: "black" }}
    whileHover={{ fill: "#796C98", scale: 1.05, rotateY: 180 }}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox="0 0 343.36 343.36"
  >
    <path
      d="M343.36 0c-94.82 0-171.68 76.86-171.68 171.68C171.68 76.86 94.82 0 0 0v171.68c0 94.82 76.86 171.68 171.68 171.68s171.68-76.86 171.68-171.68z"
      data-name="tulip 01"
    />
  </motion.svg>
);
export default SvgTulip;
