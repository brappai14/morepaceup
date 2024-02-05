// app/layout.tsx
import "@aws-amplify/ui-react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <span className="flex justify-between">
          <span className="w-1/6 h-screen"></span>
          <span className="w-2/3">{children}</span>
          <span className="w-1/6 h-screen"></span>
        </span>
      </body>
    </html>
  );
}