import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '@/components';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Mettere qui i tuoi metadati */}
      </head>
      <body className={inter.className} style={{ display: "flex", flexDirection: "row" }}>
        <Navbar  />
        <div style={{ marginLeft: "200px", width: "calc(100% - 200px)" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
