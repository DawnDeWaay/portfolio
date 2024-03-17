import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ sec, setSection, journal }) => {
  return (
    <ul className="nav">
      <AnimatePresence type="wait">
        <motion.li
          key={"zero"}
          onClick={() => {
            setSection(0);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.1, duration: 0.5 }}
          className="noselect"
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
          key={"one"}
          onClick={() => {
            setSection(1);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.15, duration: 0.5 }}
          className="noselect"
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
          key={"two"}
          onClick={() => {
            setSection(2);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.2, duration: 0.5 }}
          className="noselect"
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
          key={"three"}
          onClick={() => {
            setSection(3);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.25, duration: 0.5 }}
          className="noselect"
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
          key={"four"}
          onClick={() => {
            setSection(4);
            journal(true);
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "Spring", delay: 1.3, duration: 0.5 }}
          className="noselect"
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
