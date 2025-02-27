import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google"
import Navbar from "../app/components"
import "./globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Aloysius Chia",
  description: "Generated in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
