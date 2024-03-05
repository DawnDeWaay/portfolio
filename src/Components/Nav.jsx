import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ sec, switchSection }) => {
  return (
    <ul className="nav">
      <AnimatePresence>
        <motion.li
          key={"0"}
          onClick={() => switchSection(0)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "Spring", delay: 1.1, duration: 0.5 }}
        >
          Welcome{sec == 0 ? " ✦" : null}
        </motion.li>
        <motion.li
          key={"1"}
          onClick={() => switchSection(1)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "Spring", delay: 1.2, duration: 0.5 }}
        >
          Work{sec == 1 ? " ✦" : null}
        </motion.li>
        <motion.li
          key={"2"}
          onClick={() => switchSection(2)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "Spring", delay: 1.3, duration: 0.5 }}
        >
          Education{sec == 2 ? " ✦" : null}
        </motion.li>
        <motion.li
          key={"3"}
          onClick={() => switchSection(3)}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "Spring", delay: 1.4, duration: 0.5 }}
        >
          Passions{sec == 3 ? " ✦" : null}
        </motion.li>
      </AnimatePresence>
    </ul>
  );
};

export default Nav;
