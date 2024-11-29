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

const Header = () => {
  const [showSocials, setShowSocials] = useState(false);

  const variants = {
    shown: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      display: "none",
    },
  };

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

  const hoverEffect = { scale: 1.05 };

  return (
    <div
      className="fixed inset-0 border-2 border-black z-50 pointer-events-none rounded-2xl"
      style={{ margin: "clamp(12px, 2vw, 38px)" }}
    >
      <motion.h1
        variants={variants}
        initial={{ opacity: 0 }}
        animate={"shown"}
        layout
        className="text-[2.2rem] z-50 flex-row cursor-pointer border-b-2 border-black pointer-events-none w-auto text-center"
        onClick={() => scrollToSection("Main")}
      >
        &nbsp;Dawn DeWaay III&nbsp;
      </motion.h1>
      <motion.div
        variants={variants}
        initial={{ opacity: 0 }}
        animate={"shown"}
        layout
        className="flex absolute bottom-0 right-0 flex-col pointer-events-auto z-[100]"
      >
        <div onClick={() => scrollToSection("Biography")}>
          <motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black rounded-tl-2xl">
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
                className="absolute flex flex-row-reverse gap-6 p-6 items-center left-0 top-[2vw] transform -translate-x-full -translate-y-1/2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={socialIconVariants}
              >
                <motion.a
                  href="https://www.instagram.com/dawndewaayiii/"
                  whileHover={hoverEffect}
                  className="w-12 h-12"
                >
                  <SvgInstagram />
                </motion.a>
                <motion.a
                  href="https://x.com/DawnDeWaay"
                  whileHover={hoverEffect}
                  className="w-12 h-12"
                >
                  <SvgTwitter />
                </motion.a>
                <motion.a
                  href="https://github.com/DawnDeWaay"
                  whileHover={hoverEffect}
                  className="w-12 h-12"
                >
                  <SvgGitHub />
                </motion.a>
                <motion.a
                  href="https://open.spotify.com/user/donalddewaay?si=732c04f17d874872"
                  whileHover={hoverEffect}
                  className="w-12 h-12"
                >
                  <SvgSpotify />
                </motion.a>
                <motion.a
                  href="mailto:dawndewaay@gmail.com"
                  whileHover={hoverEffect}
                  className="w-12 h-12"
                >
                  <IconMail size="3rem" color="#0078d4" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <div className="redaction35 text-[1.2rem] absolute left-0 bottom-0 border-t-2 border-r-2 border-black italic rounded-tr-2xl">
        &nbsp;&nbsp;© 2024 Dawn DeWaay III {"<3"}&nbsp;&nbsp;
      </div>
      {/* <motion.div
        variants={variants}
        initial={{ opacity: 0 }}
        animate={scrolled ? "shown" : "hidden"}
        layout
      >
        <motion.div
          className="fixed bottom-[2vw] right-[2vw] h-24 w-24 z-50 overflow-hidden"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <IconRosette
            stroke={1.5}
            height="100%"
            width="100%"
            color="#796C98"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Header;
