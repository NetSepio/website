import useFonts from "@/hooks/useFonts";
import Link from "next/link";
import React from "react";

const FooterItem = ({ item }) => {
  const { roboto } = useFonts();
  return (
    <div style={roboto.style} className='w-max  px-[20px]'>
      <h4 className=' text-white text-[22px] mb-[49px]'>{item.title}</h4>
      {item.content.map((content, index) => {
        return (
          <Link
            key={index.toString()}
            href={content.link}
            className='text-white hover:text-cta duration-200 block my-2 font-thin'
          >
            {content.name}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterItem;
