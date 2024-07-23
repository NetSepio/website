"use client"
import Card from "@/components/Card";
import CustomBtn from "@/components/CustomBtn";
import DownloadNow from "@/components/DownloadNow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Socials from "@/components/Socials";
import SubscribePage from "@/components/Subcribe";
import WinSection from "@/components/WinSection";
import WinnersPage from "@/components/winners"
import { cardDetails } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const banner = {
    backgroundImage:
      "radial-gradient(circle, #B7990D59 50%, #050B21B2, #050B21B2)",
    width: "95vw",
  };

  const gradientBackground = `
    linear-gradient(
      to bottom, 
      #DD4D76 0%, 
      #8A277D 10%, 
      #761E7F 20%, 
      #611480 30%, 
      #380184 40%, 
      #B969FF 50%, 
      #669CFF 60%, 
      #5DFF39 70%, 
      #E0F7A3 80%, 
      #11D9C5 90%
    )
  `;

  const greengradient = `
    linear-gradient(
      to bottom, 
      #E7E7EA 50%, 
      #11D9C5 100%
    )
  `;

  return (
    <>
      <main className='flex flex-col  items-center justify-between'>
        <Link href='/nodeform'>
          <div
            style={banner}
            className='py-3 text-xs  md:text-base  text-gray-300 text-center'
          >
            Become a Node Runner and Earn Triple Rewards,&nbsp;
            <span
              className='text-bold'
              style={{
                border: "none",
                textDecoration: "none",
                position: "relative",
                color: "#11D9C5",
              }}
            >
              Join waitlist &nbsp;&#10138;
            </span>
          </div>
        </Link>
      </main>
      <main className='flex min-h-screen bg-primary flex-col items-center justify-between'>
        <Hero />
        <Mission />
        <div className='justify-center gap-[0.5%] w-full flex flex-col lg:flex-row flex-wrap p-1' style={{
        background: gradientBackground,
      }}>
          {cardDetails.map((item, index) => {
            return <Card key={index.toString()} item={item} />;
          })}
        </div>
        <Reviews />
        <WinSection />
        <section className="w-full h-[600px] flex items-center justify-center my-auto"
        style={{
          background: greengradient,
        }}
>
          <div className="flex flex-col items-center space-y-[5vh] justify-center mx-auto">
            <h2 className="text-primary font-semibold text-4xl md:text-[52px] leading-none tracking-wider">
              ÐWifi Revolutionizing Wireless Access
            </h2>
            <p className="text-primary text-2xl leading-tight text-center">
              Share unused bandwidth, turning each participant
              <br />
              into both a provider and consumer.
            </p>
            <CustomBtn
              title="Coming Soon"
              link="https://sotreus.com/"
              width="w-[140px] bg-[#040A2080] text-white lg:w-[191px]"
              disabled
            />
          </div>
        </section>

        <WinnersPage/>
        <DownloadNow />
        {/* <Socials /> */}
        {/* <SubscribePage/> */}
        <Newsletter />
      </main>
    </>
  );
}
