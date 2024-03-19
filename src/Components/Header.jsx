import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

const Header = ({
  journalOpen,
  setJournalOpen,
  setSection,
  inContact,
  setInContact,
  dropdown,
  toggleDropdown,
  setDropdown,
}) => {
  const controls = useAnimation();
  useEffect(() => {
    if (!dropdown) {
      controls.start("closed");
    } else {
      controls.start("open");
    }
  }, [dropdown, controls]);

  const rotateVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, color: "white" },
  };

  return (
    <div className="header">
      <div className="inner-header noselect">
        <MediaQuery maxWidth={767}>
          <motion.h1
            key="ddewaay"
            className="left-item"
            style={{ color: journalOpen || dropdown ? "white" : "black" }}
            onClick={() => {
              setSection(0);
              setJournalOpen(false);
              setInContact(false);
              setDropdown(false);
            }}
          >
            Don DeWaay III
          </motion.h1>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <AnimatePresence>
            <motion.h1
              key="ddewaay"
              className="left-item"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: "Spring", delay: 0.5, duration: 0.5 }}
              style={{ color: journalOpen ? "white" : "black" }}
              onClick={() => {
                setSection(0);
                setJournalOpen(false);
                setInContact(false);
              }}
            >
              Don DeWaay III
            </motion.h1>
          </AnimatePresence>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          {!journalOpen && (
            <motion.h1
              className="right-item"
              initial="closed"
              variants={rotateVariants}
              animate={dropdown ? "open" : "closed"}
              style={{
                color: journalOpen || dropdown ? "white" : "black",
                fontSize: "70px",
                fontWeight: "lighter",
              }}
              onClick={toggleDropdown}
            >
              +
            </motion.h1>
          )}
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <AnimatePresence>
            {!inContact && (
              <motion.h1
                key="contact"
                className="right-item"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "Spring", delay: 0.7, duration: 0.5 }}
                style={{ color: journalOpen ? "white" : "black" }}
                onClick={() => {
                  setSection(5);
                  setJournalOpen(true);
                  setInContact(true);
                }}
              >
                Contact
              </motion.h1>
            )}
          </AnimatePresence>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Header;
