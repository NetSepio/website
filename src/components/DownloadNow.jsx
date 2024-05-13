import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";

const DownloadNow = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='w-full h-[694px] my-[3%] flex  justify-between items-center gap-10'
    >
      <div className='flex pl-[5%] flex-col  w-[50%]'>
        <h4 className='text-[62px] flex mb-[36px] flex-col leading-tight text-white'>
          <span>Download the Browser</span>
          <span>Extension Today</span>
        </h4>
        <CustomBtn title={"Get Yours Now"} />
      </div>
      <div className='flex flex-col relative h-full  w-[50%]'>
        <Image
          src={"/images/phone.svg"}
          className='object-cover'
          fill
          alt='phone'
        />
      </div>
    </div>
  );
};

export default DownloadNow;
