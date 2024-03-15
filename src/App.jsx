import Header from "./Components/Header";
import Background from "/img/1C.png";
import BackgroundMobile from "/img/1CMobile.png";
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Passions from "./Components/Passions";
import DailySketch from "./Components/DailySketch";
import Contact from "./Components/Contact";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Styles/App.scss";

function App() {
  const [section, setSection] = useState(0);
  const [journalOpen, setJournalOpen] = useState(false);

  return (
    <>
      <Header
        textColor="white"
        journalOpen={journalOpen}
        setJournalOpen={setJournalOpen}
        setSection={setSection}
      />
      <div className="content">
        <AnimatePresence>
          (
          {!journalOpen ? (
            <MediaQuery minWidth={0}>
              <motion.img
                className="background"
                key="graphic"
                src={BackgroundMobile}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 1 }}
                exit={{ opacity: 0 }}
              />
              <MediaQuery minWidth={768}>
                <motion.img
                  className="background"
                  key="graphic"
                  src={Background}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 1 }}
                  exit={{ opacity: 0 }}
                />
              </MediaQuery>
            </MediaQuery>
          ) : (
            ""
          )}
          )
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {section == 1 ? (
            <Projects key="1" />
          ) : section == 2 ? (
            <Education key="2" />
          ) : section == 3 ? (
            <Passions key="3" />
          ) : section == 4 ? (
            <DailySketch key="4" />
          ) : section == 5 ? (
            <Contact key="5" />
          ) : (
            <Welcome key="0" />
          )}
        </AnimatePresence>
        {!journalOpen ? (
          <Nav
            sec={section}
            setSection={setSection}
            key="nav"
            journal={setJournalOpen}
          />
        ) : (
          ""
        )}
      </div>
      {journalOpen && (
        <div
          className="back-btn"
          onClick={() => {
            setSection(0);
            setJournalOpen(false);
          }}
        >
          Back
        </div>
      )}
    </>
  );
}

export default App;
