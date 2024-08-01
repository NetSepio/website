"use client"
import CustomBtn from "@/components/CustomBtn";
import DarkBtn from "@/components/DarkBtn";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const banner = {
        backgroundImage:
          "linear-gradient(to right, #050B21B2, #050B21B2, #B7990D26, #11D9C54D, #B7990D26, #050B21B2, #050B21B2)",
          // "linear-gradient(to right, #050B214D 30%, #322F1C43 26.25%, #5E521739 22.5%, #11D9C54D 30%, #B7990D26 15%, #050B214D 30%)",
        width: "95vw",
      };
  
  return (
    <>
      <main className='flex min-h-screen bg-primary flex-col items-center justify-between'>
      <section className='w-[100%] mt-[8%] space-y-[5vh] lg:pace-y-[10vh] flex flex-col items-center justify-center h-[542px] bg-cover bg-[url(/global.png)] bg-no-repeat lg:h-[724px]'>
        <h2 className='text-2xl text-white font-semibold md:text-6xl  '>
        Our Mission
        </h2>
        <p className='text-lg lg:text-3xl'>
        Pioneering the Future of DePIN
        </p>
        <p className='text-lg lg:text-2xl w-3/5 text-gray-300 rounded-3xl p-10' 
        style={{  background: 'linear-gradient(to right, #141E4380, #11D9C523)',}}>
        NetSepio is pioneering the future of internet infrastructure through DePIN. We are on a mission to redefine internet access 
        by building a decentralized, user-centric network that prioritizes security, privacy, and accessibility. We empower enterprises 
        and individuals to contribute to a more equitable digital world by sharing their internet resources, while safeguarding their 
        own online presence and privacy. Through the fusion of decentralized VPN and Wi-Fi technologies, we aim to create a resilient, 
        global network that empowers users and challenges the status quo of centralized internet control.
        </p>
      </section>

    <div className='items-center justify-between' style={{ letterSpacing: '0.06em' }}>
          <div
            style={banner}
            className='py-6 lg:text-xl md:text-xl text-lg text-gray-300 text-center'
          >
            Secure. Private. Accessible. Internet as It Should Be.
          </div>
        </div>
      
      <div className="my-20">
      <img src="/missionmen.png"/>
      </div>

      <div className="flex flex-col justify-center items-center my-40">
        <div className='text-lg lg:text-3xl'>Join Our Mission. Join the Future.</div>
        <div className='flex gap-20 my-20'>
        <Link
              target="_blank"
              className="hover:scale-110 duration-150 pr-10 pl-6"
              href={"https://discordapp.com/invite/5uaFhNpRF6"}
              style={{border: '1px solid #11D9C5', display: 'flex', borderRadius:'8px'}}
            >
              <img
                src={"/images/discord_green.svg"}
                alt="discord"
              />
              <div className="mt-4">Discord</div>
            </Link>

            <Link
              target="_blank"
              className="hover:scale-110 duration-150 pr-10 pl-8"
              href={"https://t.me/NetSepio?boost "}
              style={{border: '1px solid #11D9C5', display: 'flex', borderRadius:'8px', gap:'8px'}}
            >
              <img
                src={"/images/tele_green.svg"}
                alt="telegram"
                className="w-10"
              />
              <div className="mt-4">Telegram</div>
            </Link>
        </div>
      </div>

      </main>
    </>
  );
}
