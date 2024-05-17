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
      className='w-full  overflow-hidden my-[2%]  flex relative pt-[4%] justify-between items-center bg-tranparent h-screen'
    >
      <div className='absolute top-0 bottom-0 w-full h-full element opacity-40 '></div>
      <div className='z-20 absolute lg:relative bottom-10 lg:bottom-0 mx-[80px]'>
        <h3 className=' text-2xl lg:text-[58px] max-w-[100%] lg:max-w-[65%] leading-tight text-white'>
          Securing and Decentralizing the Internet Layer
        </h3>
        <div className='flex items-center mt-[35px] gap-[26px]'>
          <CustomBtn link='https://app.netsepio.com' title={"Explore Webapp"} />
          <DarkBtn
            link='https://discordapp.com/invite/5uaFhNpRF6'
            title={"Join Discord"}
          />
        </div>
      </div>
      <motion.div
        animate={{ rotate: 360 }}
        whileHover={{ rotate: 0 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: "loop",
          duration: 10,
        }}
        className='z-10 absolute   -right-[5%]'
      >
        <div className='relative w-[250px] h-[230px] lg:w-[450px] lg:h-[402.8px]'>
          <Image
            src={"/images/ball.png"}
            className=''
            alt='hero_image'
            fill
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
