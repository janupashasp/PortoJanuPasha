import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Background from "./components/background"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // normal & bold
})
const inter = Inter({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janu Pasha Portfolio",
  description: "portfolio of janu pasha, a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative`}
      >

        <Navbar />
        <Background />
        {children}
      </body>
    </html>
  );
}
