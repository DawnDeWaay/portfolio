import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import BigText from "./BigText";

type ImagePosition = {
  x: number;
  y: number;
  rotate: number;
  zIndex: number;
};

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick: (src: string) => void;
  position: ImagePosition;
};

const GalleryImage = ({ src, alt, onClick, position }: GalleryImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      onClick={() => onClick(src)}
      ref={ref}
      className="absolute bg-white shadow-xl cursor-pointer overflow-hidden [aspect-ratio: 1]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: position.zIndex,
      }}
      initial={{
        opacity: 0,
        y: 40,
        rotate: position.rotate,
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

const generateImagePosition = (): ImagePosition => ({
  x: Math.random() * 80,
  y: Math.random() * 80,
  rotate: Math.random() * 50 - 25,
  zIndex: Math.floor(Math.random() * 10),
});

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagePositions = useRef<ImagePosition[]>([]);

  const totalImages = 42;
  const images = Array.from({ length: totalImages }, (_, index) => ({
    src: `./img/${index + 1}.jpg`,
    alt: "Gallery Image",
  }));

  useEffect(() => {
    if (imagePositions.current.length === 0) {
      imagePositions.current = images.map(() => generateImagePosition());
    }
  }, []);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    images.forEach((image) => preloadImage(image.src));
  }, []);

  return (
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[100vh] w-full [z-index: 100]">
          <AnimatePresence>
            {images.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={handleImageClick}
                position={
                  imagePositions.current[index] || generateImagePosition()
                }
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
