import Image from "next/image";
import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Link from "next/link";

const Reviews = () => {
  const { roboto } = useFonts();
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-around w-full h-[672px]'>
      <Image
        src={"/images/link.png"}
        className='absolute object-cover'
        fill
        priority
        alt='link'
      />
      <div className='z-20 flex flex-col items-start  gap-10'>
        <p style={roboto.style} className='flex flex-col gap-1'>
          <span className='text-white text-3xl lg:text-5xl font-medium'>
            Trusted Reviews,
          </span>
          <span className='text-white text-3xl lg:text-5xl font-medium'>
            Boosting Your Online Security
          </span>
        </p>
        <CustomBtn link='https://app.netsepio.com' title={"Get Started"} />
      </div>
      <div className='z-20 flex flex-col gap-[27px] justify-center  items-center'>
        <Link
          href={"https://app.netsepio.com/dashboard/reviews"}
          className=' w-[373px] h-[98px] hover:scale-105 duration-150  flex justify-start gap-[14px]  rounded-2xl  border border-white/10 items-center relative  bg-white/10 '
        >
          {/* <div className=' w-full h-full absolute blur-sm  bg-white/10 rounded-2xl'></div> */}

          <div className='w-[87px] center h-[98px] bg-white bg-opacity-10 rounded-2xl'>
            <Image src={"/images/play.svg"} width={44} height={46} alt='play' />
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
            <h6 className='text-white text-2xl '>Sumbit Review</h6>
            <h6 className='text-[#A7A5A5] text-sm'>
              Enhance your online security
            </h6>
          </div>
        </Link>
        <Link
          href={"https://app.netsepio.com/dashboard/reviews"}
          className=' w-[373px] h-[98px]  flex justify-start hover:scale-105 duration-150 gap-[14px]  rounded-2xl  border border-white/10 items-center relative bg-white/10 '
        >
          {/* <div className=' w-full h-full absolute blur-xl  bg-white/40 rounded-2xl'></div> */}

          <div className='w-[87px] center h-[98px] bg-white bg-opacity-10 rounded-2xl'>
            <Image
              src={"/images/bars.svg"}
              width={33}
              height={29.33}
              alt='play'
            />
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
            <h6 className='text-white text-2xl'>View Reviews</h6>
            <h6 className='text-[#A7A5A5] text-sm'>Navigate confidently</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
