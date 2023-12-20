import React from 'react'

function page() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
    <div className="flex flex-col space-y-4">
    <div className="flex flex-col">
      <div className="relative">
        <button className="bg-purple-400 text-gray-700 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" role="button" aria-expanded="false" aria-haspopup="listbox">APTOS</button>
        <input className="bg-purple-600 text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500" aria-invalid="false" aria-hidden="true" tabindex="-1" value="" />
      </div>
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-700" tabIndex={0} type="button" aria-label="Switch currencies"><span>⇄</span></button>
    </div>
    <hr className="border-gray-300" />
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <div className="relative">
          <button className="bg-purple-400 text-gray-700 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" role="button" aria-expanded="false" aria-haspopup="listbox">APTOSx</button>
          <input className="bg-purple-600 text-gray-700 py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500" aria-invalid="false" aria-hidden="true" tabIndex={-1} value="" />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-gray-700 text-sm">Last Update: 2023-12-19</span>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default page