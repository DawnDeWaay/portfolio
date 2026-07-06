import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
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
  onClick: (thumb: Picture, full: string) => void;
  position: ImagePosition;
};

const ImageModal = ({
  thumb,
  full,
  onClose,
}: {
  thumb: Picture;
  full: string;
  onClose: () => void;
}) => {
  const [fullLoaded, setFullLoaded] = useState(false);
  const aspect = thumb.img.w / thumb.img.h;

  return (
    <motion.div
      className="image-model fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center select-auto"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-white p-6 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative"
          style={{
            aspectRatio: aspect,
            width: `min(calc(100vw - 13rem), calc((100vh - 13rem) * ${aspect}))`,
          }}
        >
          <picture>
            {Object.entries(thumb.sources).map(([type, srcSet]) => (
              <source key={type} type={`image/${type}`} srcSet={srcSet} />
            ))}
            <img
              src={thumb.img.src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </picture>
          <motion.img
            src={full}
            alt="Enlarged"
            onLoad={() => setFullLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: fullLoaded ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const GalleryImage = ({
  thumb,
  full,
  alt,
  onClick,
  position,
}: GalleryImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const inView = useInView(outerRef, { once: true, amount: 0.2 });
  const show = loaded && inView;

  const slideInInfo = useRef<SlideInInfo>(generateSlideIn());

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <motion.div
      ref={outerRef}
      id={full}
      onClick={() => onClick(thumb, full)}
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
      animate={{ opacity: show ? 1 : 0 }}
      whileHover={{ zIndex: 20 }}
    >
      <motion.div
        initial={{ x: slideInInfo.current.x, y: slideInInfo.current.y, rotate: slideInInfo.current.rotate }}
        animate={{ x: show ? 0 : slideInInfo.current.x, y: show ? 0 : slideInInfo.current.y, rotate: show ? 0 : slideInInfo.current.rotate }}
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
  y: 40 + Math.random() * 100,
  rotate: 0
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
  const [selectedImage, setSelectedImage] = useState<{
    thumb: Picture;
    full: string;
  } | null>(null);
  const imagePositions = useRef<ImagePosition[]>(
    images.map(() => generateImagePosition()),
  );

  const handleImageClick = useCallback(
    (thumb: Picture, full: string) => {
      setSelectedImage({ thumb, full });
    },
    [],
  );

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
            <ImageModal
              thumb={selectedImage.thumb}
              full={selectedImage.full}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
