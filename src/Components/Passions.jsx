import Cake from "/img/cake.jpeg";
import Reina from "/img/reina.png";

import { motion, AnimatePresence } from "framer-motion";

const Passions = () => {
  return (
    <motion.div
      className="page"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          Don Loves Fashion,
          <br />
          Fitness, Design,
          <br />
          Fighting Games, Jazz,
          <br />
          and Food
        </h2>
        <AnimatePresence>
          <div className="scroll">
            <p>Rate my Style&nbsp;</p>
            <motion.p
              animate={{ y: [0, 0, -5, 5, 0, 0] }}
              transition={{
                repeat: Infinity,
                type: "Spring",
                duration: 1.5,
              }}
            >
              vVv
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
      <div className="info-container">
        <img src={Cake} />
        <p>Tres leches cake! My favorite dessert</p>
      </div>
      <div className="info-container">
        <p>
          I've successfully lost over 60lbs over the course of 2023, and now I'm
          working on building muscle
        </p>
      </div>
      <div className="info-container">
        <p>
          I play multiple fighting games, including Smash Ultimate, Tekken 8,
          and Guilty Gear Strive
        </p>
        <img src={Reina} />
      </div>
    </motion.div>
  );
};

export default Passions;
