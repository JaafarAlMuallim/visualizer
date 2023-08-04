import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/store/Provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visualizer",
  description:
    "Visualize Data Structures and Sorting Algorithms and Operations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <Navbar />
        <main className="grid grid-rows-[repeat(10,_1fr) bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 h-screen">
          <Provider>{children}</Provider>
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
