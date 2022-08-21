import React from 'react'
import Image from 'next/image'
import { CartProvider, useCart } from "react-use-cart";


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return (
    <div className='p-4 w-64'>
      <h1 className='text-3xl font-semibold'>Cart</h1>
      <p className='py-4'>Your cart is empty</p>
    </div>);

  return (
    <div className='p-4 w-full'>
      <h1 className='text-3xl font-semibold'>Cart</h1>

      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    height={'100px'}
                    width={'100px'}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={item.href}> {item.title} </a>
                      </h3>
                      <p className="ml-4">{item.currency}{(item.price * item.quantity)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.currency}{item.price}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    
                    <div className="flex items-center justify-center">
                    <div className="inline-flex" role="group">
                      <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        type="button"
                        className="rounded-full shadow py-2 px-3 border-0 font-bold text-xs hover:bg-gray-100"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        disabled="true"
                        className="rounded-full py-2 px-3 border-0 text-xs"
                      >
                        {item.quantity}
                      </button>
                      <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        type="button"
                        className="rounded-full shadow py-2 px-3 font-bold border-0 text-xs hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='pt-2'>
      <button className='btn btn-warning rounded-full btn-block flex justify-between'>
        <span>Checkout</span>
        <span>{items[0].currency} {cartTotal}</span>
      </button>
      </div>
    </div>
  );
}

export default Cart