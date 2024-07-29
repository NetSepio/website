import CustomBtn from "@/components/CustomBtn";
import { webapp } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='bg-primary w-full py-[16.7vh] flex flex-col items-center h-auto'>
      
      <div className='h-[90vh] relative flex flex-col py-[5vh] md:py-0 md:flex-row items-center w-full bg-[url(/images/extension/extension_bg.png)] bg-cover bg-white'>
      <div className='absolute right-0 bottom-[40px] md:right-[35%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#11D9C5] rounded-full blur-3xl opacity-30' />
      <div className='absolute right-0 bottom-0 md:right-[10%] w-[140px] lg:w-[337px] h-[125px] lg:h-[316px] bg-[#11D9C5] rounded-full blur-3xl opacity-30' />
      
      <div className='relative bottom-[7%] md:bottom-0 flex flex-col h-[55%] md:h-[90%] w-1/2 items-center md:items-start p-[5%] pt-[15%] lg:pt-[8%]'>
        <h2 className='bg-gradient-to-r text-3xl font-semibold md:text-5xl from-[#11D9C5] to-[#91A6FF] bg-clip-text text-transparent'>
        NetSepio WebApp
        </h2>
        <p className='text-white font-thin text-xl lg:text-lg pt-[5%] md:pt-[8%] mb-[10%] lg:mb-[8%] w-4/5'>
        Leave verified reviews, manage projects with ease, and secure your internet connection with a built-in VPN.  
        All while earning rewards for your participation.
        </p>
        <CustomBtn
          link='https://app.netsepio.com/'
          title='Explore WebApp'
          width='w-[140px] lg:w-[191px]'
        />
      </div>

      <div className='relative pr-[3%]'>
        <img
          className='object-cover bg-primary lg:bg-transparent lg:border-none border-opacity-30 z-20 border-[0.3px] border-cta rounded-md'
          src={"/images/webapp/hero2.png"}
          fill
          alt='hero'
        />
      </div>
    </div>

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

      <section className='w-[90%] mt-[5%] lg:mt-[10%] space-y-[5vh] lg:pace-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/images/webapp/install_bg.png)] bg-no-repeat lg:h-[724px]'>
        <h2 className='text-2xl text-white font-semibold md:text-6xl w-1/2 text-center '>
        Unlock the Power of 
        Community Insights
        </h2>
        <CustomBtn
          link='https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd'
          title='Explore Now'
          width='w-[140px] bg-white lg:w-[191px]'
        />
      </section>

    </div>
  );
};

export default Index;
