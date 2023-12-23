import React from 'react'

function Subscription() {
  return (
    <>
    <div className="p-8 rounded-md text-center text-neutral-dark-grayish-blue bg-neutral-white md:w-96">
  <header className="mb-4">
    <p className="card-title">Your Title</p>
    <h1 className="card-price text-3.5xl mt-4">Your Price</h1>
  </header>
  <div className="card-features">
    <div className="card-storage pb-4 border-b border-neutral-light-grayish-blue">Your Storage</div>
    <div className="card-users-allowed pb-4 border-b border-neutral-light-grayish-blue">Your Users</div>
    <div className="card-send-up mb-8">Send up to Your Value</div>
  </div>
  <button className="card-btn cursor-pointer py-2 w-full rounded-md bg-primary-linear-gradient border-2 border-transparent transition duration-125 ease-in-out text-neutral-white focus:outline-none hover:text-primary-hover hover:bg-primary-hover">
    READ MORE
  </button>
</div>
    </>
  )
}

export default Subscription