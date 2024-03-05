import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
        >
          Don DeWaay III
        </motion.h1>
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
        >
          <a href="https://twitter.com/DonaldDeWaay">Contact</a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
