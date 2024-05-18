import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://netsepio.com"),
  title: "NetSepio",
  description:
    "Protect your online presence with NetSepio, the decentralized cybersecurity platform. Say goodbye to malware and scams with our innovative features, including Web3 archive and DAO-driven governance. Download now for free.",
};

const banner = {
  backgroundImage: 'radial-gradient(circle, #B7990D59 50%, #050B21B2, #050B21B2)',
  width: '180vh',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} w-full  bg-primary flex flex-col`}>
      <main className="flex flex-col items-center justify-between">
      <Link href="/nodeform">
                    <div style={banner} className="py-4 text-gray-300 text-center">Become a Node Runner and Earn Triple Rewards,&nbsp;
                    <span className='text-bold'
                    style={{ border: "none", textDecoration: "none", position: "relative" , color:'#11D9C5'}}>
                    Join waitlist
                    &nbsp;&#10138;
                    </span> 
                    </div>
                    </Link>
                    </main>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
