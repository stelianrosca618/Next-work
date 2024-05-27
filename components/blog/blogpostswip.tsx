"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

import BlogItem1 from "@/public/imgs/home/Blog1.png";
import BlogItem2 from "@/public/imgs/home/Blog2.png";
import BlogItem3 from "@/public/imgs/home/Blog3.png";
import BlogItem4 from "@/public/imgs/home/Blog4.png";

const topics = [
  'dataforger',
  'loadlens',
  'nimbus',
  'aboutus',
  'harkkaren',
  'subscribe',
  'privacy',
];

const authors = [
  'Tristain',
  'Edor',
  'Olaf',
  'puerl',
  'katalia',
  'Alex',
  'Coclas',
  'Max man',
  'Oristan',
  'Kuko'
]
type SwiperRef = HTMLElement & { swiper: typeof Swiper; initialize: () => void };
export default function BlogPostsSwipe() {
  const prevRef = useRef<any>(null)
  const nextRef = useRef<any>(null)
  const swiperRef = useRef(null) as any;
  const [mobileBlogCounter, setMobileBlogCounter] = useState<number>(4);
  const [mobileFilterNav, setMobileFilterNav] = useState<Boolean>(false);
  const [filteringNav, setFilteringNav] = useState<String>('topic');

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(16);
  const [totalIndex, setTotalIndex] = useState<number>(0);

  const [orginBgItems, setOriginBgItems] = useState<any[]>([]);
  const [blogItems, setBlogItems] = useState<any[]>([]);

  const [filterTopics, setFilterTopics] = useState<any[]>([]);
  const [filterAuthors, setFilterAuthors] = useState<any[]>([]);
  const [newestBlog, setNewestBlog] = useState<Boolean>(true);
  const randomDate = (start: any, end: any) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
  }

  useEffect(() => {
    let tmpBlogItems = [];
    for (var i = 0; i < 30; i++) {
      tmpBlogItems.push({
        title: 'No-code Test Data Seeding and Management Platform',
        topic: topics[Math.floor(Math.random() * 7)],
        author: authors[Math.floor(Math.random() * 10)],
        date: randomDate(new Date(2012, 0, 1), new Date()),
        imgSrc: BlogItem1,
      });
      tmpBlogItems.push({
        title: 'No-code Test Data Seeding and Management Platform',
        topic: topics[Math.floor(Math.random() * 7)],
        author: authors[Math.floor(Math.random() * 10)],
        date: randomDate(new Date(2012, 0, 1), new Date()),
        imgSrc: BlogItem2,
      });
      tmpBlogItems.push({
        title: 'No-code Test Data Seeding and Management Platform',
        topic: topics[Math.floor(Math.random() * 7)],
        author: authors[Math.floor(Math.random() * 10)],
        date: randomDate(new Date(2012, 0, 1), new Date()),
        imgSrc: BlogItem3,
      });
      tmpBlogItems.push({
        title: 'No-code Test Data Seeding and Management Platform',
        topic: topics[Math.floor(Math.random() * 7)],
        author: authors[Math.floor(Math.random() * 10)],
        date: randomDate(new Date(2012, 0, 1), new Date()),
        imgSrc: BlogItem4,
      });
    }
    setOriginBgItems(tmpBlogItems);
    setBlogItems(tmpBlogItems);

    setTotalIndex(tmpBlogItems.length);
  }, []);

  const runFiltering = () => {
    let tmpBgItem: any[] = [];

    if (filterTopics.length > 0) {
      orginBgItems.map(itemData => {
        const checktData = filterTopics.filter(tItem => tItem == itemData.topic);
        console.log(checktData);
        if (checktData.length > 0) {
          tmpBgItem.push(itemData);
        }
      })
      // setBlogItems(tmpBgItem);
    } else {
      tmpBgItem = [...orginBgItems];
    }
    let tmpAuItems: any[] = [];
    if (filterAuthors.length > 0) {

      tmpBgItem.map(itemData => {
        const checkAuData = filterAuthors.filter(aItem => aItem == itemData.author);
        if (checkAuData.length > 0) {
          tmpAuItems.push(itemData);
        }
      })
    } else {
      tmpAuItems = [...tmpBgItem];
    }
    if (newestBlog) {
      tmpAuItems.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        const startDate: Date = new Date(b.date);
        const endDate: Date = new Date(a.date);
        let dateCom: number = startDate.getTime() - endDate.getTime();
        
        return dateCom;
      });
    } else {
      tmpAuItems.sort(function (a:any, b:any) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        const startDate: Date = new Date(a.date);
        const endDate: Date = new Date(b.date);
        let dateCom: number = startDate.getTime() - endDate.getTime();
        return dateCom;
      });
    }
    setBlogItems(tmpAuItems);
    console.log(filterTopics, blogItems, tmpBgItem);
  }

  useEffect(() => {
    if (orginBgItems.length > 0) {
      runFiltering();
    }
  }, [filterTopics, filterAuthors, newestBlog, orginBgItems])
  const pagination: any = {
    clickable: true,
    renderFraction: function (swiper: any, current: any, total: any) {
      return '<span>' + current + '/' + (total - 1) + '</span>';
    },
    renderBullet: function (index: any, className: any) {
      return '<span class="blogPagination ' + className + '">' + (index + 1) + '</span>';
    },
  };
  const nextSwip = () => {

    swiperRef.current?.swiper.slideNext();

    if (swiperRef.current?.swiper.realIndex - swiperRef.current?.swiper.previousIndex < 4) {
      const tmpTotalIndex: number = (totalIndex - 16);
      setCurrentIndex(tmpTotalIndex);
      setEndIndex(totalIndex);
    } else {
      setCurrentIndex((swiperRef.current.swiper.snapIndex * 16 + 1));
      setEndIndex((swiperRef.current.swiper.snapIndex * 16 + 16))
    }
    console.log('swip', swiperRef.current.swiper);
  }
  const prevSwip = () => {
    swiperRef.current.swiper.slidePrev();
    setCurrentIndex((swiperRef.current.swiper.snapIndex * 16 + 1));
    setEndIndex((swiperRef.current.swiper.snapIndex * 16 + 16))
  }

  const onTopicFilter = (topic: any) => {
    const existTopic = filterTopics.find(ftItem => ftItem == topic);
    let tmpFilteredTopic: any[] = [];
    if (existTopic) {
      filterTopics.map(ftItem => {
        if (topic != ftItem) {
          tmpFilteredTopic.push(ftItem);
        }
      })
    } else {
      tmpFilteredTopic = [...filterTopics];
      tmpFilteredTopic.push(topic);
    }
    setFilterTopics(tmpFilteredTopic);
    console.log('it is setted toptic', filterTopics);
  }
  const onAuthorFilter = (author: any) => {
    const existAuthor = filterAuthors.find(aItem => aItem == author);
    let tmpFilteredAuthors: any[] = [];
    if (existAuthor) {
      filterAuthors.map(aItem => {
        if (author != aItem) {
          tmpFilteredAuthors.push(aItem);
        }
      })
    } else {
      tmpFilteredAuthors = [...filterAuthors];
      tmpFilteredAuthors.push(author);
    }
    setFilterAuthors(tmpFilteredAuthors);
  }


  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 ">
      <h1 className="font-extrabold w-full py-4 flex justify-between">
        <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-effect">Blog</span>
        <div onClick={() => {setMobileFilterNav(!mobileFilterNav)}} className="bg-blue border border-white p-3 w-10 h-10 rounded-xl flex md:hidden justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
        </div>
      </h1>

      <div className={mobileFilterNav? " w-full filter-section" : "hidden md:block w-full filter-section"}>
        <div className="w-full flex py-2">
          <span className="mx-2 underline underline-offset-2">Filter and sort</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
        </div>
        <div className="cursor-pointer w-full flex items-center py-2">
          <span onClick={() => setFilteringNav('topic')} className={filteringNav == 'topic' ? "mx-2 flex items-center border-b" : "mx-2 flex items-center"}>
            Topics
            {filteringNav == 'topic' &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            }
            {!(filteringNav == 'topic') &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            }
          </span>
          <span onClick={() => setFilteringNav('author')} className={filteringNav == 'author' ? "mx-2 flex items-center border-b" : "mx-2 flex items-center"}>
            Authors
            {filteringNav == 'author' &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            }
            {!(filteringNav == 'author') &&
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            }
          </span>
          <span className="mx-2 items-center flex">
            Date:
            <button onClick={() => setNewestBlog(!newestBlog)} className="mx-1 flex items-center cursor-pointer">
              {!!newestBlog &&
                <>
                  newest
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </>
              }
              {!newestBlog &&
                <>
                  oldest
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-1 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                </>
              }

            </button>

          </span>
        </div>
        <div className="w-full py-2">
          {filteringNav == 'topic' &&
            <div className="w-full md:w-4/6 py-2">
              <div className="grid grid-cols-3 md:grid-cols-4">
                {topics.map((tItem, key) => (
                  <div key={key}>
                    <input id={`topic_${tItem}`} onClick={() => { onTopicFilter(tItem) }} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`topic_${tItem}`} className="ms-2 text-sm font-medium text-white dark:text-gray-300">{tItem}</label>
                  </div>
                ))}
              </div>
            </div>
          }

          {filteringNav == 'author' &&
            <div className="w-full md:w-4/6 py-2">
              <div className="grid grid-cols-3 md:grid-cols-4">
                {authors.map((auItem, key) => (
                  <div key={key}>
                    <input id={`author_${auItem}`} onClick={() => { onAuthorFilter(auItem) }} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`author_${auItem}`} className="ms-2 text-sm font-medium text-white dark:text-gray-300">{auItem}</label>
                  </div>
                ))}
              </div>
            </div>
          }

        </div>
      </div>
      {/* {filterTopics.toString()} */}
      <div className="hidden md:block w-full swiper-section">
        <Swiper
          ref={swiperRef}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
          }}
          slidesPerView={4}
          spaceBetween={15}
          slidesPerGroup={4}
          grid={{
            rows: 4,
          }}
          modules={[Grid, Pagination]}
          pagination={pagination}
        >
          {
            blogItems.map((bgItem, key) => (
              <SwiperSlide key={key} className="blogItem-side">
                <Link
                  href="/blog/blogpost"
                  className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                >
                  <div className="text-white">
                    <Image
                      src={bgItem.imgSrc}
                      alt={`item` + key}
                    />
                    <p className="py-2">{bgItem.title}</p>
                    <p className="pb-1 hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>

                      {bgItem.author}
                    </p>
                    <p className="mb-4">{bgItem.date}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
          <div className="blogFregment">
            {currentIndex} - {endIndex} of {totalIndex}
          </div>
          <div className="blogPost-navigations w-36 flex grid-cols-2 ">
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
      <div className="block md:hidden w-full mobile-blogs">
        <div className="grid grid-cols-1 gap-4 pb-4 text-white">
          {
            blogItems.map((bgItem, key) => (
              <>
                {
                  key < mobileBlogCounter &&
                  <Link
                    href="/blog/blogpost"
                    className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                  >
                    <div className="w-full text-white">
                      <Image
                        className="w-full h-[260px]"
                        src={bgItem.imgSrc}
                        alt={`item` + key}
                      />
                      <p className="py-2 text-white">{bgItem.title}</p>
                      <p className="hidden pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        {bgItem.author}
                      </p>
                      <p>{bgItem.date} ({bgItem.topic})</p>
                    </div>
                  </Link>
                }
              </>
            ))
          }

        </div>
        <div className="w-full">
          <button onClick={() => {setMobileBlogCounter(mobileBlogCounter + 4)}} className="w-full rounded px-12 py-2 bg-white text-black font-bold">Load more</button>
        </div>
      </div>
    </div>
  )

}