import React from "react";

const DarkBtn = ({ title, width = "w-[170px]" }) => {
  return (
    <button
      className={`rounded-lg border-cta border ${width} text-[18px]  hover:scale-95  duration-100 text-white  bg-primary h-[55px]`}
    >
      {title}
    </button>
  );
};

export default DarkBtn;
