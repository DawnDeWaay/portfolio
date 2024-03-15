import { motion } from "framer-motion";

const SketchItem = ({ name, id, date, img }) => {
  const delayTime = Math.random() / 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delayTime,
        },
      }}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.div
        className="item"
        initial={{ opacity: 0.7 }}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="name">{name}</div>
        <div className="id">No.{id}</div>
        <img src={img} alt={id} className="drawing" />
        <div className="date">{date}</div>
      </motion.div>
    </motion.div>
  );
};

export default SketchItem;
