import FAQs from "@/components/FAQs";
import { faq } from "@/utils/data";
import React from "react";

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col pt-[25vh] pb-[10vh] justify-center items-center'>
      <div className='flex flex-col items-center'>
        <h2 className=' text-2xl lg:text-[55px] text-white font-semibold'>
          FAQs
        </h2>
        <p className=' text-lg lg:text-[30px] font-light text-cta'>
          Frequently asked questions
        </p>
      </div>
      <div className='w-full flex flex-col mt-[10vh] items-center'>
        {faq.map((item, index) => {
          return <FAQs key={index.toString()} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Page;
