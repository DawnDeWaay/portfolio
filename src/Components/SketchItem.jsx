import { motion } from "framer-motion";

const SketchItem = ({ name, id, date, img }) => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 0.7,
        y: 0,
        transition: {
          duration: 0.3,
        },
      }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.7 },
      }}
      whileTap={{ scale: 0.99 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="name">{name}</div>
      <div className="id">No.{id}</div>
      <img src={img} alt={id} className="drawing" />
      <div className="date">{date}</div>
    </motion.div>
  );
};

export default SketchItem;
