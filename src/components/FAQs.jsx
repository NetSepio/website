"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const FAQs = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (showAnswer) {
      animation.start({
        height: "140px",
        transition: { duration: 0, type: "spring" },
      });
    } else
      animation.start({
        height: "74px",
        transition: { duration: 0, type: "spring" },
      });
  }, [showAnswer, animation]);
  return (
    <motion.div
      animate={animation}
      className='w-[90%] lg:w-[85%] flex flex-col  relative  duration-1000 h-auto my-4 items-center justify-center'
    >
      <div className='w-full flex items-center justify-between px-4 top-0 rounded-[12px] absolute left-0 right-0 bg-[#222944] min-h-[74px]'>
        <p className=' text-white font-medium text-[20px]'>{item.q}</p>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {!showAnswer ? (
            <Image
              src={"/images/plus.svg"}
              className=''
              width={15}
              height={15}
              alt='add'
            />
          ) : (
            <Image
              src={"/images/minus.svg"}
              className=''
              width={24}
              height={24}
              alt='minus'
            />
          )}
        </button>
      </div>
      <AnimatePresence mode='wait'>
        {showAnswer && (
          <motion.p
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, type: "tween" }}
            className=' text-white absolute leading-relaxed top-[80px]  font-light w-full my-2 px-4 text-left text-xs lg:text-[16px]'
          >
            {item.a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQs;
