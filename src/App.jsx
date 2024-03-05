import Header from "./Components/Header";
import Background from "/img/1C.png";
import { motion } from "framer-motion";
import "./Styles/App.scss";

function App() {
  let section = 0;
  return (
    <>
      <Header />
      <div className="content">
        <img src={Background} />
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 1, duration: 1 }}
        >
          Don is a <br />
          Frontend Designer & Dev
          Based in Des Moines, Iowa
        </motion.h2>
      </div>
    </>
  );
}

export default App;
