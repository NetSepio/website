"use client";
import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div className='bg-white h-[312px] my-[3%] w-full rounded-b-[40px] flex items-center justify-center gap-[10%]'>
      <div className='w-[120px] hover:-translate-y-4 duration-300 cursor-pointer h-[120px] flex justify-center items-center  bg-black rounded-[20px]'>
        <div className='w-[60px]  h-[60px] relative'>
          <Image src={"/images/discord.svg"} fill alt='discord' />
        </div>
      </div>
      <div className='w-[120px] hover:-translate-y-4 duration-300 cursor-pointer h-[120px] flex justify-center items-center  bg-black rounded-[20px]'>
        <div className='w-[60px] h-[60px] relative'>
          <Image src={"/images/twitter.svg"} fill alt='twitter' />
        </div>
      </div>
      <div className='w-[120px] hover:-translate-y-4 duration-300 cursor-pointer  h-[120px] flex justify-center items-center  bg-transparent rounded-[20px]'>
        <div className='w-[120px] h-[120px] relative'>
          <Image src={"/images/git.svg"} fill alt='git' />
        </div>
      </div>
    </div>
  );
};

export default Socials;
