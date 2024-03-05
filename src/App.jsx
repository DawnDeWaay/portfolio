import Header from "./Components/Header";
import Background from "/img/1C.png";
import Welcome from "./Components/Welcome";
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
          {section == 1 ? (
            <Welcome />
          ) : section == 2 ? (
            <Welcome />
          ) : section == 3 ? (
            <Welcome />
          ) : (
            <Welcome />
          )}
        </AnimatePresence>
        <ul className="nav">
          <AnimatePresence>
            <motion.li
              onClick={() => setSection(0)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "Spring", delay: 1.1, duration: 1 }}
            >
              Welcome{section == 0 ? " ✦" : null}
            </motion.li>
            <motion.li
              onClick={() => setSection(1)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "Spring", delay: 1.2, duration: 1 }}
            >
              Work{section == 1 ? " ✦" : null}
            </motion.li>
            <motion.li
              onClick={() => setSection(2)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "Spring", delay: 1.3, duration: 1 }}
            >
              Education{section == 2 ? " ✦" : null}
            </motion.li>
            <motion.li
              onClick={() => setSection(3)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "Spring", delay: 1.4, duration: 1 }}
            >
              Passions{section == 3 ? " ✦" : null}
            </motion.li>
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
}

export default App;
