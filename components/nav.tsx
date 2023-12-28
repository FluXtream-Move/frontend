"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/hooks/use-scroll";

export default function Nav() {
    const scrolled = useScroll(50);

    return (
        <>
            <div
                className={`fixed top-0 w-full flex justify-center ${
                    scrolled
                        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:bg-black/20"
                        : "bg-white/0"
                } z-30 transition-all`}
            >
                <div className="mx-10 flex h-16 max-w-screen-xl items-center justify-between w-full">
                    <Link href="/" className="flex items-center font-display text-2xl">
                        <Image
                            src="/FluXtream_logo_bw_big.png"
                            alt="Precedent logo"
                            width="60"
                            height="30"
                            className="w-auto h-auto dark:invert"
                        ></Image>
                    </Link>
                    <div>
                        <Link href="/">
                            <button
                                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all
                                hover:bg-white hover:text-black dark:bg-white dark:border-white dark:text-black
                                dark:hover:bg-black dark:hover:text-white"
                            >
                                   Open App
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
