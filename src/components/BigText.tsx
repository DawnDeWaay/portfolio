import { motion } from "motion/react";

const BigText = ({ text }: { text: string }) => {
  return (
    <>
      <div id={text} />
      <motion.h1 className="sticky top-16 pointer-events-none text-[23vw] p-0 mt-16 flex w-[100%] text-nowrap overflow-x-hidden z-[-1]">
        <span className="text-[#796C98]">&nbsp;~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
