import Image from "next/image";
import React from "react";
import CustomBtn from "../CustomBtn";

const Hero = () => {
  return (
    <div className='h-[90vh] relative flex flex-col py-[5vh] md:py-0 md:flex-row items-center w-full bg-[url(/images/extension/extension_bg.png)] bg-cover bg-white'>
      <div className='absolute right-0 bottom-[40px] md:right-[35%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#11D9C5] rounded-full blur-3xl opacity-30' />
      <div className='absolute right-0 bottom-0 md:right-[10%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#11D9C5] rounded-full blur-3xl opacity-30' />
      
      <div className='relative bottom-[7%] md:bottom-0 flex flex-col lg:w-1/2 md:w-1/2 items-center md:items-start p-[5%] pt-[15%] lg:pt-[8%]'>
        <h2 className='bg-gradient-to-r text-3xl font-semibold md:text-6xl from-[#11D9C5] to-[#91A6FF] bg-clip-text text-transparent'>
          Browser Extension
        </h2>
        <p className='text-white font-thin text-xl lg:text-lg pt-[5%] md:pt-[8%] mb-[10%] lg:mb-[8%] w-4/5 lg:text-start md:text-start text-center'>
        Combines your Web3 wallet with AI-driven insights and 
reviews for every site you explore, giving you the power 
to make safer and more informed online decisions.
        </p>
        <CustomBtn
          link='https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd'
          title='Download now'
          width='w-[140px] lg:w-[191px]'
        />
      </div>

      <div className='relative lg:w-1/2 lg:pr-[3%] md:w-1/2 md:pr-[3%] w-3/4'>
        <img
          className='object-cover bg-transparent z-20'
          src={"/images/extension/hero.png"}
          fill
          alt='hero'
        />
      </div>
    </div>
  );
};

export default Hero;
