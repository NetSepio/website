import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const DownloadNow = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='lg:h-[694px] md:h-[694px] my-[3%] w-[80%] lg:flex md:flex justify-between items-center gap-10'
    >
      <div className='flex flex-col w-full lg:w-[50%] lg:justify-start lg:items-start md:justify-start md:items-start justify-center items-center'>
        <h4 className='lg:text-6xl md:text-6xl text-3xl flex mb-[36px] flex-col leading-tight text-white lg:text-start md:text-start text-center'>
          <span>Download the Browser</span>
          <span>Extension Today</span>
        </h4>
        <CustomBtn
          link={
            "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd"
          }
          width="w-[140px] lg:w-[191px]"
          title={"Download Now"}
        />
      </div>
      <div className='flex flex-col relative'>
        <img
          src={"/images/phone.png"}
          className='lg:flex lg:mt-0 md:mt-0 mt-10 lg:mb-0 md:mb-0 mb-28' 
          fill
          alt='phone'
        />
      </div>
    </div>
  );
};

export default DownloadNow;
