import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natãn Schneider",
  description: "Full stack software developer",
};

const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={ inter.className } >
        {children}
      </body>
    </html>
  );
}
