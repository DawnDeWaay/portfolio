import { motion } from "motion/react";

const BigText = ({ text }: { text: string }) => {
  return (
    <>
      <div id={text} />
      <motion.h1 className="sticky top-0 pointer-events-none text-[24vw] mt-16 pb-10 flex w-60 text-nowrap">
        <span className="text-[#796C98]">~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
