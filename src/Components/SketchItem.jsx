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
        },
      }}
      whileHover={{
        opacity: 0.9,
        transition: { duration: 0.7 },
      }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="name">{name}</div>
      <div className="id">No.{id}</div>
      <div className="drawing"></div>
      <div className="date">{date}</div>
    </motion.div>
  );
};

export default SketchItem;
