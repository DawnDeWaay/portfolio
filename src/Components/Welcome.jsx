import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.h2
      className="welcome"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 1, duration: 1 }}
    >
      Don is a <br />
      Frontend Designer & Dev Based in Des Moines, Iowa
    </motion.h2>
  );
};

export default Welcome;
