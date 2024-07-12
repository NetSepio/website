import React from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={`lg:w-[49.5%] my-[.25%] h-[486.7px] relative border-white`}>
      <div className='flex absolute w-full h-full flex-col justify-center items-start pl-[12%] z-50'>
        <h3
          className='text-white text-3xl lg:text-[62px] font-semibold  '
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></h3>
        <p className='text-white w-[90%] font-light mt-[35px] mb-[25px] text-sm lg:text-lg'>
          {item.desc}
        </p>
        {item.link && <CustomBtn link={item.link} title={item.button} />}
      </div>
      <Image
        src={`/images/${item.image}.png`}
        className='absolute z-10 object-cover'
        alt='pic'
        priority
        fill
      />
    </div>
  );
};

export default Card;
