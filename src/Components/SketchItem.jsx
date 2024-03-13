import { motion } from "framer-motion";

const SketchItem = ({ name, id, date, popDelay }) => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 0.7,
        y: 0,
        transition: {
          duration: 0.3,
          delay: parseFloat(popDelay),
        },
      }}
      whileHover={{
        opacity: 0.9,
        scale: 1.005,
        transition: { duration: 0.3, delay: 0 },
      }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      whileTap={{ scale: 0.98 }}
    >
      <div className="name">{name}</div>
      <div className="id">No.{id}</div>
      <div className="drawing"></div>
      <div className="date">{date}</div>
    </motion.div>
  );
};

export default SketchItem;
