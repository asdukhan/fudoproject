import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { CartProvider, useCart } from "react-use-cart";

function MenuRow({ slug = 'fries' }) {
  const { addItem, inCart } = useCart();

  const [data, setMenuRow] = useState<any[]>([]);
  const [isMenuRowLoading, setIsMenuRowLoading] = useState(false);
  useEffect(() => {
    setIsMenuRowLoading(true)
    fetch('http://54.169.31.224:3000/category/' + slug)
      .then(response => response.json())
      .then(data => {
        setMenuRow(data.data)
        setIsMenuRowLoading(false)
      })
  }, [])
  if (isMenuRowLoading) {
    return (
      <div className="w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      > {[0,1,2,3,4].map(data =>
        <SwiperSlide key={data} className={'m-2 rounded-xl bg-yellowAccent'}>
          <div className={''}>
            <div className="relative animate-pulse flex space-x-4 w-full h-80 bg-white rounded-t-xl overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <span className="object-center object-cover w-full h-full h-96 w-96 bg-yellow-300"> </span>
            </div>
            <div className="p-4">
              <p className="text-lg h-2 bg-slate-700 rounded col-span-2"></p>
              <p className="text-lg h-2 bg-slate-700 rounded col-span-2"></p>
              
            </div>

          </div>
      </SwiperSlide>
      )}
    </Swiper>
    </div>
    )
  }
  if (!data) {
    return <p>No items found</p>
  }
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      > {data.map(data =>
        <SwiperSlide key={data.id} className={'m-2 rounded-xl bg-yellowAccent'}>

          <div className={''}>
            <div className="relative w-full h-80 bg-white rounded-t-xl overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <Image
                src={data.image}
                alt={''}
                className="object-center object-cover w-full h-full"
                layout='fill' />
            </div>
            <div className="p-4">
              <p className="text-lg">{data.title}</p>
              <p className="text-lg">{data.currency} {data.price}</p>
              <button onClick={() => addItem(data)}>
              {
                inCart(data.id) ? "Added ✔️" : "Add to cart"
              }
              </button>
            </div>

          </div>
        </SwiperSlide>
      )}
      </Swiper>
    </div>
  )
}


export default MenuRow