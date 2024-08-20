"use client";

import useFonts from "@/hooks/useFonts";
import { cardDetails2 } from "@/utils/data";
import Image from "next/image";

const WinSection = () => {
  const { roboto } = useFonts();

  const customStyles = [
    {background: 'radial-gradient(  ellipse at 2.36% 97.72%, rgba(17, 217, 197, 0.3) 0%, rgba(17, 217, 197, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%     )'
    },
    { background: 'radial-gradient(  ellipse at 2.36% 97.72%, rgba(17, 217, 197, 0.3) 0%, rgba(17, 217, 197, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%     )'
     },
    { 
      background: 'linear-gradient(105.93deg, rgba(17, 217, 197, 0.2) 0.61%, rgba(16, 100, 92, 0.2) 99.6%), radial-gradient(90.47% 109.68% at 90.36% 130.72%, rgba(183, 153, 13, 0.5) 20.5%, rgba(100, 185, 104, 0.25) 60.25%, rgba(17, 217, 195, 0) 100%)',
    
    },
  ];


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
              className='flex w-[400px] hover:-translate-y-4 duration-300 flex-col justify-start p-8 rounded-[50px] '
              style={customStyles[index % customStyles.length]}
            >
              <Image
                src={`/images/${item.image}.jpeg`}
                alt='pic'
                className='object-cover overflow-clip mb-6 rounded-[20px]'
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
