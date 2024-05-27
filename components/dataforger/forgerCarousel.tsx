import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import forgerItem1 from "@/public/imgs/Dataforger/forgerItem1.png";
import forgerItem2 from "@/public/imgs/Dataforger/forgerItem2.png";
import forgerItem3 from "@/public/imgs/Dataforger/forgerItem3.png";
import forgerItem4 from "@/public/imgs/Dataforger/forgerItem4.png";
import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7.5,
        slidesToSlide: 1,
    },
    superLargeDesktop1: {
        breakpoint: { max: 3000, min: 2600 },
        items: 6.5,
        slidesToSlide: 1,
    },
    largeDesktop: {
        breakpoint: { max: 2600, min: 2400 },
        items: 6,
        slidesToSlide: 1,
    },
    largeDesktop1: {
        breakpoint: { max: 2400, min: 2200 },
        items: 5.5,
        slidesToSlide: 1,
    },
    largeDesktop2: {
        breakpoint: { max: 2200, min: 2000 },
        items: 5,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 2000, min: 1800 },
        items: 4.5,
        slidesToSlide: 1,
    },
    desktop0: {
        breakpoint: { max: 1800, min: 1700 },
        items: 4.3,
        slidesToSlide: 1,
    },
    desktop1: {
        breakpoint: { max: 1700, min: 1600 },
        items: 4,
        slidesToSlide: 1,
    },
    desktop2: {
        breakpoint: { max: 1600, min: 1500 },
        items: 3.5,
        slidesToSlide: 1,
    },
    desktop3: {
        breakpoint: { max: 1500, min: 1400 },
        items: 3.5,
        slidesToSlide: 1,
    },
    desktop4: {
        breakpoint: { max: 1400, min: 1300 },
        items: 3.3,
        slidesToSlide: 1,
    },
    desktop5: {
        breakpoint: { max: 1300, min: 1200 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 1000 },
        items: 2.5,
        slidesToSlide: 1,
    },
    tablet1: {
        breakpoint: { max: 1000, min: 800 },
        items: 2,
        slidesToSlide: 1,
    },
    tablet2: {
        breakpoint: { max: 800, min: 464 },
        items: 1.8,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


export default function ForgerCarousel({ items }: any) {
    // const [detectMobile, setDetectMobile] = useState<Boolean>(false);
    const swiperRef = useRef<any>(null);
    const prevRef = useRef<any>(null);
    const nextRef = useRef<any>(null);
    const userAgent: string = typeof window !== 'undefined' ? window.navigator.userAgent || window.navigator.vendor : '';
    const detectMobile = (): boolean => {
        const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i]
        return regexs.some((b) => userAgent.match(b))
    }
    //const [timeCount, setTimeCount] = useState(0);

    const nextSwip = () => {

        swiperRef.current?.swiper.slideNext();
    
      }
      const prevSwip = () => {
        swiperRef.current?.swiper.slidePrev();
      };

    const pagination = {
        clickable: true,
        className: 'forgerCarousel-pagination',
        renderBullet: function (index: number, className: string) {
            // const renderWidth = 
            console.log(swiperRef.current?.swiper.pagination.el.clientWidth);
            const pageWidth = swiperRef.current?.swiper.pagination.el.clientWidth;
            const bulletTotal = swiperRef.current?.swiper.slides.length;
            const bulletW = Math.round(pageWidth / bulletTotal);
            return '<div class="forgerCarousel-dot ' + className + '" style="width: ' + bulletW + 'px !important; height: 5px !important; border-radius: 0 !important; margin: 0 !important;" ></div>';
        },
    };
    return (
        <>
            <div className="forger-carousel-width">
                <Swiper slidesPerView={'auto'} loop={true} ref={swiperRef}
                    className="forgerCarousel-swip"
                    spaceBetween={20}
                    pagination={pagination}
                    modules={[Scrollbar, Pagination]}
                >
                    {
                        items.map((item: any, key: number) => (
                            <SwiperSlide className="forgerCarousel-item" key={key}>
                                <div className="forger-item-card">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Image
                                                src={item.imgsrc}
                                                height={100}
                                                alt="fitem1"
                                            />
                                        </div>
                                        <div className="text-right">
                                            {item.id}
                                        </div>
                                    </div>
                                    <div className="w-full mt-2">
                                        <h4 className="font-bold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="forgerSwip-navigations w-36 flex grid-cols-2">
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
        </>


    )
}