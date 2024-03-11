import { motion } from "framer-motion";

const SketchItem = () => {
  return (
    <div className="item-container">
      <motion.div
        className="item"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="name">Name</div>
        <div className="id">Id</div>
      </motion.div>
    </div>
  );
};

export default SketchItem;
