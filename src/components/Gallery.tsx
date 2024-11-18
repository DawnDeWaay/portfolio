import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef } from "react";
import BigText from "./BigText";

type Props = {
  src: string;
  alt: string;
  onClick: (src: string) => void;
};

const GalleryImage = ({ src, alt, onClick }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const randomX = Math.random() * 80;
  const randomY = Math.random() * 80;
  const randomRotate = Math.random() * 50 - 25;
  const randomZIndex = Math.floor(Math.random() * 10);

  return (
    <motion.div
      onClick={() => onClick(src)}
      ref={ref}
      className="absolute bg-white shadow-xl cursor-pointer overflow-hidden [aspect-ratio: 1]"
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
      <img
        src={src}
        alt={alt}
        className="w-[200px] h-[200px] rounded-lg m-4 mb-12 object-cover cursor-pointer"
      />
    </motion.div>
  );
};

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalImages = 42;
  const images = Array.from({ length: totalImages }, (_, index) => ({
    src: `./img/${index + 1}.jpg`,
    alt: "Gallery Image",
  }));

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    images.forEach((image) => preloadImage(image.src));
  }, [images]);

  return (
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[150vh] w-full [z-index: 100]">
          <AnimatePresence>
            {images.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={handleImageClick}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-[90vw] max-h-[90vh] object-contain p-8 rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
