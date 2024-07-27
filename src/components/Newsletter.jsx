import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const Newsletter = () => {
  const { roboto } = useFonts();
  return (
    <div className="w-[80%] mt-[5%] ">
      <div className="flex lg:mr-auto md:mr-auto text-center lg:text-5xl md:text-5xl text-3xl">Tune into Expert NetCast </div>
    <div
      style={roboto.style}
      className='lg:h-[694px] md:h-[694px] flex lg:flex-row-reverse md:flex-row-reverse flex-col justify-between items-center gap-10'
    >
      <div className='flex pl-[0%] sm:pl-[5%] flex-col lg:w-[50%] md:w-[50%] lg:-mt-40 md:-mt-40'>
        <h4 className=' text-2xl flex mb-[36px] flex-col leading-tight text-gray-400 lg:mt-0 md:mt-0 mt-10'>
          <span>Stay ahead of the curve on DePIN, online privacy, security, and the future of decentralized Web.</span>
        </h4>
        <CustomBtn
          link='#'
          width='lg:w-[234px] mr-2 sm:mr-0 bg-[#11D9C580]'
          title={"Coming Soon"}
        />
      </div>
      <div className='flex flex-col relative sm:h-[80%] lg:mb-0 md:mb-0 mb-20'>
        <img
          src={"/images/newsletter.png"}
          fill
          priority
          alt='phone'
        />
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
