import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconMail, IconRosette } from "@tabler/icons-react";
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

const Header = ({
  scrolled,
  scrolledOnce,
}: {
  scrolled: boolean;
  scrolledOnce: boolean;
}) => {
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
    <>
      <motion.h1
        variants={variants}
        initial={{ opacity: 0 }}
        animate={scrolledOnce ? "shown" : "hidden"}
        layout
        className="flex fixed h-8 top-0 left-0 pl-12 text-[2.2rem] pt-7 pr-0 z-50 justify-end flex-row cursor-pointer"
        onClick={() => scrollToSection("Main")}
      >
        Dawn DeWaay III
      </motion.h1>
      <motion.div
        variants={variants}
        initial={{ opacity: 0 }}
        animate={scrolledOnce ? "shown" : "hidden"}
        layout
        className="flex fixed h-8 top-0 right-0 pr-12 pt-10 z-50 justify-end gap-8 flex-row"
      >
        <div onClick={() => scrollToSection("Biography")}>
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgSpinner />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Work")}>
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgStairs />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Education")}>
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgEllipses />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Passions")}>
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgFlower />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Gallery")}>
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgTulip />
          </motion.div>
        </div>
        <motion.div
          className="relative"
          onMouseEnter={() => setShowSocials(true)}
          onMouseLeave={() => setShowSocials(false)}
        >
          <motion.div
            whileHover={hoverEffect}
            className="cursor-pointer w-[28px] h-[28px]"
          >
            <SvgOyster />
          </motion.div>
          <AnimatePresence>
            {showSocials && (
              <motion.div
                className="absolute flex flex-col gap-4 pt-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={socialIconVariants}
              >
                <motion.a
                  href="https://www.instagram.com/dawndewaayiii/"
                  whileHover={hoverEffect}
                  className="w-[28px] h-[28px]"
                >
                  <SvgInstagram />
                </motion.a>
                <motion.a
                  href="https://x.com/DawnDeWaay"
                  whileHover={hoverEffect}
                  className="w-[28px] h-[28px]"
                >
                  <SvgTwitter />
                </motion.a>
                <motion.a
                  href="https://github.com/DawnDeWaay"
                  whileHover={hoverEffect}
                  className="w-[28px] h-[28px]"
                >
                  <SvgGitHub />
                </motion.a>
                <motion.a
                  href="https://open.spotify.com/user/donalddewaay?si=732c04f17d874872"
                  whileHover={hoverEffect}
                  className="w-[28px] h-[28px]"
                >
                  <SvgSpotify />
                </motion.a>
                <motion.a
                  href="mailto:dawndewaay@gmail.com"
                  whileHover={hoverEffect}
                  className="w-[28px] h-[28px]"
                >
                  <IconMail size="28px" color="#0078d4" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div
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
      </motion.div>
    </>
  );
};

export default Header;
