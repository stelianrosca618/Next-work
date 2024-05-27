"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCreative, EffectCoverflow, Pagination } from 'swiper/modules';

import Whycarousel from "@/components/whyhakkaren/whycarousel";
import scrollIco from "@/public/imgs/scrollIco.svg";
import generalImg from "@/public/imgs/whyhakkaren/generalImg.png";
import Frame1 from "@/public/imgs/home/Frame_1.png";
import Frame2 from "@/public/imgs/home/Frame_2.png";
import Frame3 from "@/public/imgs/home/Frame_3.png";
import forgerItem1 from "@/public/imgs/Dataforger/forgerItem1.png";
import forgerItem2 from "@/public/imgs/Dataforger/forgerItem2.png";
import forgeritem3 from "@/public/imgs/Dataforger/forgerItem3.png";
import forgeritem4 from "@/public/imgs/Dataforger/forgerItem4.png";

import ScrollDowntxt from "@/components/scrollDowntxt";
import AIManagement from "@/components/aiManagement";

export default function Whyhakkaren() {
  const [compareDropdownOpen, setCompareDropdownOpen] = useState<Boolean>(false);
  const compareDropDown = useRef<HTMLDivElement>(null);
  const generalItems = [
    {
      id: '01',
      imgSrc: forgerItem1,
      title: 'Scalable Solutions',
      detail: 'Cater to businesses of all sizes, with capabilities that grow with your company.'
    },
    {
      id: '02',
      imgSrc: forgerItem1,
      title: 'User-Friendly Interface',
      detail: 'Intuitive design makes navigation and usage effortless for both technical and non-technical users.',
    },
    {
      id: '03',
      imgSrc: forgerItem1,
      title: 'Customizable Data Seeding',
      detail: 'Hakkaren provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs.',
    },
    {
      id: '04',
      imgSrc: forgerItem1,
      title: 'Ephemeral Environments with Nimbus',
      detail: 'Hakkaren’s product, Nimbus, offers ephemeral environments that ensure isolated, conflict-free testing.',
    },
    {
      id: '05',
      imgSrc: forgerItem1,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
    },
    {
      id: '06',
      imgSrc: forgerItem1,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
    }
  ];
  const compareItems = [
    {
      id: '01',
      imgSrc: forgerItem1,
      title: 'User Accessibility',
      detail: 'Hakkaren is designed to be intuitive and easy to use for both technical and non-technical users.',
      type: 1
    },
    {
      id: '02',
      imgSrc: forgerItem1,
      title: 'Collaboration Focus',
      detail: 'Hakkaren emphasizes collaborative features, making it easier for cross-functional teams to work together on testing.',
      type: 1
    },
    {
      id: '03',
      imgSrc: forgerItem1,
      title: 'Customizable Data Seeding',
      detail: 'Hakkaren provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs.',
      type: 1
    },
    {
      id: '04',
      imgSrc: forgerItem1,
      title: 'Ephemeral Environments with Nimbus',
      detail: 'Hakkaren’s product, Nimbus, offers ephemeral environments that ensure isolated, conflict-free testing.',
      type: 1
    },
    {
      id: '05',
      imgSrc: forgerItem1,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 1
    },
    {
      id: '06',
      imgSrc: forgerItem1,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 1
    },
    {
      id: '01',
      imgSrc: forgerItem2,
      title: 'User Accessibility',
      detail: 'Hakkaren is designed to be intuitive and easy to use for both technical and non-technical users.',
      type: 2
    },
    {
      id: '02',
      imgSrc: forgerItem2,
      title: 'Collaboration Focus',
      detail: 'Hakkaren emphasizes collaborative features, making it easier for cross-functional teams to work together on testing.',
      type: 2
    },
    {
      id: '03',
      imgSrc: forgerItem2,
      title: 'Customizable Data Seeding',
      detail: 'Hakkaren provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs.',
      type: 2
    },
    {
      id: '04',
      imgSrc: forgerItem2,
      title: 'Ephemeral Environments with Nimbus',
      detail: 'Hakkaren’s product, Nimbus, offers ephemeral environments that ensure isolated, conflict-free testing.',
      type: 2
    },
    {
      id: '05',
      imgSrc: forgerItem2,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 2
    },
    {
      id: '06',
      imgSrc: forgerItem2,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 2
    },
    {
      id: '01',
      imgSrc: forgeritem3,
      title: 'User Accessibility',
      detail: 'Hakkaren is designed to be intuitive and easy to use for both technical and non-technical users.',
      type: 3
    },
    {
      id: '02',
      imgSrc: forgeritem3,
      title: 'Collaboration Focus',
      detail: 'Hakkaren emphasizes collaborative features, making it easier for cross-functional teams to work together on testing.',
      type: 3
    },
    {
      id: '03',
      imgSrc: forgeritem3,
      title: 'Customizable Data Seeding',
      detail: 'Hakkaren provides highly customizable data seeding options, allowing users to create specific scenarios and datasets tailored to their unique testing needs.',
      type: 3
    },
    {
      id: '04',
      imgSrc: forgeritem3,
      title: 'Ephemeral Environments with Nimbus',
      detail: 'Hakkaren’s product, Nimbus, offers ephemeral environments that ensure isolated, conflict-free testing.',
      type: 3
    },
    {
      id: '05',
      imgSrc: forgeritem3,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 3
    },
    {
      id: '06',
      imgSrc: forgeritem3,
      title: 'No Production Data Access Required',
      detail: 'Hakkaren’s approach to data privacy is robust, requiring no access to production data. ',
      type: 3
    }
  ]
  const [chooseType, setChooseType] = useState<Number>(1);

  const pagination = {
    clickable: true,

    renderBullet: function (index: any, className: string) {
      return '<span class="clientSwipPagination ' + className + '"></span>';
    },
  };

  const isIphoneDev = () => {
    return typeof window !== 'undefined' ? ([
      'iPhone Simulator',
      'iPhone',
    ].includes(window.navigator.platform)
      // iPad on iOS 13 detection
      || (window.navigator.userAgent.includes("Mac") && "ontouchend" in document)) : false
  }
  const scrollContent = useRef(null) as any;
  const [scrollBtnW, setScrollBtnW] = useState<number>(50);
  const [scrollBtnL, setScrollBtnL] = useState<number>(0);
  const [isMoveVal, setIsMoveVal] = useState<any>('');
  const isMoved = (e: any) => {
    console.log(e, scrollContent.current?.scrollLeft, Math.round(window.innerWidth * (scrollContent.current?.scrollLeft / scrollContent.current?.scrollWidth)));
    setScrollBtnL(Math.round(window.innerWidth * (scrollContent.current?.scrollLeft / scrollContent.current?.scrollWidth)))
    setIsMoveVal('moved');
  }
  useEffect(() => {
    console.log(scrollContent.current?.scrollWidth, scrollContent.current?.clientWidth, window.innerWidth);
    setScrollBtnW(Math.round(window.innerWidth * (scrollContent.current?.clientWidth / scrollContent.current?.scrollWidth)) - 10);
    console.log()
  }, [])
  return (
    <section>
      <div className="why-section whyhakkaren-head-bg relative py-10 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-2">
          <h1 className="font-extrabold text-start lg:text-center">
            <span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-start-lg-effect">Why Hakkaren?</span>
          </h1>
          <p className="w-full lg:w-2/3 my-8 text-start lg:text-center mx-auto">
            Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20">
            <div className="whyItem">
              <h1 className="whyhakkaren-head color-blue">20+</h1>
              <h4 className="font-extrabold my-4">Personal ephemeral environments</h4>
              <p>Avoid conflicts with dedicated environments for each team member</p>
            </div>
            <div className="whyItem">
              <h1 className="whyhakkaren-head light-blue">25k+</h1>
              <h4 className="font-extrabold my-4">Personal ephemeral environments</h4>
              <p>Avoid conflicts with dedicated environments for each team member</p>
            </div>
            <div className="whyItem">
              <h1 className="whyhakkaren-head text-yellow-550">150+</h1>
              <h4 className="font-extrabold my-4">Personal ephemeral environments</h4>
              <p>Avoid conflicts with dedicated environments for each team member</p>
            </div>
            <div className="whyItem">
              <h1 className="whyhakkaren-head color-green">55+</h1>
              <h4 className="font-extrabold my-4">Personal ephemeral environments</h4>
              <p>Avoid conflicts with dedicated environments for each team member</p>
            </div>
          </div>
          <div className="w-full lg:max-w-xs my-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/"
                className="w-full lg:w-fit btn-sm text-white bg-blue rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
              >
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
                </svg>
                Try it now !
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center mt-8">
          <ScrollDowntxt />
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="whyHakkaren-left">
              <Image
                src={generalImg}
                className="w-full h-full"
                alt="'general"
              />
            </div>
            <div className="whyhakkaren-right">
              <h2 className="my-6"><span className="px-4 lg:px-8 my-4 custom-start-lg-effect">General</span></h2>
              <p className="px-4 lg:px-8  my-4 font-extrabold">Broader Target Audience and Collaborative Focus</p>
              <p className="px-4 lg:px-8 my-4">Hakkaren caters not just to developers, but also to non-technical team members like QA, project managers, customer success, and sales teams. This diverse appeal promotes a collaborative testing environment across different departments, making it a comprehensive platform for various organizational needs.</p>
              <p className="px-4 lg:px-8 my-6 font-extrabold">Broader Target Audience and Collaborative Focus</p>
              <p className="px-4 lg:px-8 my-4">Hakkaren caters not just to developers, but also to non-technical team members like QA, project managers, customer success, and sales teams. This diverse appeal promotes a collaborative testing environment across different departments, making it a comprehensive platform for various organizational needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-start lg:text-center w-full pl-4 lg:pl-0 lg:w-2/3 mx-auto"><span className="-ml-4 lg:-ml-0 px-4 lg:px-8 custom-start-lg-effect">Advanced Feature Set with Customization</span></h2>
          <div className="w-full justify-start items-start grid grid-cols-1 lg:grid-cols-3 gap-10 my-8 px-2 lg:px-8">
            <div className="whyItem flex justify-center items-center flex-col px-2">
              <Image
                src={Frame1}
                height={100}
                alt="frame1"
              />
              <span className="my-2">DataForger</span>
              <p className="text-center">
                Offers customizable data seeding, allowing users to create specific testing scenarios and datasets without accessing production data.
              </p>
            </div>
            <div className="whyItem flex justify-center items-center flex-col">
              <Image
                src={Frame2}
                height={100}
                alt="frame2"
              />
              <span className="my-2">Nimbus</span>
              <p className="text-center">
                Provides ephemeral and isolated testing environments to eliminate conflicts during simultaneous testing processes
              </p>
            </div>
            <div className="whyItem flex justify-center items-center flex-col">
              <Image
                src={Frame3}
                height={100}
                alt="frame3"
              />
              <span className="my-2">LoadLens</span>
              <p className="text-center">
                Integrates load testing capabilities, vital for performance assessments, which enhances the platform's utility
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h2><span className="px-4 lg:px-8 my-4 custom-start-lg-effect">General</span></h2>
          <div className="w-full hidden lg:grid grid-cols-3  gap-10 p-4 lg:p-8">
            {
              generalItems.map((item, key) => (
                <div className="forger-item-card w-full h-full" key={key}>
                  <div className="flex justify-between items-start">
                    <div>
                      <Image
                        src={item.imgSrc}
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
              ))
            }
          </div>
          <div className="w-full px-8 hidden lg:block text-center">
            <button className="mx-auto rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
          </div>
          <div className="w-full block py-2 lg:hidden lg:p-8">
            <Swiper
              centeredSlides={false}
              slidesPerView={1.05}
              spaceBetween={10}
              pagination={pagination}
              modules={[Pagination]}
            >
              {
                generalItems.map((item, key) => (
                  <SwiperSlide key={key} >
                    <div className="forger-item-card w-full p-5" >
                      <div className="flex justify-between items-start">
                        <div>
                          <Image
                            src={item.imgSrc}
                            height={100}
                            alt="fitem1"
                          />
                        </div>
                        <div className=" text-right">
                          {item.id}
                        </div>
                      </div>
                      <div className="w-full mt-2">
                        <h4 className="font-bold py-4">
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
            </Swiper>
          </div>
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 px-4"><span className="-ml-4 lg:-ml-8 px-4 lg:px-8 my-4 custom-start-lg-effect">Compare to other platform</span></h2>
          <div ref={scrollContent} onScroll={(e) => { isMoved(e) }} className="w-full overflow-auto scrollBar-effect pb-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-white bg-blue border-2 dark:text-white font-extrabold text-2xl">
                <tr>
                  <th scope="col" className="px-8 py-5">Feature/Aspect</th>
                  <th scope="col" className="px-8 py-5">Hakkaren</th>
                  <th scope="col" className="px-8 py-5">Release</th>
                  <th scope="col" className="px-8 py-5">Tonic AI</th>
                  <th scope="col" className="px-8 py-5">Snaplet</th>
                </tr>
              </thead>
              <tbody >
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Target Audience</td>
                  <td className="px-8 py-5">Broad (Developers, QA, PM, CSM, Sales)</td>
                  <td className="px-8 py-5">Primarily Developers</td>
                  <td className="px-8 py-5">Primarily Developers</td>
                  <td className="px-8 py-5">Primarily Developers</td>
                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Data Seeding</td>
                  <td className="px-8 py-5">Customizable, no prod data access</td>
                  <td className="px-8 py-5">Yes, but not customizable</td>
                  <td className="px-8 py-5">Customizable, prod data access</td>
                  <td className="px-8 py-5">No</td>
                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Ephemeral Environments</td>
                  <td className="px-8 py-5 ">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#46D414" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                      Yes (Nimbus)
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#46D414" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                      Yes
                    </span>
                  </td>
                  <td className="px-8 py-5">Only for the database</td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>

                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Load Testing</td>
                  <td className="px-8 py-5 ">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#46D414" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                      Yes (LoadLens)
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>

                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Data Privacy</td>
                  <td className="px-8 py-5">High (No prod data access)</td>
                  <td className="px-8 py-5">Moderate (Requires prod data access)</td>
                  <td className="px-8 py-5">Moderate (Requires prod data access)</td>
                  <td className="px-8 py-5">Moderate (Requires prod data access)</td>
                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Collaboration</td>
                  <td className="px-8 py-5">High (Across different departments)</td>
                  <td className="px-8 py-5">Low (Focused on development)</td>
                  <td className="px-8 py-5">Low (Focused on development)</td>
                  <td className="px-8 py-5">Low (Focused on development)</td>
                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">24/7 Support</td>
                  <td className="px-8 py-5 ">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#46D414" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                      Yes (LoadLens)
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC700" className="mx-1 w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>

                      No
                    </span>
                  </td>

                </tr>
                <tr className="h-24 text-white border border-gray-400 text-lg font-normal align-top bg-[#1a234f]">
                  <td className="px-8 py-5 font-semibold">Cost-Effectiveness</td>
                  <td className="px-8 py-5">High (Affordable solutions)</td>
                  <td className="px-8 py-5">Low</td>
                  <td className="px-8 py-5">Low</td>
                  <td className="px-8 py-5">Moderate (Offer less features)</td>
                </tr>
              </tbody>
            </table>
          </div>
          {isIphoneDev() &&
            <div className="w-full relative h-[10px] bg-[#1A234F]">
              <div className="absolute bg-[#3860D2] w-14 h-[10px] rounded-2xl" style={{ width: scrollBtnW + 'px', left: scrollBtnL + 'px' }}></div>
            </div>

          }
          <div className="w-full">
            <p className="hidden lg:block my-8 text-center font-bold">
              Streamline your load testing setup and analysis.
            </p>
            <div className="block w-full mb-8 mt-4 lg:mt-0 text-center">
              <button className="flex justify-center items-center w-full rounded px-12 py-2 bg-white text-black font-bold mx-auto">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" />
                </svg>
                Try now hakkaren!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-start lg:text-center w-full lg:w-1/2 mx-auto px-4">
            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 my-4 custom-start-lg-effect">
              Compare us with other competitors
            </span>
          </h2>
          <div className="hidden lg:grid w-full grid-cols-3 gap-10">
            <button onClick={() => { setChooseType(1) }} className={chooseType == 1 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              Compare to Tonic.ai
            </button>
            <button onClick={() => { setChooseType(2) }} className={chooseType == 2 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              Compare to Release
            </button>
            <button onClick={() => { setChooseType(3) }} className={chooseType == 3 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              Compare to Snaplet
            </button>
          </div>
          <div className="w-full block lg:hidden">
            <button onClick={(e) => {
              e.preventDefault();
              //setMobileNavOpen(false);
              setCompareDropdownOpen(!compareDropdownOpen);
            }} className="w-full howitworks-btn howitWork-actBtn">
              {chooseType == 1 &&
                <>Compare to Tonic.ai</>
              }
              {chooseType == 2 &&
                <>Compare to Release</>
              }
              {chooseType == 3 &&
                <>Compare to Snaplet</>
              }
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </button>
            <nav
              ref={compareDropDown}
              className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
              style={
                compareDropdownOpen
                  ? {
                    maxHeight: '300px',
                    opacity: 1,
                  }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-900 px-4 py-2">
                <li className="flex justify-center items-center">
                  <button onClick={() => { setChooseType(1); setCompareDropdownOpen(!compareDropdownOpen); }} className="w-full howitworks-btn">
                    Compare to Tonic.ai
                  </button>
                </li>
                <li className="flex justify-center items-center">
                  <button onClick={() => { setChooseType(2); setCompareDropdownOpen(!compareDropdownOpen); }} className="w-full howitworks-btn">
                    Compare to Release
                  </button>
                </li>
                <li className="flex justify-center items-center">
                  <button onClick={() => { setChooseType(3); setCompareDropdownOpen(!compareDropdownOpen); }} className="w-full howitworks-btn">
                    Compare to Snaplet
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full my-12 hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
              compareItems.map((item) => (
                <>
                  {chooseType == item.type &&
                    <div className="forger-item-card w-full h-full p-5" >
                      <div className="flex justify-between items-start">
                        <div>
                          <Image
                            src={item.imgSrc}
                            height={100}
                            alt="fitem1"
                          />
                        </div>
                        <div className=" text-right">
                          {item.id}
                        </div>
                      </div>
                      <div className="w-full mt-2">
                        <h4 className="font-bold py-4">
                          {item.title}
                        </h4>
                        <p>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  }
                </>
              ))
            }
          </div>
          <div className="w-full my-12 block lg:hidden">
            <Swiper
              centeredSlides={false}
              slidesPerView={1.05}
              spaceBetween={10}
              pagination={pagination}
              modules={[Pagination]}
            >
              {
                compareItems.map((item) => (
                  <>
                    {chooseType == item.type &&
                      <SwiperSlide>
                        <div className="forger-item-card w-full p-5" >
                          <div className="flex justify-between items-start">
                            <div>
                              <Image
                                src={item.imgSrc}
                                height={100}
                                alt="fitem1"
                              />
                            </div>
                            <div className=" text-right">
                              {item.id}
                            </div>
                          </div>
                          <div className="w-full mt-2">
                            <h4 className="font-bold py-4">
                              {item.title}
                            </h4>
                            <p>
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    }
                  </>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <div className="why-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-start lg:text-center mb-4"><span className="px-4 lg:px-8 custom-start-lg-effect">Client <b className=" whyhakkaren-gradientTxt">Testimonials</b></span></h2>
          <p className="w-full lg:w-1/2 text-start lg:text-center mx-auto px-4 py-8">Nimbus revolutionizes your team's workflow by equipping each individual with their own exclusive environment.</p>
        </div>
        <div className="w-full overflow-hidden">
          <Whycarousel />
        </div>
      </div>
      <AIManagement />
    </section>
  )
}