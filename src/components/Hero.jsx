"use client";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React from "react";
import CustomBtn from "./CustomBtn";
import DarkBtn from "./DarkBtn";
import { motion } from "framer-motion";

const Hero = () => {
  const { roboto } = useFonts();

  const banner = {
    backgroundImage:
      "linear-gradient(to right, #050B21B2, #050B21B2, #B7990D26, #11D9C54D, #B7990D26, #050B21B2, #050B21B2)",
      // "linear-gradient(to right, #050B214D 30%, #322F1C43 26.25%, #5E521739 22.5%, #11D9C54D 30%, #B7990D26 15%, #050B214D 30%)",
    width: "95vw",
  };
  
  return (
    <>
    <div
      style={roboto.style}
      className='w-full  overflow-hidden flex relative justify-between items-center bg-tranparent h-screen'
    >
      {/* Conic Gradient */}
      <div className='absolute top-0 bottom-0 w-full h-full bg-cover lg:bg-[url(/images/herobg.png)] md:bg-[url(/images/herobg.png)] bg-[url(/images/herobg2.png)]'></div>


      {/* Hero Text */}
      <div className='z-20 absolut lg:relative bottom-10 lg:bottom-0 lg:mx-[80px] md:mx-[80px] mx-[30px]'>
        <h3 className='text-3xl lg:text-[58px] max-w-[100%] leading-tight text-white'>
        Pioneering Social DePIN
        </h3>
        <p className='text-lg lg:text-xl md:text-xl max-w-[100%] leading-tight text-white mt-10'>
        NetSepio puts the power back to the people by providing a secure, private and uncensored decentralized internet protocol.
        </p>
        <div className='flex items-center mt-[60px] gap-[26px]'>
          <CustomBtn link='https://app.netsepio.com' title={"Explore Webapp"} />
          <DarkBtn
            link='https://discordapp.com/invite/5uaFhNpRF6'
            title={"Join Discord"}
          />
        </div>
      </div>
      {/* <motion.div
        animate={{ rotate: 180 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: "reverse",
          duration: 10,
        }}
        className='z-10 absolute -right-[5%]'
      >
        <div className='relative hidden sm:flex w-[250px] h-[230px] lg:w-[450px] lg:h-[402.8px]'>
          <Image
            src={"/images/ball.png"}
            className=''
            alt='hero_image'
            fill
            priority
          />
        </div>
      </motion.div> */}
    </div>

    <div className='items-center justify-between' style={{ letterSpacing: '0.06em' }}>
          <div
            style={banner}
            className='py-6 lg:text-[30px] md:text-xl text-lg text-gray-300 text-center'
          >
            Unleash the Power of Future Internet 
          </div>
        </div>
    </>
  );
};

export default Hero;
