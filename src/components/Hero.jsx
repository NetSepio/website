"use client";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";
import CustomBtn from "./CustomBtn";
import DarkBtn from "./DarkBtn";
import { motion } from "framer-motion";

const Hero = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='w-full  overflow-hidden my-[2%] flex relative pt-[4%] justify-between items-center bg-tranparent h-screen'
    >
      <div className='absolute top-0 bottom-0 w-full h-full element opacity-40 '></div>
      <div className='z-20  mx-[80px]'>
        <h3 className='text-[58px] max-w-[65%] leading-tight text-white'>
          Securing and Decentralizing the Internet Layer
        </h3>
        <div className='flex items-center mt-[35px] gap-[26px]'>
          <CustomBtn title={"Explore Webapp"} />
          <DarkBtn title={"Join Discord"} />
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: "loop",
          duration: 10,
        }}
        className='z-10 absolute   -right-[5%]'
      >
        <Image
          src={"/images/ball.png"}
          className=''
          width={405}
          height={402.8}
          alt='hero_image'
        />
      </motion.div>
    </div>
  );
};

export default Hero;
