import { motion } from "framer-motion";

const Passions = () => {
  return (
    <motion.div
      className="passions"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Don Loves Fashion,
          <br />
          Design, Fighting Games,
          <br />
          and Food
        </h2>
        <p className="learn-more">Learn More Below</p>
      </div>
    </motion.div>
  );
};

export default Passions;
