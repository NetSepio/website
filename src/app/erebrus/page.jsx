import CustomBtn from "@/components/CustomBtn";
import { erebrusData, erebrusFeatures } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='bg-primary w-full pt-[17vh] md:pt-[20vh] flex flex-col items-center h-auto'>
      <section className='flex flex-col items-center justify-between pt-[4%] pb-[4%] bg-[#9BA7DF] rounded-[20px] w-[95%] h-[900px] md:h-[1200px]'>
        <div className='flex flex-col md:flex-row justify-between gap-[10vw] items-start  px-[2%] '>
          <h2 className='uppercase mt-3 md:w-[49%] text-center md:text-left text-white font-extrabold text-xl md:text-4xl md:leading-normal'>
            Secure, Decentralized VPN Service for Enhanced Privacy and Anonymity
          </h2>
          <div className='flex flex-1 gap-[39px] flex-col'>
            <h3 className='font-medium hidden md:flex  text-white text-xl md:text-3xl md:leading-normal '>
              ABOUT
            </h3>
            <p className='md:text-2xl leading-tight text-xl text-white'>
              Erebrus is a shared decentralized VPN Service based on the
              wireguard Protocol. It is designed to enhance user privacy,
              anonymity, and security when using Public VPNs.{" "}
            </p>
          </div>
        </div>
        <div className='w-[90vw]  h-[65%] relative'>
          <Image
            src={"/images/erebrus/hero.svg"}
            className='object-cover rounded-[10px]'
            alt='hero'
            fill
          />
        </div>
      </section>
      <section className='mt-[119px] w-[95%] gap-[7vw] flex flex-col md:flex-row justify-between'>
        <h2 className='font-medium md:w-[27vw] text-xl text-white md:text-[55px] leading-tight'>
          Unrestricted Digital Freedom
        </h2>
        <div className='borde flex-1 flex items-center flex-col'>
          <div className='flex flex-col md:flex-row items-center justify-between  md:flex-wrap'>
            {erebrusData.map((item, i) => {
              return (
                <div
                  key={i.toString()}
                  className=' relative border  px-[30px] rounded-[10px] w-[82vw] h-[350px]  md:w-[433px] mb-[6vh] md:mb-[8vh] flex flex-col gap-5  justify-between py-[15%] md:pt-[4%] md:pb-[6%] md:h-[593px] '
                >
                  <h3 className='text-white font-medium z-20 text-2xl md:text-[45px] leading-none'>
                    {item.title}
                  </h3>
                  <p className='text-white w-[90%] font-light z-20 text-base md:text-[32px] leading-none'>
                    {item.desc}
                  </p>
                  <div className=' w-full  p-5 h-full  absolute top-0 left-0'>
                    <Image
                      src={`/images/erebrus/${item.image}`}
                      alt='bg'
                      fill
                      className='rounded-[10px] object-cover md:object-contain'
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className=' relative border  px-[30px] rounded-[10px] w-[82vw] h-[350px]  md:w-full mb-[6vh] md:mb-[8vh] flex flex-col gap-5  justify-between py-[15%] md:pt-[4%] md:pb-[6%] md:h-[593px] '>
            <h3 className='text-white font-medium z-20 text-2xl md:text-[45px] leading-none'>
              {"Democratising Access"}
            </h3>
            <p className='text-white w-[90%] font-light z-20  md:text-[32px] leading-tight'>
              {
                "Erebrus levels the digital playing field, providing safe internet access to all."
              }
            </p>
            <div className=' w-full  p-5 h-full  absolute top-0 left-0'>
              <Image
                src={`/images/erebrus/access.svg`}
                alt='bg'
                fill
                className='rounded-[10px] object-cover  '
              />
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[119px] w-[95%] gap-[7vw] flex flex-col'>
        <h2 className='font-medium  text-xl text-white md:text-[55px] leading-tight'>
          Features of Erebrus
        </h2>
        <div className='w-full h-max flex flex-col md:flex-row gap-[2vw] justify-between'>
          {erebrusFeatures.map((item, i) => {
            return (
              <div
                key={i.toString()}
                className=' relative border  px-[30px] rounded-[10px] h-[350px]    md:flex-1 mb-[6vh] md:mb-[8vh] flex flex-col  justify-around md:h-[455px] '
              >
                <h3 className='text-white font-semibold z-20 text-xl md:text-[38px] leading-none'>
                  {item.title}
                </h3>
                <p className='text-white w-[90%] relative top-[1vh] md:top-[4vh] font-light z-20 text-base md:text-[26px] leading-none'>
                  {item.desc}
                </p>
                <CustomBtn
                  width='bg-white w-[90px] lg:w-[170px]'
                  title={item.button}
                  link={item.link}
                />
                <div className=' w-full  p-5 h-full  absolute top-0 left-0'>
                  <Image
                    src={`/images/erebrus/${item.image}`}
                    alt='bg'
                    quality={100}
                    fill
                    className='rounded-[10px] object-cover'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className='w-full mt-[5%] lg:mt-[10%] space-y-[5vh] lg:space-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/images/erebrus/base2.png)] bg-no-repeat lg:h-screen'>
        <div className='w-[150px] md:w-[350px] right-[4.5vw] md:right-[2.5vw] relative h-[60px] md:h-[93px]'>
          <Image src={"/images/erebrus/logo.svg"} fill alt='logo' />
        </div>
        <p className='text-white capitalize font-medium w-[90%] md:w-[70%] text-xl lg:text-[65px] leading-tight text-center'>
          Tailor Your Internet, No Matter Where You Are
        </p>
        <CustomBtn
          title='Visit Now'
          link='https://erebrus.io/'
          width='w-[140px] bg-white lg:w-[191px]'
        />
      </section>
    </div>
  );
};

export default Index;
