import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCreative, EffectCoverflow, Pagination } from 'swiper/modules';

import wordVector from "@/public/imgs/whyhakkaren/Vector.svg";
import Avata1 from "@/public/imgs/whyhakkaren/avata1.png";
export default function Whycarousel() {
  const wipeItems = [
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    },
    {
      date: '15 Apr 2023',
      logoImg: wordVector,
      rate: 4,
      text: "The most comfortable Nike's I've wom in the past couple of years has been the 32s.These have surpassed that.",
      avata: Avata1,
      user: 'Rachel Jules',
      userYear: '28 years'
    }
  ];
  const prevRef = useRef<any>(null)
  const nextRef = useRef<any>(null)
  const swiperRef = useRef(null) as any;

  const nextSwip = () => {

    swiperRef.current.swiper.slideNext();

  }
  const prevSwip = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const breakpoints={
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1650: {
      slidesPerView: 4.7,
      spaceBetween: 20,
    },
    1750: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1800: {
      slidesPerView: 5.5,
      spaceBetween: 20,
    },
    1850: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }
  const pagination = {
    clickable: true,
    
    renderBullet: function (index: any, className: any) {
      return '<span class="clientSwipPagination ' + className + '"></span>';
    },
  };
  return (
    <>
      <div className="lg:block hidden w-full">
        <Swiper
          ref={swiperRef}
          className='client-swiper'
          slidesPerView={6}
          // spaceBetween={-10}
          loop={true}
          //loopedSlides={3}
          centeredSlides={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              origin: "center",
              shadow: true,
              translate: ['-110%', '3%', 0],
              rotate: [0, 0, -1],
              scale: 1
            },
            next: {
              origin: "center",
              shadow: true,
              translate: ['110%', '3%', 0],
              rotate: [0, 0, 1],
              scale: 1
            },
            limitProgress: 5
          }}
          breakpoints = {breakpoints}
          modules={[EffectCreative, Pagination]}
        >
          {
            wipeItems.map((wItem, key) => (
              <SwiperSlide key={key}>
                <div className='clientCard border-2 rounded-xl p-6 flex flex-col justify-between'>
                  <div className='clientCard-content'>
                    <div className='clientCard-head flex justify-between items-center mb-3'>
                      <span className='text-xs'>{wItem.date}</span>
                      <Image src={wItem.logoImg} height={25} alt='vector' />
                    </div>
                    <div className='clientCard-text'>
                      <div className='flex'>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star inActive" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <p className='text-base my-3'>{wItem.text}</p>
                    </div>
                  </div>
                  <div className='clientCard-footer'>
                    <div className='flex justify-start items-center'>
                      <Image
                        className='clientCard-avata mr-2'
                        src={wItem.avata}
                        alt='avata'
                      />
                      <div className='py-1'>
                        <p className='font-bold text-sm leading-3'>{wItem.user}</p>
                        <span className='text-xs'>{wItem.userYear}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
          <div className="clientSwip-navigations w-36 flex grid-cols-2 mt-14">
            <button className="carousel-btn" onClick={() => prevSwip()} ref={prevRef}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="carousel-btn" onClick={() => nextSwip()} ref={nextRef}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
      <div className='lg:hidden block w-full'>
        <Swiper
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={15}
          loop={true}
          pagination={true}
          modules={[Pagination]}
        >
          {
            wipeItems.map((wItem, key) => (
              <SwiperSlide key={key} >
                <div className='clientCard mx-auto border-2 rounded-xl p-6 flex flex-col justify-between'>
                  <div className='clientCard-content'>
                    <div className='clientCard-head flex justify-between items-center mb-3'>
                      <span className='text-xs'>{wItem.date}</span>
                      <Image src={wItem.logoImg} height={25} alt='vector' />
                    </div>
                    <div className='clientCard-text'>
                      <div className='flex'>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-6 h-6 ms-2 clientRate-star inActive" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <p className='text-base my-3'>{wItem.text}</p>
                    </div>
                  </div>
                  <div className='clientCard-footer'>
                    <div className='flex justify-start items-center'>
                      <Image
                        className='clientCard-avata mr-2'
                        src={wItem.avata}
                        alt='avata'
                      />
                      <div className='py-1'>
                        <p className='font-bold text-sm leading-3'>{wItem.user}</p>
                        <span className='text-xs'>{wItem.userYear}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>

  )
}