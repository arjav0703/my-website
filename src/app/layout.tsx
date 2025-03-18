import type { Metadata } from "next";
//import { Monoton} from "next/font/google";
import "./globals.css";
import MyNav from "./components/nav";
import MyFooter from "./components/footer";


export const metadata: Metadata = {
  title: "Arjav Jain",
  description: "Arjav is a 14 year old from Vidisha. He is a photographer, ethical hacker, and coder.",
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
      <body 
      className="bg-gruv-bg text-gruv-text selection:bg-gruv-selection w-full"
      >
      <MyNav/>
        {children}
        <MyFooter/>
      </body>

    </html>
  );
}
