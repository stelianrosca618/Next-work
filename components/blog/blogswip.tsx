"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import blogSwipImg from "@/public/imgs/blog/blogSwipImg.png";
import Link from "next/link";

export default function Blogswip() {
    const prevRef = useRef<any>(null)
    const nextRef = useRef<any>(null)
    const swiperRef = useRef(null) as any
    return (
        <Swiper
            ref={swiperRef}
            navigation={{
                prevEl: prevRef.current!, // Assert non-null
                nextEl: nextRef.current!, // Assert non-null
            }}
            loop={true}
        >
            <SwiperSlide>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="blogSwip-left">
                        <h2 className="w-full px-4 lg:px-8">
                            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">No-code Test Data Seeding and Management Platform</span>
                        </h2>
                        <p className="px-4 lg:px-8 my-6 lg:my-12">Hakkaren emphasizes data privacy, operating without needing access to production data, crucial for organizations with strict data privacy and compliance requirements.
                            The platform also offers 24/7 support and cost-effective solutions, making it accessible and appealing, especially to startups and smaller enterprises seeking comprehensive yet affordable testing tools.</p>
                        <Link href="/blog/blogpost">
                            <span className="px-4 lg:px-8 font-extrabold underline underline-offset-2">Read More</span>
                        </Link>
                    </div>
                    <div className="blogSwip-right">
                        <Image
                            src={blogSwipImg}
                            alt="blogSwip"
                        />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="blogSwip-left">
                        <h2 className="w-full px-8">
                            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-effect">No-code Test Data Seeding and Management Platform</span>
                        </h2>
                        <p className="px-4 lg:px-8 my-6 lg:my-12">Hakkaren emphasizes data privacy, operating without needing access to production data, crucial for organizations with strict data privacy and compliance requirements.
                            The platform also offers 24/7 support and cost-effective solutions, making it accessible and appealing, especially to startups and smaller enterprises seeking comprehensive yet affordable testing tools.</p>
                        <Link href="/blog/blogpost">
                            <span className="px-4 lg:px-8 font-extrabold underline underline-offset-2">Read More</span>
                        </Link>
                    </div>
                    <div className="blogSwip-right">
                        <Image
                            src={blogSwipImg}
                            alt="blogSwip"
                        />
                    </div>
                </div>
            </SwiperSlide>
            <div className="mx-auto lg:mx-[18px] w-36 flex grid-cols-2 mt-8">
                <button className="carousel-btn" onClick={() => swiperRef.current.swiper.slidePrev()} ref={prevRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="carousel-btn" onClick={() => swiperRef.current.swiper.slideNext()} ref={nextRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

        </Swiper>
    )

}