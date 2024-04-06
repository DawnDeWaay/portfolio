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
import Dropdown from "./Components/Dropdown";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Styles/App.scss";

function App() {
  const [section, setSection] = useState(0);
  const [journalOpen, setJournalOpen] = useState(false);
  const [inContact, setInContact] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <>
      <AnimatePresence>
        {dropdown && (
          <Dropdown
            key="drop"
            sec={section}
            setSection={setSection}
            journal={setJournalOpen}
            journalOpen={journalOpen}
            setInContact={setInContact}
            setDropdown={setDropdown}
          />
        )}
      </AnimatePresence>
      <Header
        textColor="white"
        journalOpen={journalOpen}
        setJournalOpen={setJournalOpen}
        setSection={setSection}
        inContact={inContact}
        setInContact={setInContact}
        dropdown={dropdown}
        toggleDropdown={toggleDropdown}
        setDropdown={setDropdown}
      />
      <div className="content">
        <AnimatePresence>
          (
          {!journalOpen ? (
            <>
              <MediaQuery maxWidth={767}>
                <motion.img
                  className="background"
                  key="graphic"
                  src={BackgroundMobile}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 1 }}
                  exit={{ opacity: 0 }}
                />
              </MediaQuery>
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
            </>
          ) : (
            ""
          )}
          )
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {section == 1 ? (
            <Education key="1" />
          ) : section == 2 ? (
            <Projects key="2" />
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
        <MediaQuery minWidth={768}>
          {!journalOpen ? (
            <Nav
              key="nav"
              sec={section}
              setSection={setSection}
              journal={setJournalOpen}
            />
          ) : (
            ""
          )}
        </MediaQuery>
      </div>
      {journalOpen && (
        <div
          className="back-btn"
          onClick={() => {
            setSection(0);
            setJournalOpen(false);
            setInContact(false);
          }}
        >
          Back
        </div>
      )}
    </>
  );
}

export default App;
