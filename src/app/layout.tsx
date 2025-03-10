import type { Metadata } from "next";
//import { Monoton} from "next/font/google";
import "./globals.css";


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
      >
        {children}
      </body>
    </html>
  );
}
