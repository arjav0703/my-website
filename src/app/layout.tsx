import type { Metadata } from "next";
//import { Monoton} from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home",
  description: "Get to know about Arjav Jain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
