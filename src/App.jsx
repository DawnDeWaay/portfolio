import Header from "./Components/Header";
import Background from "/img/1Clittle.png";
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
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
            className="bg"
            src={Background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {section == 1 ? (
            <Projects key="1" />
          ) : section == 2 ? (
            <Education key="2" />
          ) : section == 3 ? (
            <Passions key="3" />
          ) : (
            <Welcome key="0" />
          )}
        </AnimatePresence>
        <Nav sec={section} switchSection={setSection} />
      </div>
    </>
  );
}

export default App;
