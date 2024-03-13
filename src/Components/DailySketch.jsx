import SketchItem from "./SketchItem";
import { motion } from "framer-motion";

const DailySketch = () => {
  class Sketch {
    constructor(name, id) {
      this.name;
      this.id;
    }
  }

  const listOfSketches = [];

  return (
      <motion.div
        className="daily"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="top">
          <h1>Welcome to my Daily Journal, where I leave it all on the page</h1>
          <h2 style={{ fontSize: "32px" }}>Explore</h2>
          <motion.h3
            animate={{ y: [0, 0, -5, 5, 0, 0] }}
            transition={{
              repeat: Infinity,
              type: "Spring",
              duration: 1.5,
            }}
          >
            vVv
          </motion.h3>
        </div>
        <div className="grid">
          <SketchItem />
          <SketchItem />
          <SketchItem />
          <SketchItem />
          <SketchItem />
        </div>
      </motion.div>
  );
};

export default DailySketch;
