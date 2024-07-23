import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const DownloadNow = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='h-[694px] my-[3%] w-[80%] flex justify-between items-center gap-10'
    >
      <div className='flex flex-col w-full lg:w-[50%]'>
        <h4 className=' text-6xl flex mb-[36px] flex-col leading-tight text-white'>
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
          className='hidden lg:flex'
          fill
          alt='phone'
        />
      </div>
    </div>
  );
};

export default DownloadNow;
