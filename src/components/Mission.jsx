"use client";
import useFonts from "@/hooks/useFonts";
import React, { useEffect } from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const Mission = () => {
  const { roboto } = useFonts();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    console.log("inView", inView);

    if (!inView) {
      animation.start({
        x: -300,
        opacity: 0,
        scale: 0,
      });
      animation2.start({
        scale: 0,
        opacity: 0,
        x: 300,
      });
      animation3.start({
        opacity: 0,
        y: 300,
      });
    } else {
      animation.start({
        x: 0,
        opacity: 1,
        scale: 1,
      });
      animation2.start({
        scale: 1,
        opacity: 1,
        x: 0,
      });
      animation3.start({
        y: 0,
        opacity: 1,
      });
    }
  }, [inView, animation, animation2, animation3]);
  return (
    <div ref={ref} className='h-screen  w-full flex my-[2%]  items-center'>
      <div className='w-[95%] rounded-[50px] relative h-[85%] bg-gradient-to-t p-[0.6px] from-primary to-cta/50 mx-auto'>
        <div className='w-full h-full z-20 rounded-[50px] bg-primary'>
          <div className='w-full h-full z-20 rounded-[50px] flex items-center justify-between  bg-gradient-to-tl from-primary2/20 to-primary2/20'>
            <motion.div
              transition={{ duration: 1.5 }}
              className='flex-col lg:w-[45%]  ml-[89px]  h-[80%] justify-between flex'
            >
              <h3
                style={roboto.style}
                className='text-white max-w-[420px] leading-none font-medium text-3xl lg:text-[72px]'
              >
                Empowering Connectivity
              </h3>
              <p className='text-base sm:text-[18px]  text-white font-thin'>
                Netsepio introduces our groundbreaking decentralized internet
                solution, designed to advance the adoption of decentralized
                networks. Featuring superior capabilities, robust performance,
                and competitive pricing, Netsepio is ideal for those exploring
                the potential of decentralized internet. Built on the innovative
                DePIN (Decentralized Physical Infrastructure Network), our
                platform is tailored to enhance internet access and foster
                global digital ecosystems, ensuring secure and unrestricted
                connectivity for all.
              </p>
              <CustomBtn link='/about' title={"Our Mission"} />
            </motion.div>
            <div className='w-[45%] lg:flex overflow-hidden hidden justify-between h-[80%]'>
              <motion.div
                animate={animation}
                transition={{ type: "tween", duration: 1 }}
                className='w-[45%] self-start h-[65%] flex flex-col relative'
              >
                <Image
                  className='object-cover rounded-[10px]'
                  src={"/images/access.svg"}
                  fill
                  alt='access'
                />
                <h6
                  style={roboto.style}
                  className='font-medium absolute text-4xl leading-tight self-center bottom-4 z-20 text-white w-[234px]'
                >
                  {" "}
                  Uninterrupted Access
                </h6>
              </motion.div>
              <motion.div
                animate={animation2}
                transition={{ type: "tween", duration: 2 }}
                className='w-[45%] self-end mr-[4%] h-[65%] flex flex-col relative'
              >
                <Image
                  className='object-cover rounded-[10px]'
                  src={"/images/security.svg"}
                  fill
                  alt='access'
                />
                <h6
                  style={roboto.style}
                  className='font-medium absolute text-4xl leading-tight self-center bottom-4 z-20 text-white w-[234px]'
                >
                  {" "}
                  Enhanced Security
                </h6>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Gradient Radial */}
        <div className='absolute rounded-[50px] top-0 bottom-0 w-full h-full element2 opacity-50 '></div>
      </div>
    </div>
  );
};

export default Mission;
