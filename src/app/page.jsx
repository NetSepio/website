import Card from "@/components/Card";
import DownloadNow from "@/components/DownloadNow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Socials from "@/components/Socials";
import WinSection from "@/components/WinSection";
import { cardDetails } from "@/utils/data";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const banner = {
    backgroundImage: 'radial-gradient(circle, #B7990D59 50%, #050B21B2, #050B21B2)',
    width: '180vh',
  };

  return (
    <>
    <main className="flex flex-col items-center justify-between">
      <Link href="/nodeform">
                    <div style={banner} className="py-3 text-gray-300 text-center">Become a Node Runner and Earn Triple Rewards,&nbsp;
                    <span className='text-bold'
                    style={{ border: "none", textDecoration: "none", position: "relative" , color:'#11D9C5'}}>
                    Join waitlist
                    &nbsp;&#10138;
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
      <DownloadNow />
      <Socials />
      <Newsletter />
    </main>
    </>
  );
}
