import { motion } from "framer-motion";

const SketchItem = () => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="name">Name</div>
      <div className="id">ID</div>
    </motion.div>
  );
};

export default SketchItem;
