import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import axios from "axios";
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

type CloudflareImage = {
  id: string;
  filename: string;
  variants: string[];
};

const ImageModal = ({ src, onClose }: { src: string; onClose: () => void }) => (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
    onClick={onClose}
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
        src={src}
        alt="Enlarged"
        className="max-w-[90vw] max-h-[90vh] object-contain p-8 rounded-lg shadow-2xl"
      />
    </motion.div>
  </motion.div>
);

const GalleryImage = ({ src, alt, onClick, position }: GalleryImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      id={src}
      onClick={() => onClick(src)}
      ref={ref}
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: position.zIndex,
        width: "min(30vw, 350px)",
      }}
      initial={{
        x: "-50%",
        y: "-50%",
        opacity: 0,
        rotate: position.rotate,
      }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delayChildren: 0.2,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative w-full p-[5%] pb-[20%] shadow-xl overflow-hidden bg-white">
        <div className="w-full h-0 pb-[100%] relative">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const generateImagePosition = (): ImagePosition => ({
  x: Math.random() * 80 + 10,
  y: Math.random() * 90,
  rotate: Math.random() * 50 - 25,
  zIndex: Math.floor(Math.random() * 10),
});

const Gallery = () => {
  const [images, setImages] = useState<CloudflareImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagePositions = useRef<ImagePosition[]>([]);

  const addElement = useCallback((element: CloudflareImage) => {
    setImages((prevArray) => [...prevArray, element]);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.cloudflare.com/client/v4/accounts/7fdbd017f1d79701dcdd993f153a78cb/images/v2",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer undefined",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            addElement(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [addElement]);

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
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[150vh] w-full [z-index: 100]">
          <AnimatePresence>
            {images.map((image, index) => (
              <GalleryImage
                key={image.id}
                src={image.variants[0]}
                alt={image.filename}
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
    </div>
  );
};

export default Gallery;
