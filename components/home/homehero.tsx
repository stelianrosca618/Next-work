"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import dataforger_svg from "@/public/imgs/home/Dataforger.svg";
import nimbus_svg from "@/public/imgs/home/Nimbus.svg";
import loadLens_svg from "@/public/imgs/home/Loadlens.svg";

import collaborativeImg from "@/public/imgs/home/section2-img.png";
import logo from "@/public/imgs/logos/Logo.svg";
import playIco from "@/public/imgs/home/playIco.svg";
import codeImg from "@/public/imgs/home/code_main.png";
import ImageNimbus from "@/public/imgs/home/Image_nimbus.png";
import loanImage from "@/public/imgs/home/loanImage.png";
import UploadIcon from "@/public/imgs/home/UploadIcon.png";
import LeadIcon from "@/public/imgs/home/LeadIcon.png"
import DataforgerIcon from "@/public/imgs/home/DataforgerIcon.png";
import NimbusIcon from "@/public/imgs/home/NimbusIcon.png";
import svgCuverArrow from "@/public/imgs/home/curvedArrow.svg";
import longArrow from "@/public/imgs/home/longArrow.svg";
import Frame1 from "@/public/imgs/home/Frame_1.png";
import Frame2 from "@/public/imgs/home/Frame_2.png";
import Frame3 from "@/public/imgs/home/Frame_3.png";
import Frame4 from "@/public/imgs/home/Frame_4.png";
import Benifit1 from "@/public/imgs/home/Benifit_1.png";
import Benifit2 from "@/public/imgs/home/Benifit_2.png";
import Benifit3 from "@/public/imgs/home/Benifit_3.png";
import Benifit4 from "@/public/imgs/home/Benifit_4.png";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import HeroCarousel from "@/components/herocarousel";

import Mediapopup from "@/components/ui/Mediapopup";
import AIManagement from "../aiManagement";
import ScrollDowntxt from "@/components/scrollDowntxt";
import Link from "next/link";

export default function HomeHero() {
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoPlayer = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<Boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };
  useEffect(() => {
    if (playingVideo) {
      console.log(videoContainer, videoPlayer);
      // videoPlayer.current.style.width = videoContainer.current.clientWidth + 'px';
      // videoPlayer.current.style.height=videoContainer.current.clientHeight + 'px';
    }
  }, [playingVideo])
  const [isBtnNum, setIsBtnNum] = useState<Number>(2);
  const mouseOvered = (btnNum: any) => {
    console.log('overed');
    setIsBtnNum(btnNum);
  }


  return (
    <section className="" >
      <div className="max-w-5xl  mx-auto relative">
        {/* Illustration behind hero content */}
        {/* Hero content */}
        <div className="relative pt-16 lg:pt-24">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center ">
            <div
              className="leading-[50px] lg:leading-[100px] font-extrabold "
            >
              <abbr className="text-[32px] sm:text-[40px] lg:text-[75px] tracking-wide px-4 lg:px-8 custom-start-lg-effect ">AI-Powered Test Data <abbr className="px-4 lg:px-8 custom-end-lg-effect">Management.</abbr></abbr>
            </div>
            <div className="block md:hidden w-full py-8 wave-bg ">
              <HeroCarousel />
            </div>

            <div className="max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  href="https://calendly.com/hakkaren-thomas/demo"
                  target="_blank"
                  className="w-full lg:w-fit btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
                >
                  <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
                  </svg>
                  Try it now !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex Hero-section-1 relative pb-10 mb-pb-16">
        <div className="max-w-5xl mx-auto text-center flex justify-center items-end">
          <Link href="/products/loadlens">
            <div className="duration-700 ease-linear hero-section-Bnt hero-center-btn mx-8">
              <div className="duration-700 ease-linear leadLens-btn hoverActive">
                <Image
                  src={loadLens_svg}
                  className="duration-700 ease-linear hero-section-icon"
                  alt="Loadlens"
                />
              </div>
            </div>
          </Link>
          <Link href="/products/dataforger">
            <div className="duration-700 ease-linear hero-section-Bnt hero-center-btn mx-8" >
              <div className="duration-700 ease-linear dataforger-btn hoverActive">
                <Image
                  src={dataforger_svg}
                  className="duration-700 ease-linear hero-section-icon"
                  alt="Loadlens"
                />
              </div>
            </div>
          </Link>
          <Link href="/products/nimbus">
            <div className="duration-700 ease-linear hero-section-Bnt hero-center-btn mx-8">
              <div className="duration-700 ease-linear nimbus-btn hoverActive" >
                <Image
                  src={nimbus_svg}
                  className="duration-700 ease-linear hero-section-icon"
                  alt="Loadlens"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block scroll-down-section relative py-10 -mt-10">
        <ScrollDowntxt />
      </div>
      <div className="relative py-14 px-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 flex-col-reverse">
          <div className="px-4 order-2 lg:order-1">
            <Image
              src={collaborativeImg}
              className="w-full"
              alt="sectionImage"
            />
            <div className="block lg:hidden w-full mt-8">
              <Link href="/solution">
                <button className="w-full font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Load more
                </button>
              </Link>
            </div>
          </div>
          <div className="px-4 order-1 lg:order-2">
            <h2><span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Collaborative Data, EaaS Load Testing Hub</span></h2>
            <p className=" mb-4">
              Hakkaren is a comprehensive platform offering Fake Data Generation, Environment as a Service (EaaS), and Load Testing Analysis in one place.
            </p>
            <p className=" mb-8">
              It goes beyond developers, enabling seamless collaboration for QA, CSM, PM, and even Sales.
              It goes beyond developers, enabling seamless collaboration for QA, CSM, PM, and even Sales.
            </p>
            <div className="hidden lg:block mt-4">
              <Link href="/solution">
                <span className="font-bold md-text-2xl text-black bg-white py-2 px-4 rounded">
                  Load more
                </span>
              </Link>

            </div>

          </div>
        </div>
      </div>
      <div className="hero-section wave-background relative py-2 lg:py-14">
        <div className="max-w-7xl lg:px-2 m-auto">
          <div className="w-full hero-play-card bg-dark shadow ">
            <div ref={videoContainer} className="hero-play-card-content">
              <div className="w-full h-full p-4 lg:p-10 flex flex-col justify-between">
                <div className="hero-play-card-text h-20">
                  <p>Fake Data Generation</p>
                  <p>Environment as a Service(EaaS),</p>
                  <p>and Load Testing Analysis</p>
                </div>
                <div className="hero-play-card-logo text-center lg:h-20 flex justify-center items-center">
                  <Image
                    src={logo}
                    height={120}
                    alt="logo"
                  />
                  <Image
                    onClick={() => { onPlayVideo() }}
                    className="mobile-hereo-play-btn cursor-pointer"
                    src={playIco}
                    height={100}
                    alt="playIco"
                  />
                </div>
                <div className=" md:h-20">
                  <div onClick={() => { onPlayVideo() }} className="hidden md:flex cursor-pointer hero-play-btn px-2 rounded-full bg-black justify-end items-center">
                    <span className="hero-play-btn-text px-6">Play</span>
                    <Image
                      src={playIco}
                      height={65}
                      alt="playIco"
                    />
                  </div>
                </div>
              </div>
              <Mediapopup playingVideo={playingVideo} src={'videos/demo.mp4'} closePlayingVideo={setPlayingVideo} />

            </div>
          </div>
        </div>
      </div>
      <div className="hero-section lg:h-[507px] flex justify-center items-center relative py-2 lg:py-14 mt-8 mb-8 lg:mt-16 lg:mb-16">
        <div className="hidden lg:block about-us-section-bg"></div>
        <div className="max-w-7xl mx-auto z-20">
          <div className="hidden lg:flex justify-center items-center">
            <h4 className="about-us-section-md-text px-8" >
              <span className="flex justify-start items-center about-us-section-sm-text mr-16" >ABOUT HAKKAREN
                <svg width="64" height="1" viewBox="0 0 64 1" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <rect width="64" height="1" fill="white"></rect>
                </svg>
              </span>
              <span className="about-us-section-main-text">
                <abbr className=" mr-2 light-blue"><i>" </i>Hakkaren strives</abbr> to be your streamlined solution for comprehensive <abbr className="yellow">testing needs. <i>"</i></abbr>
              </span>
            </h4>
          </div>
          <div className="block lg:hidden w-full px-8">
            <span className="">
              <i>" </i><abbr className=" mr-2 light-blue">Hakkaren strives</abbr> to be your streamlined solution for comprehensive <abbr className="yellow">testing needs. <i>"</i></abbr>
            </span>
          </div>
          <div className="block w-full lg:hidden  mt-8 px-8 ">
            <Link href="/company">
              <button className="w-full lg:w-auto rounded lg:px-12 py-2 bg-white text-black font-bold">About Us</button>
            </Link>
          </div>
          <div className="hidden w-full lg:flex justify-end px-8 mt-8 lg:-mt-7">
            <Link href="/company">
              <button className="w-full lg:w-auto rounded lg:px-12 py-2 bg-white text-black font-bold">About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="hidden w-full lg:flex justify-between items-center py-8 px-8 mb-8">
            <span className="px-6 custom-start-lg-effect text-size-30 py-2">
              Analyzing
            </span>
            <svg width="128" height="16" viewBox="0 0 128 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z" fill="url(#paint0_linear_4_25045)" />
              <defs>
                <linearGradient id="paint0_linear_4_25045" x1="127" y1="8" x2="1" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3860D2" />
                  <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>


            <span className="custom-start-white-effect">
              <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
                Generating
              </span>
            </span>
            <svg width="128" height="16" viewBox="0 0 128 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z" fill="url(#paint0_linear_4_25046)" fillOpacity="0.6" />
              <defs>
                <linearGradient id="paint0_linear_4_25046" x1="127" y1="8" x2="1" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="custom-start-white-effect">
              <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
                Seeding
              </span>
            </span>
            <svg width="128" height="16" viewBox="0 0 128 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM127.707 8.70711C128.098 8.31658 128.098 7.68342 127.707 7.29289L121.343 0.928932C120.953 0.538408 120.319 0.538408 119.929 0.928932C119.538 1.31946 119.538 1.95262 119.929 2.34315L125.586 8L119.929 13.6569C119.538 14.0474 119.538 14.6805 119.929 15.0711C120.319 15.4616 120.953 15.4616 121.343 15.0711L127.707 8.70711ZM1 9H127V7H1V9Z" fill="url(#paint0_linear_4_25046)" fillOpacity="0.6" />
              <defs>
                <linearGradient id="paint0_linear_4_25046" x1="127" y1="8" x2="1" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#3860D2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <span className="custom-start-white-effect">
              <span className="px-6 custom-purple rounded-l-full text-size-30 py-2">
                Connecting
              </span>
            </span>

          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-2">
            <div className="hero-left-content px-8 order-2 lg:order-1">
              <Image
                className="hero-codeImg mb-4"
                src={codeImg}
                alt="code_main"
              />
              <div className="flex justify-center items-center rounded-lg border-white border-2 py-2 lg:py-6 bg-blue-500 font-bold text-lg">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
                </svg>
                <span className="text-white font-bold text-xl">Enter</span>
              </div>
            </div>
            <div className="hero-right-content text-start px-4 order-1 lg:order-2">
              <h2 ><span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-effect">Exploring How Nimbus Works: A Brief Overview</span></h2>

              <p className="mb-2 lg:mb-6">DataForger solves your data seeding problem, but what about environment conflicts? Here comes Nimbus. </p>
              <ul className="list-disc pl-8 pr-8">
                <li className="mb-2 lg:mb-6">Personal ephemeral environments: Avoid conflicts with dedicated environments for each team member.</li>
                <li className="mb-2 lg:mb-6">Integrates with DataForger: Creates a powerful platform for streamlined testing.</li>
                <li className="mb-2 lg:mb-6">Integrates with DataForger: Creates a powerful platform for streamlined testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section relative px-4 py-12 my-0 lg:my-16">
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="hero-left-content px-4 order-1">
              <h2 ><span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Exploring How Nimbus Works: A Brief Overview</span></h2>
              <p className="mb-2 lg:mb-6">DataForger solves your data seeding problem, but what about environment conflicts? Here comes Nimbus. </p>
              <ul className="list-disc pl-8 lg:pl-8 pr-8">
                <li className="mb-2 lg:mb-6">Personal ephemeral environments: Avoid conflicts with dedicated environments for each team member.</li>
                <li className="mb-2 lg:mb-6">Integrates with DataForger: Creates a powerful platform for streamlined testing.</li>
              </ul>
              <p className="px-4 lg:px-8 font-extrabold">
                Create an isolated environment where anyone can<br /> seed desired usere scenarios
              </p>
              <div className="hidden lg:block w-full mt-8 ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="hero-right-content px-4 order-2">
              <Image
                src={ImageNimbus}
                className="w-full"
                height={552}
                alt="Nimbus Image"
              />
              <div className="block lg:hidden w-full mt-8 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="hero-left-content px-4 order-2 lg:order-1">
              <Image
                src={loanImage}
                className="w-full"
                alt="hero section img"
              />
              <div className="block lg:hidden w-full mt-8 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="hero-right-content px-4 order-1 lg:order-2">
              <h2><span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">You can seed the data with Nimbus...</span></h2>
              <p className="mb-2 lg:mb-6">Streamlinee your load testing setup and analysise=.</p>
              <ul className="list-disc px-4 lg:pl-8 pr-8">
                <li className="mb-2 lg:mb-6">Seamless integration with DataForger: Easily set up large data scenarios with DataForger.</li>
                <li className="mb-2 lg:mb-6">Environments setup with Nimbus: Define your environment requirements for accurate testing.</li>
                <li className="mb-2 lg:mb-6">Detailed analysise: Gain insights from your lead tests with comprehensive analysis.</li>
              </ul>
              <div className="hidden lg:block w-full mt-8 ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16">
        <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto text-start lg:text-center z-20 px-2">
          <h2 className="px-4 lg:px-0 max-w-4xl mx-auto text-white pb-3"><span className="-ml-4 lg:-ml-0 custom-start-lg-effect pl-4 lg:pl-8">Exploring How LoadLends Works: A Brief Overview</span></h2>
          {/* <h2 className="text-white">Brief Overview</h2> */}
          <div className="w-full py-0 lg:py-16">
            <div className="w-full flex items-center justify-between flex-col lg:flex-row">
              <div className="LoadLean-grid-item">
                <Image
                  src={UploadIcon}
                  alt="upload"
                />
                <span>Upload test script</span>
              </div>
              <div className="curveArrow">
                <Image src={svgCuverArrow} className="rotate-90 ml-32 lg:rotate-0 lg:ml-0 pb-12" alt="arrow" />
              </div>
              <div className="LoadLean-grid-item">
                <Image
                  src={LeadIcon}
                  alt="upload"
                />
                <span>LoadLens</span>
              </div>
              <div className="curveArrow">
                <span className="light-blue rotate-90 ml-36 pl-20 lg:pl-0 lg:ml-0 lg:rotate-0">Seed data</span>
                <Image src={svgCuverArrow} className="rotate-90 ml-32 scale-x-1 pb-12 lg:pb-0 lg:ml-0 lg:rotate-180 lg:scale-x-[-1] " alt="arrow" />
              </div>
              <div className="LoadLean-grid-item">
                <Image
                  src={DataforgerIcon}
                  alt="upload"
                />
                <span>Dataforger</span>
              </div>
              <div className="curveArrow">
                <Image src={svgCuverArrow} className="rotate-90 ml-32 lg:rotate-0 lg:ml-0 lg:pb-3 pb-12" alt="arrow" />
                <span className="light-blue rotate-90 ml-36 pr-24 lg:pl-0 lg:ml-0 lg:rotate-0 ">Deploy App</span>
              </div>
              <div className="LoadLean-grid-item">
                <Image
                  src={NimbusIcon}
                  alt="upload"
                />
                <span>Nimbus</span>
              </div>
              <div className="block lg:hidden curveArrow absolute -top-80 -left-28">
                <span className="-rotate-90 pr-20 yellow">Analyze</span>
                <Image src={longArrow} className="rotate-90" alt="arrow" />
              </div>
            </div>
            <div className="hidden w-full lg:flex justify-end px-24 ">
              <div className="curveArrow w-8/12">
                <Image src={longArrow} className=" lg:w-full" alt="arrow" />
                <span className="-mt-12 yellow">Analyze</span>
              </div>
            </div>
          </div>
          <div className="w-full text-center py-0 lg:py-8 px-2 lg:px-0">
            <p className="hidden lg:block pb-8">Streamline your lead testing setup and analysis</p>
            <button className="w-full flex justify-center items-center rounded px-12 py-2 bg-white text-black font-bold">
              <svg className="mr-2 fill-black" width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" />
              </svg>
              Try now hakkaren!
            </button>
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="hero-left-content">
              <h2 className="text-white"><span className="custom-start-lg-effect pl-4 lg:pl-12">Our Products</span></h2>
            </div>
            <div className="hidden lg:block hero-right-content">
              <p className="mb-6 text-size-30">We research generative models and how to align them with human values.</p>
              <span className="underline underline-offset-4"><a href="#">learn more</a></span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
            <div className="hero-grid-item ">
              <Link href="/products/dataforger">
                <Image src={Frame1} alt="dataforger" className="mb-4 w-full" />
                <h4 className="mb-2 font-extrabold">
                  DataForger:
                </h4>
                <p>Streamlines data seeding for QA, Developers, CSM, PM, Sales, and more.</p>
              </Link>
            </div>
            <div className="hero-grid-item">
              <Link href="/products/nimbus">
                <Image src={Frame2} alt="numbus" className="mb-4 w-full" />
                <h4 className="mb-2 font-extrabold">
                  Nimbus:
                </h4>
                <p>EaaS platform creates personal ephemeral environments for conflict-free testing and integrates with DataForger and LoadLens.</p>
              </Link>
            </div>
            <div className="hero-grid-item">
              <Link href="/products/loadlens">
                <Image src={Frame3} alt="loadlens" className="mb-4 w-full" />
                <h4 className="mb-2 font-extrabold">
                  LoadLens:
                </h4>
                <p>Streamlines data seeding for QA, Developers, CSM, PM, Sales, and more.</p>
              </Link>
            </div>

            <div className="hidden lg:block hero-grid-item">
              <Link href="/products">
                <Image src={Frame4} alt="load_more" className="mb-4" />
                <h4 className="mb-2 font-extrabold">
                  Product Details
                </h4>
              </Link>
            </div>


            <div className="block lg:hidden w-full">
              <Link href="/products">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="hero-left-content">
              <h2 className="text-white"><span className="custom-start-lg-effect pl-4 lg:pl-12">Benefits</span></h2>
            </div>
            <div className="hidden lg:block hero-right-content">
              <p className="mb-6 text-size-30">Developing safe and beneficial AI requires people from a wide range of disciplines.</p>
              <span className="underline underline-offset-4"><a href="#">view careers</a></span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
            <div className="hero-grid-item">
              <Image src={Benifit1} alt="team" className="mb-4 w-full" />
              <h4 className="mb-2 font-extrabold">
                Team collaboration:
              </h4>
              <p className="hero-grid-text">Shared platform for streamlined testing across departments</p>
            </div>
            <div className="hero-grid-item">
              <Image src={Benifit2} alt="increased" className="mb-4 w-full" />
              <h4 className="mb-2 font-extrabold">
                Increased efficiency:
              </h4>
              <p className="hero-grid-text">Simplified data generation, environment provisioning, and load testing.</p>
            </div>
            <div className="hero-grid-item">
              <Image src={Benifit3} alt="Improved" className="mb-4 w-full" />
              <h4 className="mb-2 font-extrabold">
                Improved accuracy:
              </h4>
              <p className="hero-grid-text">Realistic data and dedicated environments for reliable testing.</p>
            </div>
            <div className="hero-grid-item">
              <Image src={Benifit4} alt="Reduced" className="mb-4 w-full" />
              <h4 className="mb-2 font-extrabold">
                Reduced costs:
              </h4>
              <p className="hero-grid-text">Eliminates the need for manual data seeding and environment management.</p>
            </div>
            <div className="block lg:hidden w-full ">
              <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <AIManagement />
      <div className="hero-section relative py-12 my-0 lg:my-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="hero-left-content">
              <h2 className="text-white"><span className="custom-start-lg-effect pl-4 lg:pl-8">Our Blog</span></h2>
            </div>
            <div className="hidden lg:block hero-right-content">
              <p className="mb-6 text-size-30">We research generative models and how to align them with human values.</p>
              <span className="underline underline-offset-4"><Link href="/blog/blogpost">learn about our blog</Link></span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-12 my-12">
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog1} alt="Blog1" className="mb-4 w-full h-[260px] lg:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>

            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog2} alt="Blog2" className="mb-4 w-full h-[260px] lg:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>
            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog3} alt="Blog3" className="mb-4 w-full h-[260px] lg:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>
            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog4} alt="Blog4" className="mb-4 w-full h-[260px] lg:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>
            </div>
            <div className="block lg:hidden w-full ">
              <Link href="/blog">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
