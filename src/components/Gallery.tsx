import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  memo,
  useCallback,
} from "react";
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
  priority?: boolean;
};

// Memoized GalleryImage component to prevent unnecessary re-renders
const GalleryImage = memo(
  ({ src, alt, onClick, position, priority }: GalleryImageProps) => {
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
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          className="w-[200px] h-[200px] rounded-lg m-4 mb-12 object-cover cursor-pointer"
        />
      </motion.div>
    );
  }
);

GalleryImage.displayName = "GalleryImage";

const ImageModal = memo(
  ({ src, onClose }: { src: string; onClose: () => void }) => (
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
  )
);

ImageModal.displayName = "ImageModal";

const preloadImages = async (srcs: string[], chunkSize = 5) => {
  const preloadChunk = async (chunk: string[]) => {
    const promises = chunk.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        })
    );
    await Promise.all(promises);
  };

  const chunks = Array.from(
    { length: Math.ceil(srcs.length / chunkSize) },
    (_, i) => srcs.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  for (const chunk of chunks) {
    await preloadChunk(chunk);
  }
};

const generateImagePosition = (): ImagePosition => ({
  x: Math.random() * 80,
  y: Math.random() * 80,
  rotate: Math.random() * 50 - 25,
  zIndex: Math.floor(Math.random() * 10),
});

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const imagePositions = useRef<ImagePosition[]>([]);

  const totalImages = 42;
  const images = useMemo(
    () =>
      Array.from({ length: totalImages }, (_, index) => ({
        src: `./img/${index + 1}.jpg`,
        alt: "Gallery Image",
      })),
    [totalImages]
  );

  useEffect(() => {
    if (imagePositions.current.length === 0) {
      imagePositions.current = images.map(() => generateImagePosition());
    }
  }, [images]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        await preloadImages(images.map((img) => img.src));
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, [images]);

  const handleImageClick = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <BigText text={"Gallery"} />
      <div className="content">
        <div className="relative h-[150vh] w-full [z-index: 100]">
          <AnimatePresence>
            {images.map((image, index) => (
              <GalleryImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                onClick={handleImageClick}
                position={
                  imagePositions.current[index] || generateImagePosition()
                }
                priority={index < 10}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <ImageModal src={selectedImage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
