import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const galgo = localFont({
  src: "../../public/fonts/galgo/Galgo.ttf",
  display: "swap",
  variable: "--font-galgo",
});

const roboto = Roboto({
  subsets: ["greek", "greek-ext", "cyrillic"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://netsepio.com"),
  title: "NetSepio",
  description:
    "Protect your online presence with NetSepio, the decentralized cybersecurity platform. Say goodbye to malware and scams with our innovative features, including Web3 archive and DAO-driven governance. Download now for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} ${galgo.variable} w-full  bg-primary flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
