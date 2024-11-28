import { motion } from "motion/react";

const BigText = ({ text }: { text: string }) => {
  return (
    <>
      <div id={text} />
      <motion.h1 className="sticky top-16 pointer-events-none text-[22vw] p-0 flex w-[100%] text-nowrap overflow-x-hidden z-[-1]" initial={{y:"-5vw"}}>
        <span className="text-[#796C98]">&nbsp;~ </span>
        {text}
      </motion.h1>
    </>
  );
};

export default BigText;
