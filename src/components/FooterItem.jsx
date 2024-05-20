import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterItem = ({ item }) => {
  const { roboto } = useFonts();
  return (
    <div style={roboto.style} className='w-[200px] px-[20px]'>
      <h4 className=' text-white text-[22px] mb-[49px]'>{item.title}</h4>
      {item.content.map((content, index) => {
        return (
          <Link
            key={index.toString()}
            href={content.link}
            className='text-white flex hover:text-cta duration-200 gap-2 hover:gap-3 my-2 font-thin'
          >
            <p>{content.name}</p>
            <Image
              src={"images/arrow.svg"}
              width={12}
              height={12}
              alt='arrow'
            />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterItem;
