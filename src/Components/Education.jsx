import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="education"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Don Studied
          <br />
          Computer Science
          <br />
          and Psychology @<br />
          the University of Iowa
        </h2>
        <p className="learn-more">Learn More Below</p>
      </div>
    </motion.div>
  );
};

export default Education;
