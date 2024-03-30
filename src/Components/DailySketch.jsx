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
import eleven from "/sketches/11.png";
import twelve from "/sketches/12.png";
import thirteen from "/sketches/13.png";
import fourteen from "/sketches/14.png";
import fifteen from "/sketches/15.png";
import sixteen from "/sketches/16.png";
import seventeen from "/sketches/17.png";
import eighteen from "/sketches/18.png";
import nineteen from "/sketches/19.png";

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
      name: "Grow",
      id: 10,
      date: "3/19/2024",
      img: ten,
    },
    {
      name: "Grow 2",
      id: 11,
      date: "3/20/2024",
      img: eleven,
    },
    {
      name: "Spin",
      id: 12,
      date: "3/21/2024",
      img: twelve,
    },
    {
      name: "TIME",
      id: 13,
      date: "3/22/2024",
      img: thirteen,
    },
    {
      name: "Feather",
      id: 14,
      date: "3/23/2024",
      img: fourteen,
    },
    {
      name: "Grow 3",
      id: 15,
      date: "3/24/2024",
      img: fifteen,
    },
    {
      name: "Glare",
      id: 16,
      date: "3/25/2024",
      img: sixteen,
    },
    {
      name: "Little Guy",
      id: 17,
      date: "3/26/2024",
      img: seventeen,
    },
    {
      name: "Family",
      id: 18,
      date: "3/27/2024",
      img: eighteen,
    },
    {
      name: "Escape",
      id: 19,
      date: "3/28/2024",
      img: nineteen,
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
