import Header from "./Components/Header";
import Background from "/img/1C.png";
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Passions from "./Components/Passions";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Styles/App.scss";

function App() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Header />
      <div className="content">
        <AnimatePresence>
          <motion.img
            src={Background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          />
        </AnimatePresence>
        <AnimatePresence>
          {section == 1 ? (
            <motion.div
              key="work"
              className="welcome"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <Work />
            </motion.div>
          ) : section == 2 ? (
            <motion.div
              key="education"
              className="welcome"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <Education />
            </motion.div>
          ) : section == 3 ? (
            <motion.div
              key="passions"
              className="welcome"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <Passions />
            </motion.div>
          ) : (
            <motion.div
              key="welcome"
              className="welcome"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <Welcome />
            </motion.div>
          )}
        </AnimatePresence>
        <Nav sec={section} switchSection={setSection} />
      </div>
    </>
  );
}

export default App;

/*    key="welcome"
      className="welcome"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: "spring", duration: 1 }} */
