import { motion, AnimatePresence } from "framer-motion";

const Passions = () => {
  return (
    <motion.div
      className="page"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Don Love Fashion,
          <br />
          Design, Fighting Games,
          <br />
          Jazz, and Food
        </h2>
        <AnimatePresence>
          <div className="scroll">
            <p>Rate my Style&nbsp;</p>
            <motion.p
              animate={{ y: [0, 0, -5, 5, 0, 0] }}
              transition={{
                repeat: Infinity,
                type: "Spring",
                duration: 1.5,
              }}
            >
              vVv
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
      <div className="info-container">
        <p></p>
      </div>
      <div className="info-container">
        <p></p>
      </div>
      <div className="info-container">
        <p></p>
      </div>
    </motion.div>
  );
};

export default Passions;
