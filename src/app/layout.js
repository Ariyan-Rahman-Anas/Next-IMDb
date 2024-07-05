import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb-clone",
  description: "This is a movie freak website create by Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-gray-400 `}>
        <Header></Header>
        {children}</body>
      <Footer />
    </html>
  );
}