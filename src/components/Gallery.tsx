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

  const randomLeft = `${Math.random() * 90}vw`;
  const randomTop = `${Math.random() * 90}vh`;
  const randomRotate = Math.random() * 50 - 25;
  const randomZIndex = Math.floor(Math.random() * 10);

  return (
    <motion.div
      ref={ref}
      className="absolute w-64 h-80 bg-white p-2 pb-10 shadow-xl"
      style={{
        left: randomLeft,
        top: randomTop,
        zIndex: randomZIndex,
        transform: "translate(-50%, -50%)",
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: randomRotate,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
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
  const images = [
    { src: "./img/1.jpg", alt: "Description 1" },
    { src: "./img/2.jpg", alt: "Description 2" },
    { src: "./img/3.jpg", alt: "Description 3" },
    { src: "./img/4.jpg", alt: "Description 4" },
    { src: "./img/5.jpg", alt: "Description 5" },
    { src: "./img/6.jpg", alt: "Description 6" },
    { src: "./img/7.jpg", alt: "Description 7" },
  ];

  return (
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[100vh] w-full [z-index: 100] bg-slate-800">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
