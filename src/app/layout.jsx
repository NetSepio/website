import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NetSepio",
  description: "Protect your online presence with NetSepio, the decentralized cybersecurity platform. Say goodbye to malware and scams with our innovative features, including Web3 archive and DAO-driven governance. Download now for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
