// Import necessary libraries and icons
"use client";
import Image from 'next/image';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Import the necessary functions from date-fns
import { format, addMinutes, addHours } from 'date-fns';
import {
    useWallet,
    WalletReadyState,
    Wallet,
    isRedirectable,
    WalletName,
  } from "@aptos-labs/wallet-adapter-react";

function Page() {
  // Find the element where you want to display the start date

// Get the current date and time
  const currentDate = new Date();
  const endDate = addHours(currentDate, 1);
  // Format the date to match your desired format (e.g., "dd MMM. yyyy hh:mm")
  const formattedDate = format(currentDate, "dd MMM. yyyy HH:mm");
  const formattedEndDate = format(endDate, "dd MMM. yyyy HH:mm");
    const { wallets, connected, disconnect, isLoading, account, network } = useWallet();
    const accountAddress = account?.address;
    const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 0.001);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <>
    <div className="container mx-auto p-4 max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="box-border">
        <Link href="/">
          <button className="text-gray-700">
            
            <Icon icon="lucide:arrow-left" width="20" height="20" />
          </button>
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-8 items-center">
          <span aria-label="Cancel stream" className="box-border">
          <Link href="/">
            <button className="text-gray-700">
              <Icon icon="lucide:x" width="20" height="20" />
            </button>
            </Link>
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 mb-10"
      >
        {/* Total Amount Streamed Section */}
        <div className="flex flex-col items-center gap-8 mb-10">
          <h5 translate="yes" className="text-2xl font-bold">
            Total Amount Streamed
          </h5>
          <div className="flex flex-row items-center gap-6">
            <div className="relative p-1 bg-white rounded-full">
              <div className="">
                <Image src="/aptos-apt-logo.svg" alt="APTOSx token icon" width={25} height={25} />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-2xl font-semibold">{number}</span>
              <h3 className="m-0 text-xl font-semibold font-walsheim text-blue-500">APTOSx</h3>
            </div>
          </div>
          <Link href="/payment-done">
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Stop Stream
        </button>
        </Link>
        </div>
        
      </motion.div>

      {/* Sender and Receiver Section */}
      <div className="container px-4 mx-auto bg-gray-100 flex justify-between items-center">
        {/* Sender */}
        <div className="flex flex-col gap-4 p-4 w-1/2">
          <h6 className="text-sm font-medium text-gray-600">Sender</h6>
          <div className="flex gap-4 items-center">
            <div>
              <Icon icon="lucide:send" width="22" height="22" />
              {/* SVG for Sender */}
            </div>
            <div className="flex-1 min-w-0">
              <h6 className="text-sm font-medium text-right text-gray-800 truncate">0x4a8f...cc67</h6>
              <p className=""></p>
            </div>
            <div className="flex items-center gap-2">
            
              <button className="p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Icon icon="lucide:copy" width="20" height="20" />
              </button>
              <Link href="https://explorer.aptoslabs.com/txn/193990?network=devnet">
              <button className="p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Icon icon="lucide:external-link" width="20" height="20" />
              </button>
              </Link>
              
            </div>
          </div>
        </div>

        {/* GIF in between */}
        <div className="flex justify-center my-4 w-1/6">
          <Image src="/stream.gif" alt="Superfluid stream" height={15} width={150} />
        </div>

        {/* Receiver */}
        <div className="flex flex-col gap-4 p-4 w-1/2">
          <h6 className="text-sm font-medium text-gray-600">Receiver</h6>
          <div className="flex gap-4 items-center">
            <div>
              <Icon icon="lucide:antenna" width="22" height="22" />
              {/* SVG for Receiver */}
            </div>
            <div className="flex-1 min-w-0">
              <h6 className="text-sm font-medium text-left text-gray-800 truncate">0xcfb4...7100</h6>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Icon icon="lucide:copy" width="20" height="20" />
              </button>
              <Link href="https://explorer.aptoslabs.com/txn/193990?network=devnet">
              <button className="p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                <Icon icon="lucide:external-link" width="20" height="20" />
              </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* Flowrate per Month Section */}
      <div className='flex flex-col items-center gap-4 my-2'>
        <div className='flex items-center gap-4 p-4'>
          <h6 className='text-lg font-semibold -m-2'>0.001 APTOSx</h6>
          <span className="text-sm text-gray-500">per sec</span>
        </div>
        
      </div>

      {/* Parameter Section */}
      <div className="px-2">
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-4'>
            <div className="flex items-center gap-2 p-2">
              <p className="text-sm font-medium text-gray-600">
                Start Date:
              </p>
              <h6 className='text-sm font-medium'>{formattedDate}</h6>
            </div>
            <div className='flex items-center gap-2 p-2'>
              <p className="text-sm font-medium text-gray-600">
                Buffer:
              </p>
              <h6 className="text-sm font-medium">3.61 APTOSx</h6>
            </div>
            <div className='flex items-center gap-2 p-2'>
              <p className="text-sm font-medium text-gray-600">
                End Date:{formattedEndDate}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 p-2'>
              <p className="text-sm font-medium text-gray-600">
                Network Name:
              </p>
              <div>
                {/* <div data-cy="80001-icon" className="text-green-500 font-bold text-base">
                  A
                </div> */}
                <h6 className="text-sm font-medium">Aptos Devnet</h6>
              </div>
            </div>
            <div className='flex items-center gap-2 p-2'>
              <p className="text-sm font-medium text-gray-600">
                Projected Liquidation:
              </p>
              <h6 >{formattedEndDate}</h6>
            </div>
            <div className='flex items-center gap-2 p-2'>
              <p className="text-sm font-medium text-gray-600">
                Transaction Hash:
              </p>
              <div className="flex items-center gap-2 p-0">
                <span>0x51fa...9881</span>
                <Icon icon="lucide:files" width="14" height="14" />
                <Icon icon="lucide:scan-search" width="14" height="14" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <hr className="my-6 border-t border-gray-300" />
      <div className="flex items-center gap-4">
        <h5 translate="yes" className="text-xl font-bold">
          Share:
        </h5>
        <button tabIndex={0} type="button" data-cy="copy-button" className="w-8 h-8 p-1 bg-gray-200 rounded-md">
          <Icon icon="lucide:copy" width="20" height="20" />
          {/* Copy Icon */}
        </button>
        <Link href="https://twitter.com/home" target="_blank">
        <div>
          <img src="/twitter.svg" alt="Twitter logo" className="w-8 h-8" />
        </div>
        </Link>
        <Link href="https://t.me/+WMqv8bvhNZk5NGY1" target="_blank">
        <div>
          <img src="/telegram.svg" alt="Telegram logo" className="w-8 h-8" />
        </div>
        </Link>
      </div>
      
    </div>
    </>
  );
}

export default Page;
