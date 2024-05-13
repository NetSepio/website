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

export default function Home() {
  return (
    <main className='flex min-h-screen bg-primary flex-col items-center justify-between'>
      <Hero />
      <Mission />
      <div className='bg-white justify-center gap-[.25%] w-full flex flex-wrap'>
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
  );
}
