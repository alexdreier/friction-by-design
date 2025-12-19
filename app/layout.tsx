import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PresenterProvider } from "@/components/presenter-provider";
import { Header } from "@/components/header";
import { PresenterControls } from "@/components/presenter-controls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Friction by Design | AI in Learning Framework",
  description: "A framework for centering learning in the age of AI. Explore scenarios and design intentional learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <PresenterProvider>
          <Header />
          <main>{children}</main>
          <PresenterControls />
        </PresenterProvider>
      </body>
    </html>
  );
}
