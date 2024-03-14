import SketchItem from "./SketchItem";
import { motion, AnimatePresence } from "framer-motion";
import one from "/sketches/1.png";
import two from "/sketches/2.png";
import three from "/sketches/3.png";

const DailySketch = () => {
  const sketches = [
    {
      name: "Shuffle",
      id: 1,
      date: "3/08/2024",
      img: one,
    },
    {
      name: "Roadside",
      id: 2,
      date: "3/09/2024",
      img: two,
    },
    {
      name: "Moonlight",
      id: 3,
      date: "3/10/2024",
      img: three,
    },
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
        <AnimatePresence>
          {sketches.reverse().map((item) => (
            <SketchItem
              key={item.id}
              name={item.name}
              id={item.id}
              date={item.date}
              img={item.img}
              popDelay={item.id * 0.1}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DailySketch;
