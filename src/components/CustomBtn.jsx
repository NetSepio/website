import useFonts from "@/hooks/useFonts";
import Link from "next/link";
import React from "react";

const CustomBtn = ({
  title = "Explore",
  width = "w-[80px] lg:w-[150px]",
  link = "/",
}) => {
  const { inter } = useFonts();
  const isInactive = link === "#";
  return (
    <button
      className={`rounded-lg ${width} text-primary text-xs lg:text-[18px] z-50 font-medium duration-100 h-[50px] ${
        isInactive
          ? "bg-[#11D9C580] cursor-not-allowed"
          : "active:scale-95 hover:bg-opacity-7 hover:-translate-y-1 bg-cta"
      }`}
      disabled={isInactive}
    >
      {!isInactive ? (
        <Link
          target={!link.toLowerCase().includes("https") ? "_self" : "_blank"}
          href={link}
        >
          {title}
        </Link>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

export default CustomBtn;
