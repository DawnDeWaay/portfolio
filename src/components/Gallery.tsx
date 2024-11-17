import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BigText from "./BigText";

type props = {
  src: string;
  alt: string;
};

const GalleryImage = ({ src, alt }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const randomX = Math.random() * 80;
  const randomY = Math.random() * 80;
  const randomRotate = Math.random() * 50 - 25;
  const randomZIndex = Math.floor(Math.random() * 10);

  return (
    <motion.div
      ref={ref}
      className="absolute w-64 [aspect-ration: 1] bg-white p-4 pb-12 shadow-xl"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        zIndex: randomZIndex,
      }}
      initial={{
        opacity: 0,
        y: 40,
        rotate: randomRotate,
      }}
      animate={
        isInView
          ? {
              y: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
    >
      <img src={src} alt={alt} className="h-full rounded-lg object-fill" />
    </motion.div>
  );
};

const Gallery = () => {
  const totalImages = 20;
  const images = Array.from({ length: totalImages }, (_, index) => ({
    src: `./img/${index + 1}.jpg`,
    alt: "GalleryImg",
  }));

  return (
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[150vh] w-full [z-index: 100] bg-slate-800">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
