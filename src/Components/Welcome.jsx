import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
      className="welcome"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Don is a <br />
          Frontend Dev with a<br />
          Knack for Design
          <p>Based in Des Moines, Iowa</p>
        </h2>
      </div>
    </motion.div>
  );
};

export default Welcome;
