import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BigText = ({ text }: { text: string }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  // useEffect(() => {
  //   const cachedRef = ref.current;
  //   if (!cachedRef) return;
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsSticky(entry.intersectionRatio < 1);
  //     },
  //     {
  //       threshold: [1],
  //       rootMargin: "200px 0px 0px 0px",
  //     },
  //   );

  //   observer.observe(cachedRef);

  //   return () => {
  //     if (cachedRef) observer.unobserve(cachedRef);
  //   };
  // }, []);

  return (
    <>
      <div id={text} ref={ref} />
      <motion.h1
        className='pointer-events-none flex w-[100%] text-[21vw] leading-[1.1] text-nowrap overflow-x-hidden overflow-y-auto z-[-1]'
        initial={{ paddingBottom: "-5vw", y: "-1vw", fontSize: "18rem", top:'4rem', marginLeft:'0rem', height: '20rem'}}
        // animate={{
        //   paddingBottom: "-5vw",
        //   y: "-1vw",
        //   top: isSticky ? "6rem" : "4rem",
        //   marginLeft: isSticky ? "4rem" : "0rem",
        //   fontSize: isSticky ? "4rem" : "18rem",
        // }}
      >
        <span className="redaction35 text-[#796C98]">&nbsp;~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
