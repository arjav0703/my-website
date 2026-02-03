import type { Metadata } from "next";
//import { Monoton} from "next/font/google";
import "./globals.css";
import MyNav from "./components/nav";
import MyFooter from "./components/footer";
// script.js
import "nes.css/css/nes.min.css";
import RenderCharacter from "./components/Character";

export const metadata: Metadata = {
  title: "Arjav Jain",
  description: "Welcome to the world of Arjav.",
  colorScheme: "light",
  creator: "Arjav Jain",
  publisher: "Arjav Jain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="DmGaAr_g-Oz3oVV_qdBmIaeevtKAPJKavrsTDD2KxsE"
        />
        <link
          rel="stylesheet"
          href="./node_modules/nes.css/css/nes.min.css"
        ></link>
      </head>
      <body className="w-full">
        <MyNav />
        {children}
        <MyFooter />
        <RenderCharacter />
      </body>
    </html>
  );
}
