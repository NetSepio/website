"use client";
import CustomBtn from "@/components/CustomBtn";
import useFonts from "@/hooks/useFonts";
import { privacyData, sotreusFeatures } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { galgo } = useFonts();
  return (
    <div className='w-full h-full'>
      <section className='h-screen relative w-full flex flex-col items-center bg-cover gap-5 md:gap-10 md:pt-[20vh] justify-center bg[url(/images/sotreus/privacy.png)]'>
        <h1 className='uppercase text-3xl  font-[100] md:text-8xl text-white'>
          Privacy Firewall
        </h1>
        <p className='text-sm md:text-2xl md:w-[40%] text-center font-extralight text-white/80'>
          <span>Sotreus,</span>
          fast and easy-to-use VPN service protects internet activities from
          cyber threats and surveillance
        </p>
        <div className='w-full h-full absolute top-0 -z-10'>
          <Image
            src={"/images/sotreus/privacy.png"}
            className='object-cover'
            fill
            alt='hero'
          />
        </div>
        ;
      </section>
      <section className='w-full px-[6vw] pt-[8vh] md:pt-[10vh] bg-primary h-max'>
        <h2 className='text-white font-medium mb-[8vh] md:mb-[15vh] text-2xl md:text-6xl'>
          Maximize Security and Performance
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-between  md:flex-wrap'>
          {privacyData.map((item, i) => {
            return (
              <div
                key={i.toString()}
                className=' relative px-[30px] rounded-[20px] bg-gradient-t-br from-white to-[#11D9C5] w-[82vw] h-[200px]  md:w-[600px] mb-[6vh] md:mb-[8vh] flex flex-col gap-5  justify-between py-[4%] md:h-[367.41px] '
              >
                <h3 className='text-white font-medium z-20 text-xl md:text-3xl'>
                  {item.title}
                </h3>
                <p className='text-white w-[85%] md:w-[75%] font-light z-20 text-sm md:text-xl'>
                  {item.desc}
                </p>
                <div className=' w-full  p-5 h-full  absolute top-0 left-0'>
                  <Image
                    src={`/images/sotreus/${item.image}`}
                    alt='bg'
                    fill
                    className=' object-contain'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <h2 className='text-white font-bold mt-[10vh] md:mt-[20vh] mb-[6vh] md:mb-[17vh] text-2xl md:text-6xl'>
          Features of Sotreus
        </h2>
        <div className='flex flex-col   items-center'>
          {sotreusFeatures.map((item, i) => {
            return (
              <div
                key={i.toString()}
                className='w-full relative mb-[3vh] md:mb-[10vh] flex flex-col md:flex-row justify-between items-center h-auto md:h-[496px]'
              >
                <div className=' w-[360px]  h-[250px] md:w-[810px] md:h-[496px] relative'>
                  <Image
                    src={`/images/sotreus/${item.image}`}
                    alt='bg'
                    fill
                    className=' object-fit'
                  />
                </div>
                <div className='h-full flex flex-col justify-center  py-[6%] md:w-[33%]'>
                  <h3 className='text-white  font-medium mb-[1vh] md:mb-[5vh] text-xl md:text-5xl'>
                    {item.title}
                  </h3>
                  <p className='text-white/60 w-[85%]  font-light text-sm md:text-xl'>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='w-full mt-[5%] lg:mt-[10%] space-y-[5vh] lg:space-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/images/sotreus/base.svg)] bg-no-repeat lg:h-screen'>
        <h2 style={galgo.style} className='text-white  text-4xl md:text-8xl  '>
          SOTREUS
        </h2>
        <p className='text-white uppercase w-[70%] text-3xl lg:text-6xl text-center'>
          Set up your Dedicated vpn today
        </p>
        <CustomBtn title='Try Now' width='w-[140px] bg-white lg:w-[191px]' />
      </section>
    </div>
  );
};

export default Page;
