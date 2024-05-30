import { Roboto, Inter, Noto_Sans_Glagolitic as Galgo } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
const galgo = Galgo({
  subsets: ["glagolitic"],
  weight: ["400"],
});
const inter = Inter({ subsets: ["latin"] });

const useFonts = () => {
  return { roboto, inter, galgo };
};

export default useFonts;
