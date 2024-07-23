"use client";

import useFonts from "@/hooks/useFonts";
import { cardDetails2 } from "@/utils/data";
import Image from "next/image";

const WinSection = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='p-2 lg:p-20 flex w-full  my-[5%] flex-col items-start '
    >
      <h3
        className=' text-3xl lg:text-[52px] mb-[90px] w-full text-start
        text-white'
      >
        A Win-Win for Communities and Enterprises
      </h3>
      <div className='w-full flex flex-col gap-12 sm:gap-0 lg:flex-row h-max justify-between' >
        {cardDetails2.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className='flex w-[400px] hover:-translate-y-4 duration-300 flex-col justify-start p-10 rounded-3xl'
              style={{backgroundColor:'#11D9C580'}}
            >
              <Image
                src={`/images/${item.image}.jpeg`}
                alt='pic'
                className='object-cover overflow-clip mb-6'
                width={400}
                height={320}
              />
              <h4 className='mb-[10px] text-white text-[22px] text-center'>{item.title}</h4>
              <p className='text-sm font-thin text-white'>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WinSection;
