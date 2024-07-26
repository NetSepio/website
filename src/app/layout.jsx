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
    "Securing and decentralizing the internet layer with Cybersecurity and powered by DePIN technology.",
    openGraph: {
      type: 'website',
      url: 'https://netsepio.com',
      title: 'NetSepio',
      description: 'Securing and decentralizing the internet layer with Cybersecurity and powered by DePIN technology.',
      images: [
        {
          url: '/metaimg.png',
          width: 1200,
          height: 630,
          alt: 'NetSepio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@NetSepio',
      title: 'NetSepio',
      description: 'Securing and decentralizing the internet layer with Cybersecurity and powered by DePIN technology.',
      images: [
        {
          url: '/metaimg.png',
          width: 1200,
          height: 630,
          alt: 'NetSepio',
        },
      ],
    },
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
