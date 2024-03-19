import SketchItem from "./SketchItem";
import { motion, AnimatePresence } from "framer-motion";
import one from "/sketches/1.png";
import two from "/sketches/2.png";
import three from "/sketches/3.png";
import four from "/sketches/4.png";
import five from "/sketches/5.png";
import six from "/sketches/6.png";
import seven from "/sketches/7.png";
import eight from "/sketches/8.png";
import nine from "/sketches/9.png";
import ten from "/sketches/10.png";

const DailySketch = () => {
  const sketches = [
    {
      name: "Aardvark",
      id: 1,
      date: "3/10/2024",
      img: one,
    },
    {
      name: "Trickle",
      id: 2,
      date: "3/11/2024",
      img: two,
    },
    {
      name: "Greatsword",
      id: 3,
      date: "3/12/2024",
      img: three,
    },
    {
      name: "Marsh",
      id: 4,
      date: "3/13/2024",
      img: four,
    },
    {
      name: "Warble",
      id: 5,
      date: "3/14/2024",
      img: five,
    },
    {
      name: "Chicanery",
      id: 6,
      date: "3/15/2024",
      img: six,
    },
    {
      name: "Blunder",
      id: 7,
      date: "3/16/2024",
      img: seven,
    },
    {
      name: "Roses",
      id: 8,
      date: "3/17/2024",
      img: eight,
    },
    {
      name: "Beach",
      id: 9,
      date: "3/18/2024",
      img: nine,
    },
    {
      name: "Growth",
      id: 10,
      date: "3/19/2024",
      img: ten,
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
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DailySketch;
