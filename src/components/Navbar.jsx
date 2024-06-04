import React from "react";
import CustomBtn from "./CustomBtn";
import DarkBtn from "./DarkBtn";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='w-[93%]  mt-[50px] absolute z-20 flex items-center justify-between self-center'>
      <Link href={"/"} className='flex items-center'>
        <Image src={"/images/logo.svg"} width={56} height={56} alt='Logo ' />
        <Image
          src={"/images/netsepio.svg"}
          width={104.27}
          height={32}
          alt='Netsepio'
        />
      </Link>
      <div className='flex gap-[14px]'>
        <DarkBtn link={"https://sotreus.com"} title={"Sotreus"} />
        <CustomBtn link='https://erebrus.io' title={"Erebrus"} />
      </div>
    </div>
  );
};

export default Navbar;
