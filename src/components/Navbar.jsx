import React from "react";
import CustomBtn from "./CustomBtn";
import DarkBtn from "./DarkBtn";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full mt-12 absolute z-20 py-2 border-b border-[#11D9C5]">
    <div className="w-[93%] flex items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.svg" width={56} height={56} alt="Logo" />
        <Image
          src="/images/netsepio.svg"
          width={104.27}
          height={32}
          alt="Netsepio"
          className="ml-2" // Added margin for spacing
        />
      </Link>
      <div className="flex gap-3">
        <CustomBtn link="https://erebrus.io" title="Erebrus" />
      </div>
    </div>
  </div>
  
  );
};

export default Navbar;
