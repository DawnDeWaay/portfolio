import Don from "/img/don.jpeg";
import Workin from "/img/workin.jpeg";
import Uiowa from "/img/uiowa.jpeg";
import River from "/img/hanginout.jpeg";
import Stadium from "/img/stadium.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
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
          Don Studied
          <br />
          Computer Science
          <br />
          & Psychology @<br />
          the University of Iowa
        </h2>
        <AnimatePresence>
          <motion.div
            className="scroll"
            key="learn"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Scroll for Memories&nbsp;</p>
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
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="content-contain">
        <div className="info-container">
          <img src={Uiowa} />
          <div className="edu-items">
            <p>
              I have extensive experience in many popular programming languages
              and libraries for both frontend and backend development:
            </p>
            <div className="ul-contain">
              <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>Haskell</li>
              </ul>
              <ul>
                <li>React</li>
                <li>Node.JS</li>
                <li>Three.JS</li>
                <li>
                  Framer
                  <br />
                  Motion
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info-container">
          <p>
            I participated in several extracirricular activities while keeping
            up with schoolwork, such as the Hawkeye Sunset Club, Uiowa Alliance
            Center, Badminton Club, Campus Symphony Orchestra, as well as
            competing in events at the Esports Arcade
          </p>
          <img src={Stadium} />
        </div>
        <div className="info-container">
          <img src={Workin} />
          <p>
            While I wasn't studying for Algorithms at the Main Library, you
            could find me working late into the night patrolling campus for DPS
            Student Security
          </p>
        </div>
        <div className="info-container">
          <p>Hangin out by the Iowa River</p>
          <img src={River} />
        </div>
        <div className="info-container">
          <img src={Don} />
          <p>Me 💅✨</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
