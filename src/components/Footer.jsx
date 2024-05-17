"use client";
import useFonts from "@/hooks/useFonts";
import { footerContents } from "@/utils/data";
import FooterItem from "./FooterItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { roboto } = useFonts();
  const path = usePathname();
  console.log("path", path);
  return (
    <div
      style={roboto.style}
      className={`h-[615px] w-full flex ${
        path === "/" ? "bg-cta" : "bg-white"
      } items-end`}
    >
      <div className=' h-[507px] w-full pt-[102px]  rounded-t-[50px]  bg-primary '>
        <footer className='w-[85%] relative mx-auto border-b border-cta border-opacity-30 pb-[30px]  justify-between flex-col  flex lg:flex-row'>
          <div className='flex w-max relative bottom-3 flex-col'>
            <Link href={"/"} className='flex items-center'>
              <Image
                src={"/images/logo.svg"}
                width={56}
                height={56}
                alt='Logo '
              />
              <Image
                src={"/images/netsepio.svg"}
                width={104.27}
                height={32}
                alt='Netsepio'
              />
            </Link>
            <p className='text-[20px] mt-[55px] text-white w-[280px] font-light'>
              AI DePIN CyberSecurity which Protects Online Presence
            </p>
          </div>

          {footerContents.map((item, index) => {
            return <FooterItem key={index.toString()} item={item} />;
          })}
          <div className='flex ml-4 flex-col'>
            <h4 className=' text-white text-[22px] mb-[49px]'>{"Others"}</h4>
            <div className='flex relative right-[6px] gap-1'>
              <Link
                target='_blank'
                className='hover:scale-110 duration-150'
                href={"https://t.me/NetSepio?boost "}
              >
                <Image
                  src={"/images/tele_green.svg"}
                  width={50}
                  height={50}
                  className='object-cover'
                  alt='telegram'
                />
              </Link>
              <Link
                target='_blank'
                className='hover:scale-110 duration-150'
                href={"https://github.com/Netsepio"}
              >
                <Image
                  src={"/images/git_green.svg"}
                  width={50}
                  className='object-cover'
                  height={50}
                  alt='github'
                />
              </Link>
            </div>
          </div>
          <p className='text-cta absolute left-0 -bottom-10 text-sm'>
            © 2024 - NetSepio. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
