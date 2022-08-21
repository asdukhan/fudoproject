import React from 'react'
import ContactCards from './contactCards'
import Image from 'next/image'
import Link from 'next/link'
import CallToAction from './CallToAction'
import Cart from './Cart'
import { CartProvider, useCart } from "react-use-cart";



const Header = () => {
  const {
    isEmpty,
    totalUniqueItems } = useCart();
  return (<>
    <div className='bg-headerBg'>
      <div className='max-w-7xl mx-auto pt-8'>
        <div className="navbar bg-transparent">
          <div className="flex-1">
            <a className="w-full">
              <Image src={'/images/logo.png'} className={'w-32'} width={'128px'} height={'45px'} />
            </a>
          </div>
          <div className="flex-1 invisible sm:visible">
            <div className='hover:border-b-2 mx-2 p-2'><Link className="hover:border-b-2 mx-2 p-2" href="#home"><a>Home</a></Link></div>
            <div className='hover:border-b-2 mx-2 p-2'><Link className="hover:border-b-2 mx-2 p-2" href="#form"><a>Form</a></Link></div>
            <div className='hover:border-b-2 mx-2 p-2'><Link className="hover:border-b-2 mx-2 p-2" href="#menu"><a>Menu</a></Link></div>
          </div>
          <div className="flex-none mx-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-white">
                <div className="indicator">
                  <Image className='' height={'24px'} width={'24px'} src={'/images/cart.png'} />
                  {!isEmpty &&
                    <span className="badge badge-sm indicator-item">{totalUniqueItems}</span>
                  }
                </div>
              </label>
              <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow z-50">
                <Cart />
              </div>
            </div>

          </div>
          <div className="flex-0">
            <a className='px-4 py-2 bg-yellowBg rounded-2xl' href="#form">
              Login
            </a>
          </div>
        </div>
        <CallToAction />
        <ContactCards />

      </div>
    </div>
  </>)
}

export default Header