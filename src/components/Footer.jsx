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
      className=" h-[507px] w-full pt-[102px] bg-gradient-to-t from-primary/40 to-cta/40 "
    >
      <footer className="w-[85%] relative mx-auto border-b border-cta border-opacity-30 pb-[30px]  justify-between flex-col gap-8 sm:gap-0  flex lg:flex-row">
        <div className="flex w-max relative bottom-3 flex-col ">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/images/logo.svg"}
              width={56}
              height={56}
              alt="Logo "
            />
            <Image
              src={"/images/netsepio.svg"}
              width={104.27}
              height={32}
              alt="Netsepio"
            />
          </Link>
          <p className="text-[20px] mt-[22px] sm:mt-[55px] text-white w-[280px] font-light">
            AI DePIN CyberSecurity which Protects Online Presence
          </p>
        </div>

        {footerContents.map((item, index) => {
          return <FooterItem key={index.toString()} item={item} />;
        })}
        <div className="flex ml-4 flex-col">
          <h4 className=" text-white text-[22px] mb-[49px]">{"Others"}</h4>
          <div className="flex relative right-[6px] gap-3 pl-2">
            <Link
              target="_blank"
              className="hover:scale-110 duration-150"
              href={"https://t.me/NetSepio?boost "}
            >
              <Image
                src={"/images/tele_green.svg"}
                width={50}
                height={50}
                className="object-cover"
                alt="telegram"
              />
            </Link>
            <Link
              target="_blank"
              className="hover:scale-110 duration-150"
              href={"https://github.com/Netsepio"}
            >
              <Image
                src={"/images/git_green.svg"}
                width={50}
                className="object-cover"
                height={50}
                alt="github"
              />
            </Link>

            {/* //discord */}
            <Link
              target="_blank"
              className="hover:scale-110 duration-150"
              href={"https://discordapp.com/invite/5uaFhNpRF6"}
            >
              <Image
                src={"/images/discord_green.svg"}
                width={65}
                className="object-cover"
                height={10}
                alt="discord"
              />
            </Link>
          </div>
          <div className="flex relative right-[6px] ">
            {/* linkedin */}
            <Link
              target="_blank"
              className="hover:scale-110 duration-150"
              href={"https://www.linkedin.com/company/netsepio/ "}
            >
              <Image
                src={"/images/linkedIn_green.svg"}
                width={70}
                height={70}
                className="object-cover"
                alt="linkedin"
              />
            </Link>

            {/* twitter */}
            <Link
              target="_blank"
              className="hover:scale-110 duration-150"
              href={"https://x.com/netsepio "}
            >
              <Image
                src={"/images/twitter_green.svg"}
                width={70}
                height={50}
                className="object-cover"
                alt="twitter"
              />
            </Link>
          </div>
        </div>
        <p className="text-cta absolute left-0 -bottom-10 text-sm">
          © 2024 - NetSepio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
