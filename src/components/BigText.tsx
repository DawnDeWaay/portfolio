import { motion } from "motion/react";

const BigText = ({ text }: { text: string }) => {
  return (
    <>
      <div id={text} />
      <motion.h1
        className="sticky pointer-events-none text-[22vw] pb-[-5vw] flex w-[100%] leading-[1.1] top-16 text-nowrap overflow-x-hidden overflow-y-visible z-[-1]"
        initial={{ y: "-1vw" }}
      >
        <span className="redaction35 text-[#796C98]">&nbsp;~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
