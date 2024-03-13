import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ sec, setSection, setColor, journal }) => {
  return (
    <ul className="nav">
      <AnimatePresence type="wait">
        <motion.li
          key={"0"}
          onClick={() => {
            setSection(0);
            setColor("black");
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.1, duration: 0.5 }}
        >
          Welcome
          {sec == 0 ? (
            <motion.span
              key="star0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.li>
        <motion.li
          key={"1"}
          onClick={() => {
            setSection(1);
            setColor("black");
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.2, duration: 0.5 }}
        >
          Projects
          {sec == 1 ? (
            <motion.span
              key="star1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.li>
        <motion.li
          key={"2"}
          onClick={() => {
            setSection(2);
            setColor("black");
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.3, duration: 0.5 }}
        >
          Education
          {sec == 2 ? (
            <motion.span
              key="star2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.li>
        <motion.li
          key={"3"}
          onClick={() => {
            setSection(3);
            setColor("black");
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.4, duration: 0.5 }}
        >
          Passions
          {sec == 3 ? (
            <motion.span
              key="star3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.li>
        <motion.li
          key={"4"}
          onClick={() => {
            setSection(4);
            journal(true);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.5, duration: 0.5 }}
        >
          Daily Sketch
          {sec == 4 ? (
            <motion.span
              key="star4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              &nbsp;✦
            </motion.span>
          ) : null}
        </motion.li>
      </AnimatePresence>
    </ul>
  );
};

export default Nav;
