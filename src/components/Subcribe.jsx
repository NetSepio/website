import React from "react";
import CustomBtn from "./CustomBtn";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import "../app/globals.css";
const SubscribePage = () => {
  const { roboto } = useFonts();
  return (
    <div className=" my-20 ">
      <div
        style={roboto.style}
        className="w-[1258px] h-[500px] px-[80px] flex flex-row-reverse  justify-between items-center gap-10 bg-gradient1 
      rounded-[40px]"
      >
        <div className="flex pl-[0%] sm:pl-[5%] flex-col  w-[40%] items-end">
          <CustomBtn
            link="https://netsepio.substack.com/"
            width="lg:w-[234px]  sm:mr-0"
            title={"Subscribe"}
          />
        </div>
        <div className="flex flex-col relative h-[40%] sm:h-[50%]  w-[35%] ">
          <Image
            src={"/images/subscribepage1.jpeg"}
            className="object-cover rounded-[20px]"
            fill
            priority
            alt="phone"
          />
        </div>
        <div className="flex flex-col relative h-[40%] sm:h-[50%]  w-[55%]">
          <Image
            src={"/images/subscribepage2.jpeg"}
            className="object-cover rounded-[40px]"
            fill
            priority
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
