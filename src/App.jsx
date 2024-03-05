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
        <ul>
          <li onClick={() => setSection(0)}>Welcome</li>
          <li onClick={() => setSection(1)}>Work</li>
          <li onClick={() => setSection(2)}>Education</li>
          <li onClick={() => setSection(3)}>Passions</li>
        </ul>
      </div>
    </>
  );
}

export default App;
