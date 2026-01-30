import {
  Amatic_SC,
  Rosario,
  Arsenal,
  Open_Sans,
} from "next/font/google";

export const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
  display: "swap",
});

export const rosario = Rosario({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rosario",
  display: "swap",
});

export const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arsenal",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
