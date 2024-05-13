import { Roboto, Inter } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
const inter = Inter({ subsets: ["latin"] });

const useFonts = () => {
  return { roboto, inter };
};

export default useFonts;
