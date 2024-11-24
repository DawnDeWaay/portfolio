import { AnimatePresence, motion } from "framer-motion";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconFingerprint,
  IconCodeAsterisk,
  IconBallpen,
  IconAperture,
  IconAt,
  IconBolt,
  IconMail,
  IconBrandSpotify,
  IconRosette,
} from "@tabler/icons-react";
import { useState } from "react";

const Header = ({ scrolled }: { scrolled: boolean }) => {
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

  const iconProps = {
    stroke: 1.5,
    size: "2rem",
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
        animate={scrolled ? "shown" : "hidden"}
        layout
        className="flex fixed h-8 top-0 left-12 text-[2.2rem] pt-7 pr-0 z-40 justify-end gap-6 flex-row cursor-pointer"
        onClick={() => scrollToSection("Main")}
      >
        Dawn DeWaay III
      </motion.h1>
      <motion.div
        variants={variants}
        initial={{ opacity: 0 }}
        animate={scrolled ? "shown" : "hidden"}
        layout
        className="flex fixed h-8 top-0 right-12 pt-9 pr-0 z-40 justify-end gap-6 flex-row"
      >
        <div onClick={() => scrollToSection("Biography")}>
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconFingerprint {...iconProps} />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Work")}>
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconCodeAsterisk {...iconProps} />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Education")}>
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconBallpen {...iconProps} />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Passions")}>
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconBolt {...iconProps} />
          </motion.div>
        </div>
        <div onClick={() => scrollToSection("Gallery")}>
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconAperture {...iconProps} />
          </motion.div>
        </div>
        <motion.div
          className="relative"
          onMouseEnter={() => setShowSocials(true)}
          onMouseLeave={() => setShowSocials(false)}
        >
          <motion.div whileHover={hoverEffect} className="cursor-pointer">
            <IconAt {...iconProps} />
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
                >
                  <IconBrandInstagram {...iconProps} color="#E1306C" />
                </motion.a>
                <motion.a
                  href="https://x.com/DawnDeWaay"
                  whileHover={hoverEffect}
                >
                  <IconBrandTwitter {...iconProps} color="#1da1f2" />
                </motion.a>
                <motion.a
                  href="https://github.com/DawnDeWaay"
                  whileHover={hoverEffect}
                >
                  <IconBrandGithub {...iconProps} color="#2b3137" />
                </motion.a>
                <motion.a
                  href="mailto:dawndewaay@gmail.com"
                  whileHover={hoverEffect}
                >
                  <IconMail {...iconProps} color="#0078d4" />
                </motion.a>
                <motion.a
                  href="https://open.spotify.com/user/donalddewaay?si=732c04f17d874872"
                  whileHover={hoverEffect}
                >
                  <IconBrandSpotify {...iconProps} color="#1db954" />
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
          className="fixed bottom-12 right-12 h-24 w-24 z-40"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          color="black"
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
