import Don from "/img/don.jpeg";
import Workin from "/img/workin.jpeg";
import Uiowa from "/img/uiowa.jpeg";
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
              animate={{ y: [0, -5, 5, 0, 0, 0] }}
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
            <p>I have experience in many popular development technologies:</p>
            <div className="ul-contain">
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>Haskell</li>
              </ul>
              <ul>
                <li>React</li>
                <li>RESTful APIs</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Three.js</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info-container">
          <p>
            I participated in several extracirricular activities while keeping
            up with class, such as Campus Symphony Orchestra, Uiowa Alliance
            Center, Badminton Club, and Hawkeye Sunset Club
          </p>
          <img src={Don} />
        </div>
        <div className="info-container">
          <img src={Workin} />
          <p>
            While I wasn't studying for Algorithms at the Main Library, you
            could find me working late into the night patrolling campus for DPS
            Student Security
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
