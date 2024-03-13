import { motion } from "framer-motion";

const SketchItem = ({ name, id, date }) => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.3 }}
      whileHover={{ opacity: 0.9 }}
    >
      <div className="name">{name}</div>
      <div className="id">No.{id}</div>
      <div className="drawing">{/* <img src={path} /> */}</div>
      <div className="date">{date}</div>
    </motion.div>
  );
};

export default SketchItem;
