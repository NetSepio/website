"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className='bg-white h-[200px] lg:h-[312px] my-[3%] w-full rounded-b-[40px] flex items-center justify-center gap-[10%]'>
      <div className='w-[60px] lg:w-[120px] hover:-translate-y-4 duration-300 cursor-pointer h-[60px] lg:h-[120px] flex justify-center items-center  bg-black rounded-[20px]'>
        <Link
          target='_blank'
          href={"https://discordapp.com/invite/5uaFhNpRF6"}
          className='w-[30px] lg:w-[60px] h-[30px]  lg:h-[60px] relative'
        >
          <Image src={"/images/discord.svg"} fill alt='discord' />
        </Link>
      </div>
      <div className='w-[60px] lg:w-[120px] hover:-translate-y-4 duration-300 cursor-pointer h-[60px] lg:h-[120px] flex justify-center items-center  bg-black rounded-[20px]'>
        <Link
          target='_blank'
          href={"https://x.com/netsepio"}
          className='w-[30px] lg:w-[60px] h-[30px]  lg:h-[60px] relative'
        >
          <Image src={"/images/twitter.svg"} fill alt='twitter' />
        </Link>
      </div>
      <div className='w-[60px] lg:w-[120px] hover:-translate-y-4 duration-300 cursor-pointer  h-[60px] lg:h-[120px] flex justify-center items-center  bg-transparent rounded-[20px]'>
        <Link
          target='_blank'
          href={"https://www.linkedin.com/company/netsepio/"}
          className='w-[60px] lg:w-[120px] h-[60px] lg:h-[120px] relative'
        >
          <Image src={"/images/linkedin.png"} fill alt='linkedin' />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
