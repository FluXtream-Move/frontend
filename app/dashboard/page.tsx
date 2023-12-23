"use client"
// Import necessary libraries and icons
import React, { ReactNode } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useState, useEffect } from 'react';
import GetData from '../../components/getdata';
import Link from 'next/link';

function Dashboard() {
  const { account } = useWallet();
  const fetchData = GetData({
    functionName: "0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100::test19::getListOfRecieveStreams",
    functionArguments: ["0xcfb4348624dc4c16cbdac455e7302e7b2a7b9f7402627405df0842a04c467100"]
  });

  const [data, setData] = useState<{
    flow_rate: string;
    receiver: string;
    end_time: string;
  }[]>([]);

  useEffect(() => {
    const fetchDataAndPrint = async () => {
      if (!account) return;

      const result = await fetchData();
      console.log("Data from fetchData:", result);
      if (Array.isArray(result) && result.length > 0 && Array.isArray(result[0])) {
        setData(result[0]);
      }
      console.log("Data from state:", data);
    };

    fetchDataAndPrint(); // Call the function
  }, [account]);

  return (
    <>
          <h2 className="text-2xl font-bold mb-4">Flux Tokens</h2>
    <div className="mx-auto max-w-[1100px] p-4 bg-white text-gray-700 shadow-md border border-gray-300 rounded-lg overflow-x-auto transition-none">
      
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Asset
            </th>
            <th scope="col" className="px-6 py-3">
              End Time
            </th>
            <th scope="col" className="px-6 py-3">
              Net Flow
            </th>
            <th scope="col" className="px-6 py-3">
              Receiver Address
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Aptos
              </th>
              <td className="px-6 py-4">{item.end_time}</td>
              <td className="px-6 py-4">{item.flow_rate}</td>
              <td className="px-6 py-4">{item.receiver}</td>
              <td className="px-6 py-4 text-right">
                <div className="font-medium text-blue-600 dark:text-blue-500 hover:focus">Stop</div>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Dashboard;
