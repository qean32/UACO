import type { Metadata } from "next";
import "./globals.css";
import "./style/app.css";
import Link from "next/link";
import { Root } from "@/component/master";
import 'react-loading-skeleton/dist/skeleton.css'
import { Toaster } from "@/component/ui";


export const metadata: Metadata = {
  title: "Ульяновский авиационный колледж - просмотр",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      </head>
      <Root>

        <body className={`antialiased text-lg`}>
          <Toaster />
          <div className="fixed bottom-0 right-0 z-50 flex gap-4 text-sm p-5">
            <Link href='/'><p>главная</p></Link>
            <Link href='/profile/5'><p>профиль</p></Link>
            <Link href='/admin'><p>admin</p></Link>
            <Link href='/supervisor'><p>supervisor</p></Link>
            <Link href='/auth'><p>auth</p></Link>
          </div>

          <main className="min-h-[100vh] flex flex-col bg-gray-50">
            {children}
          </main>

        </body>
      </Root>
    </html>
  );
}
