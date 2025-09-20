import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halil Toksöz - Senior Backend Developer",
  description:
    "Senior Backend Developer & Staff Computer Engineer with 6+ years of experience in the industry. Skilled in .NET, Laravel, Nest.js (Node.js), Next.js and Flutter. Passionate about building scalable and efficient systems using best practices, performance optimizations, Design Patterns and Principles, Data Structus and Algorithms. Let's work together to build something amazing!",
  icons: {
    icon: "/favicon.ico",
  },
  abstract:
    "Senior Backend Developer & Staff Computer Engineer with 6+ years of experience in the industry. Skilled in .NET, Laravel, Nest.js (Node.js), Next.js and Flutter. Passionate about building scalable and efficient systems using best practices, performance optimizations, Design Patterns and Principles, Data Structus and Algorithms. Let's work together to build something amazing!",
  authors: [{ name: "Halil Toksöz", url: "haliltoksoz.com" }],
  creator: "Halil Toksöz",
  publisher: "Halil Toksöz",
  keywords: [
    "Halil Toksöz",
    "Senior Backend Developer",
    "Staff Computer Engineer",
    ".NET Developer",
    "Laravel Developer",
    "Nest.js Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Backend Developer",
    "Computer Engineer",
    "Software Engineer",
    "Software Developer",
    "Software Architect",
    "Tech Lead",
    "Backend Tech Lead",
    "Technical Lead",
    "Chronoplan",
    "Chronoplan App",
    "Senior Software Engineer",
    "Senior Software Developer",
    "Senior Software Architect",
    "Senior Tech Lead",
    "Senior Technical Lead",
    "Senior Backend Developer",
    "Senior Staff Computer Engineer",
    "Senior Staff Computer Engineer",
    "Software Architecture",
    "Software Engineering",
    "Software Development",
    "Software Development Engineer",
    "Software Development Manager",
    "Turkey Software Developer",
    "Turkey Software Development",
    "Turkey Software Engineer",
    "Turkey Software Architect",
    "Turkey Software Development Engineer",
    "Turkey Software Development Manager",
    "Turkey Software Development Company",
    "İzmir Software Developer",
    "İzmir Software Development",
    "İzmir Software Engineer",
    "İzmir Software Architect",
    "İzmir Software Development Engineer",
    "İzmir Software Development Manager",
    "İzmir Software Development Company",
  ],
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
