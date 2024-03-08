import Screenshot from "/img/MultiRoll.jpeg";
import Character from "/img/Character.jpeg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="hero">
        <h2>
          No.1: MultiRoll, <br />a Dungeons and
          <br />
          Dragons Companion
        </h2>
        <p className="learn-more">Check it Out Below vVv</p>
      </div>
      <div className="info-container">
        <p>
          MultiRoll is a slick web tool created to streamline encounters and
          dice rolling in D&D
        </p>
        <img src={Screenshot} />
      </div>
      <div className="info-container">
        <img src={Character} />
        <p>
          Features include a character creator with dynamic personalization
          options, a quick roller for non-combat scenarios, and motion graphics
          utilizing Three.js and Framer Motion React libraries
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;
