"use client"
import { parse } from 'path';
import React from 'react'
import { useState } from 'react';
import {
    useWallet,
  } from "@aptos-labs/wallet-adapter-react";
const Page = () => {
    const { wallets, connected, disconnect, isLoading, account, network } = useWallet();
  const accountAddress = account?.address;
    const [receiver, setReceiver] = useState('');
    const [token, setToken] = useState('Aptos');
    const [flow, setFlow] = useState('');
    const [duration , setDuration] = useState('');
    const handleStream = () => {
        // Parse flow and duration as u64
       let parsedFlow = parseFloat(flow);
       parsedFlow=parsedFlow*1000;
       const parsedDuration = parseInt(duration, 10);
       const functionArguments=[account?.address,parsedFlow,parsedDuration];
       console.log('Function Arguments:', functionArguments);
     }
    return (
    
        <div className='flex items-center justify-center min-h-screen'>
          
          <div className=" text-black shadow-lg  rounded-xl  overflow-hidden p-7 max-w-md w-full relative">
            <button className="inline-flex  items-center justify-center box-border border-0 m-0 cursor-pointer select-none align-top appearance-none text-blue-600 bg-blue-100 rounded-lg transition-all duration-300 ease-in-out p-2 mr-2 mb-8 self-start pointer-events-none">Request Stream</button>
            <div className="absolute top-0 right-7">
              <div className="bg-blue-600 rounded-bl-lg h-8 w-8 flex items-center justify-center shadow-md">
                <div className="text-xl font-bold text-gray-900">A</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
            
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="ml-2 mb-1 font-medium" htmlFor="token">Flux Token</label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="token">
                      <option className='bg-white'>Aptos</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="ml-2 mb-1 font-medium" htmlFor="flow">Flow Rate (Apt/s)</label>
                  <input
                className="shadow border rounded py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline"
                id="flow"
                type="number"
                placeholder="0.00"
                value={flow}
                onChange={(e) => setFlow(e.target.value)}
              />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="ml-2 mb:w-1/2 font-medium" htmlFor="receiver">Duration</label>
                <input
                className="shadow border rounded py-2 px-3 text-gray-900 focus:outline-none focus:shadow-outline"
                id="duration"
                type="text"
                placeholder="Duration in Seconds"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              </div>
              <div className="flex items-center justify-end">
                <div className="text-gray-700 text-lg font-bold mr-2">/ second</div>
              </div>
              <div className="flex items-center justify-center mt-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleStream} >Request payment</button>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Page;