import CustomBtn from "@/components/CustomBtn";
import { webapp } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='bg-primary w-full   flex flex-col items-center h-auto'>
      <section className=' h-screen md:h-[967px] w-full space-y-5 md:space-y-10 md:pt-[10vh] bg-cover flex flex-col justify-center px-[3.5%] bg-[url(/images/webapp/hero2.png)] bg-no-repeat'>
        <h3 className='uppercase text-white text-3xl md:text-[95px] leading-none font-semibold flex flex-col'>
          <span>Netsepio</span>
          <span>Webapp</span>
        </h3>
        <p className='text-white text-xl w-[50vw] md:w-[30vw] md:text-[34px] leading-none font-light'>
          Reviews and projects tailored to your interests
        </p>
        <CustomBtn link='https://app.netsepio.com' title='Explore Webapp' />
      </section>
      <section className='w-[95%] border-[0px] md:border-2  md:border-white rounded-[20px] md:pt-[150px] my-[150px] pl-[3vw] flex flex-col items-center'>
        {webapp.map((item, i) => {
          return (
            <div
              className='flex w-full border-cta border md:border-none rounded-[10px] p-2 md:p-0 h-[350px] md:h-[443px] mb-[3vh] md:mb-[160px] gap-[5vw] flex-col md:flex-row'
              key={i.toString()}
            >
              <div className=' w-full hidden md:flex md:w-[60%]  relative h-[443px] md:h-full'>
                <Image
                  src={`/images/webapp/${item.image}`}
                  className='object-cover rounded-[10px]'
                  fill
                  alt='banner'
                />
              </div>
              <div className='flex flex-1 justify-between py-[1%] flex-col'>
                <h3 className='text-white text-2xl md:text-[52px] leading-none font-medium flex flex-col'>
                  {item.title}
                </h3>
                <p className='text-white text-xl w-[85vw] md:w-[30vw] md:text-[22px] leading-tight font-light'>
                  {item.desc}
                </p>
                <CustomBtn
                  link='https://app.netsepio.com'
                  title={item.button}
                />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Index;
