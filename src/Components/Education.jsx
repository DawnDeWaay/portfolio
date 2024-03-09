import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          <motion.div
            className="learn-more"
            key="learn"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Scroll for Memories&nbsp;</p>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Education;
