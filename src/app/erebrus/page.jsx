import CustomBtn from "@/components/CustomBtn";
import { erebrusFeatures, erebrusFeatures2 } from "@/utils/data";
import Image from "next/image";
import React from "react";


const Index = () => {
  return (
    <div className='bg-primary w-full pt-[17vh] md:pt-[20vh] flex flex-col items-center h-auto'>
      <title>Erebrus | NetSepio</title>
      <section className='flex flex-col items-center justify-between rounded-[20px] w-[95%] h-[1100px] md:h-[1400px]'>
        <h1 className='text-3xl md:text-5xl max-w-[90%] md:max-w-1/2 text-center font-light lg:mb-10'>
          Secure, Decentralized VPN Service<br/> for Enhanced Privacy and Anonymity
        </h1>
        <div className='w-[90vw]  h-[90%] relative'>
          <Image
            src={"/images/erebrus/hero.png"}
            className='object-cover rounded-[10px]'
            alt='hero'
            fill
          />
           <Image
            src="/images/erebrus/erebruslogo.png"
            className="absolute top-1/2 transform left-10 md:left-10 -translate-y-1/2 w-[40vw] md:w-[25vw] h-auto"
            alt="logo"
            width={1000}
            height={600}
          />
        </div>
        <div className='flex flex-1 gap-[39px] py-10 w-[70vw] items-center mt-[3%] flex-col rounded-3xl' style={{background: 'linear-gradient(to top right, #11D9C580 10%, #64B96840 30%, #141E4380 50%)',}}>
          <h1 className='font-medium flex text-white text-xl md:text-2xl md:leading-normal '>
            ABOUT
          </h1>
          <p className='md:text-xl text-center md:w-[75%] mt-[1%] leading-tight text-xl font-light text-white'>
          Erebrus is a shared decentralized VPN Service based on the WireGuard 
          Protocol. It is designed to enhance users privacy, anonymity, 
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

      <section className='mt-[119px] w-[90%] gap-[7vw] flex flex-col '>
      <div className='w-full h-max flex flex-col md:flex-row gap-[2vw] justify-between '>      
          <h2 className='font-medium  text-xl text-white md:text-[55px] leading-tight w-1/2'>
          Features of erebrus
          </h2>
        </div>
        </section>


        <section className='mt-[119px] w-[90%] gap-[7vw] flex flex-col'>
        <div className='w-full h-max flex flex-col md:flex-row gap-[4vw] justify-between'>
              <div
                className='w-2/3 relative px-[30px] h-[350px] flex flex-col  justify-around md:h-[455px] '
              >
                <h3 className='text-white font-semibold z-20 text-xl md:text-[38px] leading-none'>
                Decentralized VPN & Wi-Fi
                </h3>
                <p className='text-white relative font-light z-20 text-base md:text-[26px] leading-none'>
                Benefit from a global network of decentralized VPN nodes for increased reliability and censorship resistance. Access a vast network of Wi-Fi hotspots operated by independent providers with better price and reliability.
                </p>
                <CustomBtn
                  width='bg-[#11D9C5] w-[90px] lg:w-[170px]'
                  title="Run a node"
                  link=""
                />
              </div>


              <div
                className='w-1/3 relative px-[30px] flex flex-col  justify-around'
              >
                <div className=' w-full h-full  absolute bottom-32 left-0'>
                  <img
                    src={`/images/erebrus/planet.png`}
                    alt='bg'
                    quality={100}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

        </div>

        <div className='w-full h-max flex flex-col md:flex-row gap-[4vw] justify-between'>

        <div
                className='w-1/3 relative px-[30px] flex flex-col  justify-around'
              >
                <div className=' w-full h-full  absolute top-0 left-32'>
                  <img
                    src={`/images/erebrus/rocket.png`}
                    alt='bg'
                    quality={100}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              <div
                className='w-2/3 relative px-[30px] h-[350px] flex flex-col  justify-around md:h-[455px] '
              >
                <h3 className='text-white font-semibold z-20 text-xl md:text-[38px] leading-none'>
                Combined ÐVPN and ÐWi-Fi Power
                </h3>
                <p className='text-white relative font-light z-20 text-base md:text-[26px] leading-none'>
                Seamlessly switch between ÐVPN and ÐWi-Fi for optimal connectivity and security. Enjoy the best of both worlds with a unified mobile app experience.
                </p>
                <CustomBtn
                  width='bg-[#11D9C5] w-[90px] lg:w-[170px]'
                  title="Explore More"
                  link=""
                />
              </div>
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
