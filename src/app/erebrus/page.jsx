import CustomBtn from "@/components/CustomBtn";
import { erebrusFeatures, erebrusFeatures2 } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='bg-primary w-full pt-[17vh] md:pt-[20vh] flex flex-col items-center h-auto'>
      <section className='flex flex-col items-center justify-between rounded-[20px] w-[95%] h-[900px] md:h-[1200px]'>
        <h2 className='mt-3 md:w-[50%] text-center mb-[4%] text-white font-extrabold text-xl md:text-4xl leading-tight'>
          Secure, Decentralized VPN Service for Enhanced Privacy and Anonymity
        </h2>
        <div className='w-[90vw]  h-[65%] relative'>
          <Image
            src={"/images/erebrus/hero.png"}
            className='object-cover rounded-[10px]'
            alt='hero'
            fill
          />
        </div>
        <div className='flex flex-1 gap-[39px] py-20 w-[90vw] items-center mt-[3%] flex-col rounded-3xl' style={{background: 'linear-gradient(to top right, #11D9C580 10%, #64B96840 30%, #141E4380 50%)',}}>
          <h3 className='font-medium flex text-white text-xl md:text-[40px] md:leading-normal '>
            ABOUT
          </h3>
          <p className='md:text-[34px] text-center md:w-[75%] mt-[1%] leading-tight text-xl font-light text-white'>
          Erebrus is a shared decentralized VPN Service based on the WireGuard 
          Protocol. It is designed to enhance users' privacy, anonymity, 
          and security when using Public Wi-Fi. {" "}
          </p>
          <CustomBtn
          title='Visit Now'
          link='https://erebrus.io/'
          width='w-[140px] bg-white lg:w-[191px]'
        />
        </div>
      </section>
      
      <section className='mt-[119px] w-[90%] gap-[7vw] flex flex-col'>
  
        <div className='w-full h-max flex flex-col md:flex-row gap-[2vw] justify-between'>      
          <h2 className='font-medium  text-xl text-white md:text-[55px] leading-tight w-1/2'>
          Unrestricted 
          Digital Freedom
          </h2>
              <div
                className=' relative border  px-[30px] rounded-[10px] h-[350px] md:flex-1 flex flex-col  justify-around md:h-[455px] '
              >
                <h3 className='text-white font-semibold z-20 text-xl md:text-[38px] leading-none'>
                Seamless Privacy
                </h3>
                <p className='text-white w-[90%] relative top-[1vh] md:top-[4vh] font-light z-20 text-base md:text-[26px] leading-none'>
                Experience uninterrupted privacy with our  
                ÐVPN seamlessly integrated into your 
                favourite apps. No need for complex setups, 
                your online security is always on, by default.
                </p>
                <div className=' w-full  p-5 h-full  absolute top-0 left-0'>
                  <Image
                    src={`/images/erebrus/erebrusFeatures1.png`}
                    alt='bg'
                    quality={100}
                    fill
                    className='rounded-[10px] object-cover'
                  />
                </div>
              </div>
        </div>

        <div className='w-full h-max flex flex-col md:flex-row gap-[4vw] justify-between'>
          {erebrusFeatures.map((item, i) => {
            return (
              <div
                key={i.toString()}
                className=' relative border  px-[30px] rounded-[10px] h-[350px] md:flex-1 flex flex-col  justify-around md:h-[455px] '
              >
                <h3 className='text-white font-semibold z-20 text-xl md:text-[38px] leading-none'>
                  {item.title}
                </h3>
                <p className='text-white w-[90%] relative top-[1vh] md:top-[4vh] font-light z-20 text-base md:text-[26px] leading-none'>
                  {item.desc}
                </p>
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

        <div className='w-full h-max flex flex-col md:flex-row gap-[4vw] justify-between'>
          {erebrusFeatures2.map((item, i) => {
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
                {/* <CustomBtn
                  width='bg-white w-[90px] lg:w-[170px]'
                  title={item.button}
                  link={item.link}
                /> */}
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
      <section className='w-[90%] my-[5%] lg:mt-[10%] space-y-[5vh] lg:space-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/images/erebrus/base2.png)] bg-no-repeat lg:h-screen'>
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
