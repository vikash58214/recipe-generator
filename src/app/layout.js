import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlavorForge – AI-Powered Recipe Generator",
  description:
    "FlavorForge – Your AI-Powered Recipe Generator FlavorForge is a smart recipe generator that helps you cook delicious meals using the ingredients you already have at home. Simply enter the ingredients in your kitchen, and our AI instantly creates personalized, step-by-step recipes — saving you time, reducing food waste, and making cooking more fun.Whether you're a beginner or a home chef, FlavorForge inspires creativity in the kitchen by turning everyday items into flavorful dishes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
