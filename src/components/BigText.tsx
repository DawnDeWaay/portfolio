import { motion } from "motion/react";

const BigText = ({ text }: { text: string }) => {
  return (
    <>
      <div id={text} />
      <motion.h1
        className="sticky pointer-events-none text-[23vw] p-0 flex w-[100%] top-16 text-nowrap overflow-x-hidden overflow-y-visible z-[-1]"
        initial={{ y: "-5vw" }}
      >
        <span className="text-[#796C98]">&nbsp;~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
