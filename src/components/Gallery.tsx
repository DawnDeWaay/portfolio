import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Tilt from "react-parallax-tilt";

import BigText from "./BigText";

type ImagePosition = {
  x: number;
  y: number;
  rotate: number;
};

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick: (src: string) => void;
  position: ImagePosition;
};

const ImageModal = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <motion.div
    className="image-model fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center select-auto"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative bg-white max-w-[90vw] max-h-[90vh] p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={src}
        alt="Enlarged"
        className="object-contain shadow-2xl"
        draggable={false}
      />
    </motion.div>
  </motion.div>
);

const GalleryImage = ({ src, alt, onClick, position }: GalleryImageProps) => {
  const ref = useRef(null);

  return (
    <motion.div
      id={src}
      onClick={() => onClick(src)}
      ref={ref}
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: "min(35vw, 350px)",
      }}
      initial={{
        x: "-50%",
        y: "-25%",
        rotate: position.rotate,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{ zIndex: 20 }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.5}
        glarePosition="bottom"
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
      >
        <motion.div
          className="relative w-full p-[5%] pb-[20%] bg-white"
          initial={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.2 },
            boxShadow: "0px 40px 86px -14px rgba(0,0,0,0.75)",
          }}
        >
          <div className="w-full h-0 pb-[100%] relative">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const generateImagePosition = (): ImagePosition => ({
  x: Math.random() * 80 + 10,
  y: Math.random() * 90,
  rotate: Math.random() * 50 - 25,
});

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagePositions = useRef<ImagePosition[]>([]);

  const totalImages = 44;
  const images = Array.from({ length: totalImages }, (_, index) => ({
    src: `./gallery/${index + 1}.jpeg`,
    alt: "Gallery Image",
  }));

  useEffect(() => {
    if (imagePositions.current.length === 0) {
      imagePositions.current = images.map(() => generateImagePosition());
    }
  }, [images]);

  const handleImageClick = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="w-full z-40">
      <BigText text={"Gallery"} />
      <div className="content h-[120vh] relative z-40">
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
        <AnimatePresence>
          {selectedImage && (
            <ImageModal src={selectedImage} onClose={handleCloseModal} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
