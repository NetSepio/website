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
      <div className='flex pl-[0%] sm:pl-[5%] flex-col  w-[50%]'>
        <h4 className=' text-2xl lg:text-[42px] flex mb-[36px] flex-col leading-tight text-white'>
          <span>Join the community,</span>
          <span>Keep the internet safe for all</span>
        </h4>
        <CustomBtn
          link='https://netsepio.substack.com/'
          width='lg:w-[234px] mr-2 sm:mr-0'
          title={"Subscribe To Our Newsletter"}
        />
      </div>
      <div className='flex flex-col relative h-[70%] sm:h-full  w-[50%]'>
        <Image
          src={"/images/newsletter.jpg"}
          className='object-cover'
          fill
          priority
          alt='phone'
        />
      </div>
    </div>
  );
};

export default Newsletter;
