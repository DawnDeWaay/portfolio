import { motion } from "framer-motion";

const Header = ({ journalOpen }) => {
  return (
    <div className="header">
      <div className="inner-header">
        <motion.h1
          key="ddewaay"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
        >
          <a href="/" style={{ color: journalOpen ? "white" : "black" }}>
            Don DeWaay III
          </a>
        </motion.h1>
        <motion.h1
          key="contact"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
        >
          <a
            href="mailto:dondewaay@gmail.com"
            style={{ color: journalOpen ? "white" : "black" }}
          >
            Contact
          </a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
