import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center m-24'>
      <div className="p-20 max-w-5xl flex flex-col-reverse md:flex-row items-center justify-center bg-Bg-head ">
        <div className="content  text-center md:text-left">
          <h1 className=" text-5xl py-6">Recieve payments
            <br /> quickly
            from anyware</h1>
          <p className='text-gray  '>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional
            assistance sufficient not.
            Letter of on become he tended active enable to. </p>
        </div>
        <div className="container  flex flex-col items-center">
          <form className="w-80 p-4 flex flex-col  ">
            <h1 className='text-Red text-xl py-2'>Get started for free</h1>
            <input type="text" placeholder="Enter your name" className="mb-3 py-3 px-4 border-none  rounded-md " />
            <input type="text" placeholder="Email or Phone Number" className="mb-3 py-3 px-4  border-none  rounded-md  " />
            <input type="text" placeholder="Password" className="mb-3 py-3 px-4  border-none  rounded-md  " />
            <button className=" bg-Yellow p-3 rounded-lg font-semibold text-lg ">Login</button>

          </form>

        </div>

      </div>

    </div>


  )
}

export default Contact