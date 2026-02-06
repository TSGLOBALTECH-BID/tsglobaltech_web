import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LoadingProvider from "./components/LoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechVision - IT Solutions & Digital Transformation",
  description: "Leading IT solutions provider offering web development, mobile apps, cloud services, and AI solutions for digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-dark-950 text-dark-100`}
      >
        <LoadingProvider>
          <div className="min-h-screen">
            {/* Navigation */}
            <Navigation />
            <main className="">
              {children}
            </main>
            {/* Footer */}
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
