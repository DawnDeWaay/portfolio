import Screenshot from "/img/MultiRoll.jpeg";
import Character from "/img/Character.jpeg";
import Preset from "/img/preset.png";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
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
          No.1: MultiRoll, <br />a Dungeons &
          <br />
          Dragons Companion
        </h2>
        <AnimatePresence>
          <motion.div
            className="scroll"
            key="learn"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Check it Out&nbsp;</p>
            <motion.p
              animate={{ y: [0, -5, 5, 0, 0, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              vVv
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="content-contain">
        <div className="info-container">
          <p>
            MultiRoll is a slick web tool I created to streamline encounters and
            monotonous dice rolling in D&D
          </p>
          <img src={Screenshot} />
        </div>
        <div className="info-container">
          <img src={Character} />
          <p>
            Features include a character creator with dynamic theming options,
            quick roller for non-combat scenarios, and 3D elements utilizing
            Three.js
          </p>
        </div>
        <div className="info-container">
          <p>
            Characters and presets are stored in the browser's localstorage for
            user convenience
          </p>
          <img src={Preset} />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
