import useFonts from "@/hooks/useFonts";
import Link from "next/link";
import React from "react";

const CustomBtn = ({
  title = "Explore",
  width = "w-[80px] lg:w-[170px]",
  link = "/",
}) => {
  const { inter } = useFonts();
  return (
    <button
      className={`rounded-lg  ${width} text-primary text-xs lg:text-[16px] z-50 font-medium active:scale-95 duration-100 hover:bg-opacity-7 hover:-translate-y-1    bg-cta h-[55px]`}
    >
      <Link
        target={!link.toLowerCase().includes("https") ? "_self" : "_blank"}
        href={link}
      >
        {title}
      </Link>
    </button>
  );
};

export default CustomBtn;
