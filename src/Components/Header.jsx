import { motion } from "framer-motion";

const Header = (journal) => {
  return (
    <div className="header">
      <div className="inner-header">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
        >
          <a href="/" style={journal ? { color: "white" } : { color: "black" }}>
            Don DeWaay III
          </a>
        </motion.h1>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
        >
          <a
            href="mailto:dondewaay@gmail.com"
            style={journal ? { color: "white" } : { color: "black" }}
          >
            Contact
          </a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
