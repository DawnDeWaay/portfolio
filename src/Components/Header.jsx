import { motion, AnimatePresence } from "framer-motion";

const Header = ({ journalOpen, setJournalOpen, setSection }) => {
  return (
    <div className="header">
      <div className="inner-header">
        <AnimatePresence>
          <motion.h1
            key="ddewaay"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
            style={{ color: journalOpen ? "white" : "black" }}
            onClick={() => {
              setSection(0);
              setJournalOpen(false);
            }}
          >
            Don DeWaay III
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence>
          <motion.h1
            key="contact"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
            onClick={() => {
              setSection(5);
              setJournalOpen(true);
            }}
          >
            Contact
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
