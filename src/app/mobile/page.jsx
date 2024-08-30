import Image from "next/image";
import React from "react";
import CustomBtn from "@/components/CustomBtn";

const Mobile = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mt-32 px-4 lg:px-0 mt-32">
      <h2 className="text-3xl py-6 font-light mb-6 lg:hidden">
        Blockchain VPN app for your privacy and online security
      </h2>
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <Image
          src="/images/mobile/mobile1.png"
          width={500}
          height={500}
          alt="mobile"
          className="w-full h-auto max-w-md lg:max-w-none lg:h-[50vw] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="max-w-md lg:max-w-xl md:mx-10">
        <h2 className="hidden lg:block text-3xl lg:text-5xl xl:text-6xl font-light mb-6 lg:mb-10">
            Blockchain VPN app for your privacy and online security
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-10 font-light">
            Empower your online activity with our Erebrus mobile app for secure,
            private and accessible network. We utilize NFTs for robust privacy
            and decentralization.
          </p>
          <div className="flex justify-center lg:justify-start">
            <CustomBtn
              width="w-2/5 sm:w-auto bg-[#11D9C5] px-6 py-2 lg:px-8 lg:py-3"
              title="Download Now"
              link="https://drive.google.com/file/d/1jdkqwIXY825iG3shRRoFyg5SMGy6LN8J/view?usp=drive_link"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;