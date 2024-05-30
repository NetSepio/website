import Image from "next/image";
import React from "react";
import CustomBtn from "../CustomBtn";

const Hero = () => {
  return (
    <div className='h-[80vh] relative flex flex-col py-[5vh] md:py-0 md:flex-row items-center  w-full bg-white'>
      <div className='absolute left-[0] top-0 w-[140px] lg:w-[237px] h-[125px] lg:h-[216px] bg-[#040A20] rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 md:right-[40%] w-[140px] lg:w-[237px] h-[125px] lg:h-[216px] bg-[#040A20] rounded-full blur-3xl' />
      <div className='relative md:left-[8%] w-[95vw] md:w-[60vw] h-[65%] md:h-[75%]'>
        <Image
          className='object-cover bg-primary lg:bg-transparent lg:border-none border-opacity-30 z-20 border-[0.3px] border-cta rounded-md'
          src={"/images/extension/hero.png"}
          fill
          alt='hero'
        />
      </div>
      <div className='relative bottom-[7%] md:bottom-0 flex flex-col h-[55%] md:h-[90%] w-[100%] md:w-[60%]  items-center md:items-start lg:pl-[13%] pt-[15%] lg:pt-[6%]  bg-primary'>
        <h2 className='bg-gradient-to-r text-3xl font-semibold md:text-6xl from-[#11D9C5] to-[#91A6FF] bg-clip-text text-transparent'>
          Browser Extension
        </h2>
        <p className='text-white font-thin text-xl lg:text-3xl  pt-[5%] md:pt-[10%] mb-[10%] lg:mb-[20%]'>
          AI-Powered secure browsing
        </p>
        <CustomBtn title='Download now' width='w-[140px] lg:w-[191px]' />
      </div>
    </div>
  );
};

export default Hero;
