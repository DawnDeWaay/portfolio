import Cake from "/img/cake.jpeg";
import Joker from "/img/joker.png";
import Mirror from "/img/mirror.jpeg";
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
          Fitness, Fighting Games,
          <br />
          Jazz, and Food
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
      <div className="content-contain">
        <div className="info-container">
          <img src={Mirror} />
          <p>
            I lost over 60lbs over the course of 2023, and now I'm putting my
            calories towards building muscle! 💪
          </p>
        </div>
        <div className="info-container">
          <p>
            Tres leches cake! My favorite dessert to bake for friends and family
          </p>
          <img src={Cake} />
        </div>
        <div className="info-container">
          <img src={Joker} />
          <p>
            I compete in multiple fighting games, including Tekken 8, Smash
            Bros. Ultimate, and Guilty Gear Strive
          </p>
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/1G9FItLV9x9ZYH87NJ7qkx?utm_source=generator&theme=0"
          height="400"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="spotify"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Passions;
