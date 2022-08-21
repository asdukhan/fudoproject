import React from 'react'
import Image from 'next/image'

const CallToAction = () => {
    return (

        <div className="">
            <div className="">
                <div className="pt-24">

                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-justify-between">

                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">

                            <h1 className="my-4 text-5xl font-bold leading-tight">Different Spice for A Different Taste</h1>
                            <p className="leading-normal text-2xl mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis natus fuga facere.</p>

                            <a href='#form' className="mx-auto lg:mx-0 bg-yellowBg text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-sm">GET STARTED</a>

                        </div>

                        <div className="w-full md:w-3/5 py-6 text-center">
                            <Image height={'450ppx'} width={'450px'} className="w-full md:w-4/5 z-50" src="/images/header-image.png" />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default CallToAction