"use client"
import CustomBtn from "@/components/CustomBtn";
import DarkBtn from "@/components/DarkBtn";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const banner = {
        backgroundImage:
          "linear-gradient(to right, #050B21B2, #050B21B2, #B7990D26, #11D9C54D, #B7990D26, #050B21B2, #050B21B2)",
        width: "95vw",
      };
  
  return (
    <>
    <title>Mission | NetSepio</title>
  <main className='flex min-h-screen bg-primary flex-col items-center justify-between p-4 lg:p-8'>
    <section className='w-screen lg:mt-28 mt-20  space-y-8 lg:space-y-[4vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/global.png)] bg-no-repeat lg:h-[724px]'>
      <h2 className='text-2xl text-white font-semibold md:text-4xl lg:text-6xl text-center '>
        Our Mission
      </h2>
      <p className='text-lg lg:text-3xl text-center'>
        Pioneering the Future of DePIN
      </p>
      <p className='text-sm md:text-lg lg:text-2xl w-11/12 md:w-4/5 lg:w-3/5 text-gray-300 rounded-3xl p-4 md:p-6 lg:p-10' 
        style={{ background: 'linear-gradient(to right, #141E4380, #11D9C523)' }}>
        NetSepio is pioneering the future of internet infrastructure through DePIN. We are on a mission to redefine internet access 
        by building a decentralized, user-centric network that prioritizes security, privacy, and accessibility. We empower enterprises 
        and individuals to contribute to a more equitable digital world by sharing their internet resources, while safeguarding their 
        own online presence and privacy. Through the fusion of decentralized VPN and Wi-Fi technologies, we aim to create a resilient, 
        global network that empowers users and challenges the status quo of centralized internet control.
      </p>
    </section>

    <div className='items-center justify-between w-full text-center' style={{ letterSpacing: '0.06em' }}>
      <div
        style={banner}
        className='py-4 md:py-6 text-base md:text-lg lg:text-xl text-gray-300'
      >
        Secure. Private. Accessible. Internet as It Should Be.
      </div>
    </div>

    <div className="my-20">
      <img src="/missionmen.png"/>
      </div>

    <div className="flex flex-col justify-center items-center my-20 lg:my-40 space-y-8">
      <div className='text-lg md:text-xl lg:text-3xl text-center'>Join Our Mission. Join the Future.</div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-20 my-10'>
        <Link
          target="_blank"
          className="hover:scale-110 duration-150 pr-10 pl-6 flex items-center"
          href={"https://discordapp.com/invite/5uaFhNpRF6"}
          style={{ border: '1px solid #11D9C5', borderRadius:'8px' }}
        >
          <img src={"/images/discord_green.svg"} alt="discord" className="w-6 md:w-8 lg:w-10"/>
          <div className="ml-2 mt-1 text-sm md:text-lg lg:text-xl">Discord</div>
        </Link>

        <Link
          target="_blank"
          className="hover:scale-110 duration-150 pr-10 pl-6 flex items-center"
          href={"https://t.me/NetSepio?boost"}
          style={{ border: '1px solid #11D9C5', borderRadius:'8px', gap:'8px' }}
        >
          <img src={"/images/tele_green.svg"} alt="telegram" className="w-6 md:w-8 lg:w-10"/>
          <div className="ml-2 mt-1 text-sm md:text-lg lg:text-xl">Telegram</div>
        </Link>
      </div>
    </div>

  </main>
</>

  );
}
