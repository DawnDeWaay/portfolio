import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Tilt from "react-parallax-tilt";

import BigText from "./BigText";

type ImagePosition = {
  x: number;
  y: number;
  rotate: number;
  offsetX: number;
  offsetY: number;
};

type SlideInInfo = {
  x: number;
  y: number;
  rotate: number;
};

type Picture = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

type GalleryImageProps = {
  thumb: Picture;
  full: string;
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
        className="object-contain shadow-2xl max-w-[calc(90vw-3rem)] max-h-[calc(90vh-3rem)]"
        draggable={false}
      />
    </motion.div>
  </motion.div>
);

const GalleryImage = ({
  thumb,
  full,
  alt,
  onClick,
  position,
}: GalleryImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  const slideInInfo = useRef<SlideInInfo>(generateSlideIn());

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <motion.div
      id={full}
      onClick={() => onClick(full)}
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: "min(35vw, 350px)",
      }}
      initial={{
        x: `calc(-50% + ${position.offsetX}px)`,
        y: `calc(-40% + ${position.offsetY}px)`,
        rotate: position.rotate,
        opacity: 0,
      }}
      animate={{ opacity: loaded ? 1 : 0 }}
      whileHover={{ zIndex: 20 }}
    >
      <motion.div
        initial={{ x: slideInInfo.current.x, y: slideInInfo.current.y, rotate: slideInInfo.current.rotate }}
        animate={{ x: loaded ? 0 : slideInInfo.current.x, y: loaded ? 0 : slideInInfo.current.y, rotate: loaded ? 0 : slideInInfo.current.rotate }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glarePosition="top"
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
        >
          <motion.div
            className="relative w-full p-[5%] pb-[20%] bg-white"
            initial={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            animate={{ x: 0, y: 0 }}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.2 },
              boxShadow: "0px 40px 86px -14px rgba(0,0,0,0.75)",
            }}
          >
            <div className="w-full h-0 pb-[100%] relative">
              <picture>
                {Object.entries(thumb.sources).map(([type, srcSet]) => (
                  <source
                    key={type}
                    type={`image/${type}`}
                    srcSet={srcSet}
                    sizes="(min-width: 1000px) 350px, 35vw"
                  />
                ))}
                <img
                  ref={imgRef}
                  src={thumb.img.src}
                  width={thumb.img.w}
                  height={thumb.img.h}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setLoaded(true)}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </picture>
            </div>
          </motion.div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

const generateImagePosition = (): ImagePosition => ({
  x: Math.random() * 80 + 10,
  y: Math.random() * 90,
  rotate: Math.random() * 50 - 25,
  offsetX: Math.random() * 40 - 20,
  offsetY: Math.random() * 30 + 35,
});

const generateSlideIn = (): SlideInInfo => ({
  x: Math.random() * 100 - 50,
  y: 40 + Math.random() * 80,
  rotate: Math.random() * 20 - 10,
});

const thumbModules = import.meta.glob<Picture>(
  "../gallery/*.{jpeg,jpg,png,webp,avif}",
  {
    eager: true,
    import: "default",
    query: { w: "400;800", format: "avif;webp;jpeg", as: "picture" },
  },
);

const fullModules = import.meta.glob<string>(
  "../gallery/*.{jpeg,jpg,png,webp,avif}",
  {
    eager: true,
    import: "default",
    query: { w: "1400", format: "webp" },
  },
);

const images = Object.keys(thumbModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => ({
    thumb: thumbModules[path],
    full: fullModules[path],
    alt:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "") ?? "Gallery image",
  }));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagePositions = useRef<ImagePosition[]>(
    images.map(() => generateImagePosition()),
  );

  const handleImageClick = useCallback((src: string) => {
    setSelectedImage(src);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="w-full z-40">
      <BigText text={"Gallery"} />
      <div className="content h-[160vh] relative z-40">
        <AnimatePresence>
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              thumb={image.thumb}
              full={image.full}
              alt={image.alt}
              onClick={handleImageClick}
              position={imagePositions.current[index]}
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
