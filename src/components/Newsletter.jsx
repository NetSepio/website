import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const Newsletter = () => {
  const { roboto } = useFonts();
  return (
    <div className="w-[80%] mt-[5%] ">
      <div className="flex mr-auto text-5xl">Tune into Expert NetCast </div>
    <div
      style={roboto.style}
      className='h-[694px] flex flex-row-reverse  justify-between items-center gap-10'
    >
      <div className='flex pl-[0%] sm:pl-[5%] flex-col w-[50%] -mt-40'>
        <h4 className=' text-2xl flex mb-[36px] flex-col leading-tight text-gray-400'>
          <span>Stay ahead of the curve on DePIN, online privacy, security, and the future of decentralized Web.</span>
        </h4>
        <CustomBtn
          link='#'
          width='lg:w-[234px] mr-2 sm:mr-0 bg-[#11D9C580]'
          title={"Coming Soon"}
        />
      </div>
      <div className='flex flex-col relative sm:h-[80%]'>
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
