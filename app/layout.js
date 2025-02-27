import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../style/main.scss";
import NavBar from "@/components/NavBar";

const RobotoCondensed = localFont({
  src: [
    {
      path: "../fonts/RobotoCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/RobotoCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/RobotoCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--roboto-condensed",
  display: "swap",
});

const HelveticaNeue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--helvetica-neue",
  display: "swap",
});

const HelveticaNeueCyr = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeueCyr-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueCyr-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--helvetica-neue-cyr",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jde",
  description: "JDE",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body
        className={`${geistSans.variable} ${RobotoCondensed.variable} ${HelveticaNeue.variable} ${HelveticaNeueCyr.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
