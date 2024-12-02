import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconMail } from "@tabler/icons-react";
import SvgStairs from "./icons/SvgStairs";
import SvgEllipses from "./icons/SvgEllipses";
import SvgSpinner from "./icons/SvgSpinner";
import SvgTulip from "./icons/SvgTulip";
import SvgOyster from "./icons/SvgOyster";
import SvgInstagram from "./icons/SvgInstagram";
import SvgTwitter from "./icons/SvgTwitter";
import SvgGitHub from "./icons/SvgGitHub";
import SvgSpotify from "./icons/SvgSpotify";
import SvgFlower from "./icons/SvgFlower";
import WavyLine from "./WavyLine";

const Header = () => {
  const [showSocials, setShowSocials] = useState(false);
  const socialIconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 border-2 border-black z-50 pointer-events-none"
      style={{ margin: "clamp(12px, 2vw, 38px)" }}
    >
      <motion.div
        className="flex items-center justify-center lg:justify-start"
        onClick={() => scrollToSection("Main")}
      >
        <motion.h1
          initial={{
            fontSize: "2.2rem",
            color: "black",
            fontWeight: "normal",
          }}
          whileHover={{
            fontSize: "3.5rem",
          }}
          className="cursor-pointer pointer-events-auto w-auto text-center z-[100] inline-block"
          layout
        >
          &nbsp;&nbsp;Dawn DeWaay III&nbsp;
        </motion.h1>
      </motion.div>
      <motion.div initial={{ y: -10 }}>
        <WavyLine />
      </motion.div>
      <motion.div className="flex absolute bottom-0 right-0 flex-col pointer-events-auto z-[100]">
        <div onClick={() => scrollToSection("Biography")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgSpinner />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Work")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgStairs />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Education")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgEllipses />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Passions")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgFlower />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Gallery")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgTulip />
          </motion.div>
        </div>
        <motion.div
          className="relative"
          onMouseEnter={() => setShowSocials(true)}
          onMouseLeave={() => setShowSocials(false)}
        >
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
            <SvgOyster />
          </motion.div>
          <AnimatePresence>
            {showSocials && (
              <motion.div
                className="absolute flex flex-row-reverse items-center left-0 top-0 transform -translate-x-full"
                animate="visible"
                exit="hidden"
                variants={socialIconVariants}
              >
                <motion.a
                  href="https://www.instagram.com/dawndewaayiii/"
                  className="w-12 h-12 p-2 border-t-2 border-l-2 border-black"
                >
                  <SvgInstagram />
                </motion.a>
                <motion.a
                  href="https://x.com/DawnDeWaay"
                  className="w-12 h-12 p-2 border-t-2 border-l-2 border-black"
                >
                  <SvgTwitter />
                </motion.a>
                <motion.a
                  href="https://github.com/DawnDeWaay"
                  className="w-12 h-12 p-2 border-t-2 border-l-2 border-black"
                >
                  <SvgGitHub />
                </motion.a>
                <motion.a
                  href="https://open.spotify.com/user/donalddewaay?si=732c04f17d874872"
                  className="w-12 h-12 p-2 border-t-2 border-l-2 border-black"
                >
                  <SvgSpotify />
                </motion.a>
                <motion.a
                  href="mailto:dawndewaay@gmail.com"
                  initial={{ color: "black" }}
                  className="w-12 h-12 p-2 flex items-center justify-center border-t-2 border-l-2 border-black"
                >
                  <motion.div whileHover={{ color: "#0078d4", scale: 1.05 }}>
                    <IconMail size="2.2rem" />
                  </motion.div>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <div className="redaction35 text-[1.2rem] absolute left-0 bottom-0 border-t-2 border-r-2 border-black italic">
        &nbsp;&nbsp;&nbsp;© 2024 Dawn DeWaay III {"<3"}&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Header;
