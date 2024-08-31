"use client";
import CustomBtn from "@/components/CustomBtn";
import useFonts from "@/hooks/useFonts";
import { privacyData, sotreusFeatures } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const Page = () => {
  const { galgo } = useFonts();
  return (
    <div className="w-full h-full ">
      <section className="h-auto w-full flex flex-col items-center md:gap-10 md:pt-[20vh] pt-[20vh] justify-start px-4">
        <div className="text-3xl md:text-5xl max-w-[90%] md:max-w-1/2 text-center font-light">
          <h1>
            Secure, Decentralized VPN Service
            <br /> for Enhanced Privacy and Anonymity
          </h1>
        </div>

        <div className="w-full mt-10 flex justify-center relative">
          <Image
            src="/images/sotreus/hero.png"
            className="object-cover w-full md:w-[90%] h-[60vw] md:h-[40vw]"
            width={1000}
            height={600}
            alt="hero"
          />
          <Image
            src="/images/sotreus/logo.png"
            className="absolute top-1/2 transform left-10 md:left-20 -translate-y-1/2 w-[40vw] md:w-[25vw] h-auto"
            alt="logo"
            width={1000}
            height={600}
          />
        </div>
      </section>

      <section className="w-full px-[4vw] md:px-[6vw] pt-[10vh] md:pt-[10vh] bg-primary h-max ">
        <div
          className="w-[90%] md:w-[80%] h-auto md:h-auto p-6 rounded-2xl flex flex-col items-center text-center mx-auto"
          style={{
            backgroundImage: `
              radial-gradient(47.29% 118.31% at 0% 100%, rgba(102, 1, 102, 0.5) 30.45%, rgba(20, 30, 67, 0.5) 100%),
              linear-gradient(105.93deg, rgba(247, 247, 218, 0.2) 54.33%, rgba(102, 1, 102, 0.2) 99.6%)
            `,
            borderRadius: '20px',
            color: 'white'
          }}
        >
          <h2 className="text-xl md:text-2xl mb-5 md:mb-10">ABOUT</h2>
          <p className="w-full md:w-2/3 font-thin text-lg md:text-xl mb-6 md:mb-8">
            Sotreus is a fast and easy-to-use VPN service that protects internet activities from cyber threats and surveillance
          </p>
          <CustomBtn
            title="Visit Now"
            link=""
            width="w-[120px] md:w-[140px] lg:w-[150px] bg-white lg:mb-5"
          />
        </div>

        <div className="relative overflow-hidden w-full">
          <div
            className="absolute inset-0 opacity-20 lg:left-[calc(50%-600px+20px)] lg:bg-[radial-gradient(ellipse_at_center,#ffff,#272e221d_30%,#272e221d_10%)] md:bg-[radial-gradient(circle_at_top,#0262FF,#040819_30%,#080d1f_100%)] bg-[radial-gradient(circle_at_center,#0262FF,#040819_30%,#080d1f_100%)] transform scale-[2.0]"
          ></div>
          <div className="relative min-h-[300px] flex flex-col items-center justify-center pt-20 md:pt-40 pb-40 md:pb-60">
            <div className="text-center lg:text-6xl md:text-4xl text-2xl text-white mb-10 lg:w-1/2 md:w-full w-3/4">
              Maximize Security & Performance
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
          {privacyData.map((item, i) => (
            <div
              key={i.toString()}
              className="relative px-[20px] md:px-[30px] border h-[300px] md:h-[450px] lg:h-[600px] rounded-[8px] border-gray-500 bg-gradient-t-br from-white to-[#11D9C5] w-full md:w-[48%] mb-[4vh] md:mb-[6vh] flex flex-col gap-5 justify-between py-[4%]"
            >
              <h3 className="text-white font-medium z-20 text-lg md:text-xl lg:text-3xl text-center">
                {item.title}
              </h3>
              <p className="text-white w-[100%] font-light z-20 text-sm md:text-lg lg:text-2xl mx-auto">
                {item.desc}
              </p>
              <div className="w-full p-5 h-full absolute top-0 left-0">
                <Image
                  src={`/images/sotreus/${item.image}`}
                  alt="bg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full">
        <div className="relative overflow-hidden w-full">
          <div
            className="absolute inset-0 opacity-20 w-full lg:left-[calc(30%-900px+10px)] lg:bg-[radial-gradient(ellipse_at_center,#ffff,#272e221d_30%,#272e221d_10%)] md:bg-[radial-gradient(circle_at_top,#0262FF,#040819_30%,#080d1f_100%)] bg-[radial-gradient(circle_at_center,#0262FF,#040819_30%,#080d1f_100%)] transform scale-[2.0]"
          ></div>
          <div className="relative min-h-[200px] flex flex-col items-center justify-center pt-40 md:pt-52 pb-40 md:pb-52">
            <div className="text-start lg:text-6xl md:text-4xl text-2xl  text-white mb-10 lg:w-4/5 md:w-full w-3/4">
              Features of Sotreus
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-auto md:h-[900px]">
          {sotreusFeatures.map((item, i) => (
            <div
              key={i}
              className="p-4 md:p-6 border flex flex-col items-start"
              style={{
                background:
                  "linear-gradient(110.55deg, rgba(231, 210, 170, 0.15) 1.93%, rgba(145, 143, 106, 0.15) 97.74%)",
              }}
            >
              <div className="w-16 md:w-24 h-16 md:h-24 relative mt-6 md:mt-10 mb-6 md:mb-10">
                <Image
                  src={`/images/sotreus/${item.image}`}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-white text-lg md:text-2xl lg:text-3xl mb-6 md:mb-10">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative lg:mb-32 w-[90%] mx-auto mt-[5%] lg:mt-[10%] space-y-[5vh] lg:space-y-[10vh] flex flex-col items-center justify-center h-auto  bg-cover bg-[url(/images/sotreus/base.png)] bg-no-repeat lg:h-screen">
        <Image
          src="/images/sotreus/logo.png"
          className="absolute top-0 left-1/2 transform pt-5 -translate-x-1/2 w-[30vw] md:w-[20vw] h-auto"
          alt="logo"
          width={1000}
          height={600}
        />

<p className="text-white  font-light w-[80%] md:w-[70%] text-3xl lg:text-[70px] leading-tight text-center z-10 mt-[10vh]">
    Set up your Dedicated VPN 
    <br/>today
  </p>

        <div className="w-[90%] md:w-[70%] lg:w-[40%] flex flex-col items-center lg:items-center space-y-4 lg:space-y-6 z-10">
        <CustomBtn
            title="Visit Now"
            link=""
            width="w-[120px] md:w-[140px] lg:w-[150px] bg-white mb-5"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
