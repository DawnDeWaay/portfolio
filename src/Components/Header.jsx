import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <motion.h1 initial={{}}>Don DeWaay III</motion.h1>
        <motion.h1>
          <a href="https://twitter.com/DonaldDeWaay">Contact</a>
        </motion.h1>
      </div>
    </div>
  );
};

export default Header;
