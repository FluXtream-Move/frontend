import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { WalletProvider } from "@/context/WalletProvider";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/header'
import HeaderMobile from '@/components/header-mobile'
import MarginWidthWrapper from '@/components/margin-width-wrapper'
import PageWrapper from '@/components/page-wrapper'
import SideNav from '@/components/side-nav'

export const metadata: Metadata = {
    title: 'FluXtream',
    description: 'Asset Streaming Protocol',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`bg-white ${inter.className}`}>
            <div>
            <div className="flex">
                <WalletProvider>
                    <SideNav />
                    <main className="flex-1">
                        <MarginWidthWrapper>

                            <Header />
                            <HeaderMobile />
                            <PageWrapper>{children}</PageWrapper>

                        </MarginWidthWrapper>
                    </main>
                </WalletProvider>
            </div>
            </div>
        </body>
        </html>
    );
}