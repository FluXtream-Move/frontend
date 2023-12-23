"use client"

import Image from "next/image";
import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function PaymentDone() {
    const router = useRouter();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            router.push ('/dashboard/single');
        }, 3000);
        return () => clearTimeout(redirectTimeout);
    }, []);

    return(
        <div className="relative h-full">
            <div className="flex flex-col justify-center items-center ">
                <Image src="/successful.gif" alt='Payment done' height={15} width={150} className="m-6"/>
                <h1 className="text-3xl p-6">Stream stopped successfully.</h1>
            </div>
        </div>
    )
}