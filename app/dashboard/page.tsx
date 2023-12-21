"use client";
import React from 'react'
import { Icon } from '@iconify/react';


function page() {
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Asset
                </th>
                <th scope="col" className="px-6 py-3">
                Balance
                </th>
                <th scope="col" className="px-6 py-3">
                Net Flow
                </th>
                <th scope="col" className="px-6 py-3">
                Inflow/Outflow
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Aptos
                </th>
                <td className="px-6 py-4">
                    10.02
                </td>
                <td className="px-6 py-4">
                    +1.02/mo
                </td>
                <td className="px-6 py-4">
                    +1.02/mo
                </td>
                <td className="px-6 py-4 text-right">
                <div className="font-medium text-blue-600 dark:text-blue-500 hover:focus">
                    Stop
                </div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Aptos
                </th>
                <td className="px-6 py-4">
                    8.02
                </td>
                <td className="px-6 py-4">
                    -0.02/mo
                </td>
                <td className="px-6 py-4">
                    -0.2/mo
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default page