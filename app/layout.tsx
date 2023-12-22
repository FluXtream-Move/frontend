import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FluXtream - streaming crypto",
  description:
      "FluXtream, a platform to send and receive Aptos through streams.",
  // metadataBase: new URL(""),
  // themeColor: "#FFFFFF",
};
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <main className="">
        {children}
      </main>
      <Analytics />
      </body>
      </html>
  )
}
