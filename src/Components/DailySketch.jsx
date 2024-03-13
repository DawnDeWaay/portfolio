import SketchItem from "./SketchItem";
import { motion } from "framer-motion";

const DailySketch = () => {
  const sketches = [
    { name: "Sketch 1", id: 1, path: "/sketches/1" },
    { name: "Sketch 2", id: 2, path: "/sketches/2" },
    { name: "Sketch 3", id: 3, path: "/sketches/3" },
    { name: "Sketch 4", id: 4, path: "/sketches/4" },
    { name: "Sketch 5", id: 5, path: "/sketches/5" },
    { name: "Sketch 6", id: 6, path: "/sketches/6" },
  ];

  return (
    <motion.div
      className="daily"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="top">
        <h1>Welcome to my Daily Journal, a place to collect my thoughts</h1>
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
        {sketches.reverse().map((item) => (
          <SketchItem name={item.name} id={item.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default DailySketch;
