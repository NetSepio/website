import useFonts from "@/hooks/useFonts";
import React from "react";

const CustomBtn = ({ title, width = "w-[170px]" }) => {
  const { inter } = useFonts();
  return (
    <button
      style={inter.style}
      className={`rounded-lg  ${width} text-[16px] font-medium active:scale-95 duration-100 hover:bg-opacity-7 hover:-translate-y-1    bg-cta h-[55px]`}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
