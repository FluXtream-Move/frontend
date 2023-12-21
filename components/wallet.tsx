"use client";
import { useState } from "react";
import { Icon } from '@iconify/react';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";


import {
  useWallet,
  WalletReadyState,
  Wallet,
  isRedirectable,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
import { cn } from "@/utils/styling";
import Popup from 'reactjs-popup';
import Petra from "../public/petra.svg"
import Image from "next/image";
const buttonStyles = "nes-btn is-primary";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from "next/link";


export const WalletButtons = () => {
    
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const { wallets, connected, disconnect, isLoading, account, network } = useWallet();
  const accountAddress = account?.address;
  const accountNetwork = network?.name;
  const networkIcon = wallets?.[0]?.icon;
  if (connected) {
    return (
      <>
      <Popover 
      showArrow
      backdrop="opaque"
      placement="right"
      classNames={{
        base: [  
          // arrow color
          "before:bg-default-200"
        ],
        content: [
          "py-3 px-4 border border-default-200",
          "bg-gradient-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
    >
        <PopoverTrigger>
        <button className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500"> 
        {<img src="https://cryptologos.cc/logos/aptos-apt-logo.svg?v=029" className="w-4 h-4 me-2" />}
            {accountAddress?.slice(0, 6)}...{accountAddress?.slice(-4)}
        </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Wallet Connected</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{accountAddress?.slice(0, 6)}...{accountAddress?.slice(-4)}</p>   
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <CopyToClipboard text={accountAddress ?? ""}>
            <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Copy Address</div>
            </div>
            <span className="ml-2 -mr-1">
            <Icon icon="lucide:copy" width="15" height="15" />
            </span>
            </button>
            </CopyToClipboard>
            <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={disconnect}>
                
                Disconnect
                <span className="ml-2 -mr-1">
                <Icon icon="lucide:x-circle" width="15" height="15" />
                </span>
            </button>
            </div>
          </div>
          </PopoverContent>
        </Popover>
      </>
    );
  }
  if (isLoading || !wallets || wallets.length === 0) {
    return (
        <div className={cn(buttonStyles, "opacity-50 cursor-not-allowed")}>
        {isLoading ? "Loading..." : "No wallets available"}
      </div>
    );
  }

  return <WalletView wallet={wallets[0]} />;
};

const WalletView = ({ wallet }: { wallet: Wallet }) => {
  const { connect } = useWallet();
  const isWalletReady =
    wallet.readyState === WalletReadyState.Installed ||
    wallet.readyState === WalletReadyState.Loadable;
  const mobileSupport = wallet.deeplinkProvider;

  const onWalletConnectRequest = async (walletName: WalletName) => {
    try {
      await connect(walletName);
    } catch (error) {
      console.warn(error);
      window.alert("Failed to connect wallet");
    }
  };

  if (!isWalletReady && isRedirectable()) {
    // wallet has mobile app
    if (mobileSupport) {
      return (
        <button
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
          disabled={false}
          key={wallet.name}
          onClick={() => onWalletConnectRequest(wallet.name)}
          style={{ maxWidth: "300px" }}
        >
          Connect Wallet
        </button>
      );
    }
    // wallet does not have mobile app
    return (
      <button
        className='text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2'
        disabled={true}
        key={wallet.name}
        style={{ maxWidth: "300px" }}
      >
        Connect Wallet - Desktop Only
      </button>
    );
  } else {
    // desktop
    return (
      <button
        className='text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2'
        disabled={!isWalletReady}
        key={wallet.name}
        onClick={() => onWalletConnectRequest(wallet.name)}
        style={{ maxWidth: "300px" }}
      >
        
        Connect Wallet
      </button>
    );
  }
};