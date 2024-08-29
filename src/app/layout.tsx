import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halil Toksöz - Portfolio",
  description: "Explore my projects and experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-br from-[#330066] via-black to-[#00004d] text-white"
        }
      >
        <main>
          <Navbar />
          <span className="block h-10" />
          <div className="min-h-screen px-6 md:px-20">{children}</div>
        </main>
      </body>
    </html>
  );
}
