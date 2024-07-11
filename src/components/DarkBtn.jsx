import Link from "next/link";
import React from "react";

const DarkBtn = ({ title, width = "w-[80px] lg:w-[170px]", link = "/" }) => {
  return (
    <button
      className={`rounded-lg border-cta border ${width} text-xs lg:text-[18px]  hover:scale-95  duration-100 text-white h-[50px]`}
    >
      <Link target='_blank' href={link}>
        {title}
      </Link>
    </button>
  );
};

export default DarkBtn;
