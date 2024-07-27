"use client";

import useFonts from "@/hooks/useFonts";
import { cardDetails2 } from "@/utils/data";
import Image from "next/image";

const WinSection = () => {
  const { roboto } = useFonts();
  return (
    <div
      style={roboto.style}
      className='lg:p-20 md:p-20 flex w-full my-[5%] flex-col items-start'
    >
      <h3
        className=' text-2xl lg:text-[52px] lg:mb-[90px] md:mb-[90px] mb-[30px] w-full text-start lg:p-0 md:p-0 p-10
        text-white'
      >
        A Win-Win for Communities and Enterprises
      </h3>
      <div className='w-full flex flex-col gap-12 lg:flex-row md:flex-row h-max justify-between items-center' >
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
                className='object-cover overflow-clip mb-6 rounded-xl'
                width={400}
                height={320}
              />
              <h4 className='mb-[10px] text-white text-[22px] text-center w-[80%] mx-auto'>{item.title}</h4>
              <p className='text-[17px] font-thin text-white'>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WinSection;
