import type { Metadata } from "next";
import { Monoton} from "next/font/google";
import "./globals.css";

const monoton = Monoton({
  variable: "--font-monoton",
  weight: "400"
});



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
        className={`${monoton.variable} ${monoton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
