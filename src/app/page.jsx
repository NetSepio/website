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
import { cardDetails } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const banner = {
    backgroundImage:
      "radial-gradient(circle, #B7990D59 50%, #050B21B2, #050B21B2)",
    width: "95vw",
  };

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
        <div className='bg-white justify-center gap-[.25%] w-full flex flex-col lg:flex-row flex-wrap'>
          {cardDetails.map((item, index) => {
            return <Card key={index.toString()} item={item} />;
          })}
        </div>
        <Reviews />
        <WinSection />
        <section className='w-full  space-y-[5vh] pt-[7%]  flex flex-col items-center   h-[800px] bg-contain bg-center bg-[url(/images/upcoming.jpg)] bg-repeat'>
          <h2 className='text-primary font-semibold text-4xl md:text-[52px] leading-none tracking-wider  '>
          ÐWifi Revolutionizing Wireless Access
          </h2>
          <p className='text-primary font-medium w-[80%] md:w-[50%] text-xl lg:text-[28px] leading-tight text-center'>
            Share unused bandwidth, turning each participant <br/>into both a
            provider and consumer.
          </p>
          <CustomBtn
            title='Upcoming'
            link='https://sotreus.com/'
            width='w-[140px] bg-[#11D9C5] text-white lg:w-[191px]'
          />
        </section>
        <DownloadNow />
        {/* <Socials /> */}
        <SubscribePage/>
        <Newsletter />
      </main>
    </>
  );
}
