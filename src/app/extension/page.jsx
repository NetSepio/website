import CustomBtn from "@/components/CustomBtn";
import FeatureItem from "@/components/extension/FeatureItem";
import Hero from "@/components/extension/HeroExt";
import { ExtFeatures } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='py-[20vh] flex items-center flex-col'>
      <Hero />
      <section className='w-full flex flex-col py-[12vh] items-center h-max'>
        <h2 className='text-cta w-full mb-[6vh] text-center text-2xl font-medium md:text-4xl'>
          Features
        </h2>
        {ExtFeatures.map((item, index) => {
          return <FeatureItem item={item} key={index.toString()} />;
        })}
      </section>
      <section className='w-[90%] mt-[5%] lg:mt-[10%] space-y-[5vh] lg:pace-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/images/extension/install_bg.svg)] bg-no-repeat lg:h-[724px]'>
        <h2 className='text-2xl text-white font-semibold md:text-6xl  '>
          NetSepio Browser Extension
        </h2>
        <p className='bg-gradient-to-r from-primary to-[#3185FC] from-0% via-90% to-100% via-[#91A6FF] bg-clip-text text-transparent font- text-lg lg:text-3xl'>
          Don&apos;t just browse the web—browse it better.
        </p>
        <CustomBtn
          link='https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd'
          title='Install now'
          width='w-[140px] bg-white lg:w-[191px]'
        />
      </section>
    </div>
  );
};

export default Index;
