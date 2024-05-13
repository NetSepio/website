import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const Newsletter = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='w-full h-[694px] mt-[5%] flex flex-row-reverse  justify-between items-center gap-10'
    >
      <div className='flex pl-[5%] flex-col  w-[50%]'>
        <h4 className='text-[42px] flex mb-[36px] flex-col leading-tight text-white'>
          <span>Join the community,</span>
          <span>Keep the internet safe for all</span>
        </h4>
        <CustomBtn width='w-[224px]' title={"Subscribe Our Newsletter"} />
      </div>
      <div className='flex flex-col relative h-full  w-[50%]'>
        <Image
          src={"/images/newsletter.svg"}
          className='object-cover'
          fill
          alt='phone'
        />
      </div>
    </div>
  );
};

export default Newsletter;
