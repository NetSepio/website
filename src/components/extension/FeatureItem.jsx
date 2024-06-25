import Image from "next/image";
import React from "react";

const FeatureItem = ({ item }) => {
  return (
    <div className='w-[90%] features-card hover:border-cta duration-150  lg:w-[80%] my-[5vh] rounded-lg px-[2%] h-[289px] lg:h-[546px] flex lg:justify-between items-center border-opacity-40 border-white border-2 relative '>
      <p className='absolute top-[4%] left-[2%] text-white font-thin text-sm  lg:text-lg'>
        {`0${item?.id}`}
      </p>
      <div className='lg:w-[50%] h-full justify-center lg:justify-end  flex flex-col pb-[5%]'>
        <h2 className='text-white lg:w-[60%] mb-[5%] lg:mb-0 text-xl font-normal md:text-5xl'>
          {item?.title}
        </h2>
        <p className='lg:text-2xl lg:w-[80%] text-sm mt-[5%] lg:mt-[20%] text-white font-light'>
          {item?.desc}
        </p>
      </div>
      <div className='relative lg:w-[30%] lg:h-[90%]'>
        <Image
          className='object-contain'
          alt='img'
          fill
          src={`/images/extension/${item?.img}`}
        />
      </div>
    </div>
  );
};

export default FeatureItem;
