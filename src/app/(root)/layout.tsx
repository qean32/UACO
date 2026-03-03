import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/shared";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-lg`}>
        <div className="fixed bottom-0 right-0 z-50 flex gap-4">
          <Link href='/'><p>главная</p></Link>
          <Link href='/profile'><p>профиль</p></Link>
          <Link href='/admin'><p>admin</p></Link>
          <Link href='/auth'><p>auth</p></Link>
        </div>

        <main className="min-h-[100vh] flex flex-col bg-gray-100 text-black">
          <Header />
          {children}
        </main>

      </body>
    </html>
  );
}
