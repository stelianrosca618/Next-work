"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ScrollDown from "@/components/scrollDown";
import Mediapopup from "@/components/ui/Mediapopup";
import loadlensSvg from "@/public/imgs/home/Loadlens.svg";
import playBtn from "@/public/imgs/Dataforger/playBtn.png";
import playIco from "@/public/imgs/home/playIco.svg";
import largeDataImg from "@/public/imgs/loadlens/largetDataDB.png";
import runningAuto from "@/public/imgs/loadlens/runningAuto.png";
import performance from "@/public/imgs/loadlens/performanceImg.png";
import streamlineImg from "@/public/imgs/loadlens/streamlineImg.png";
import AIManagement from "@/components/aiManagement";

export default function Loadlens() {
  const videoContainer = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<Boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  }
  return (
    <section>
      <ScrollDown />
      <div className="loadlends-section relative py-4 lg:py-12 pt-2 mt-12">
        <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center px-2">
          <h1 className="font-extrabold mb-4"><span className="custom-start-lg-effect px-8">Loadlens</span></h1>
          <p className=" px-6 py-4 lg:py-8 mb-4">Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.</p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://calendly.com/hakkaren-thomas/demo"
              target="_blank"
              className="w-full lg:w-fit btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
            >
              <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
              </svg>
              Try Loadlens
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <div ref={videoContainer} className="loadlens-card flex rounded-none lg:rounded-3xl " >
            <div className="flex justify-start items-end w-full h-full p-12">
              <div className="dataforger-overload">
                <Image
                  className="dataforger-logo"
                  src={loadlensSvg}
                  height={300}
                  alt="dataForger"
                />
                <Image
                  onClick={() => { onPlayVideo() }}
                  src={playBtn}
                  className="block lg:hidden dataforgerVideo-play cursor-pointer"
                  alt="pllay button"
                />
                <div className="playbtn-content">
                  <div onClick={() => { onPlayVideo() }} className="hidden cursor-pointer hero-play-btn px-2 rounded-full bg-black lg:flex justify-end items-center">
                    <span className="hero-play-btn-text px-6">Play</span>
                    <Image
                      src={playIco}
                      height={65}
                      alt="playIco"
                    />
                  </div>
                </div>
              </div>

            </div>
            <Mediapopup playingVideo={playingVideo} src={'/videos/demo.mp4'} closePlayingVideo={setPlayingVideo} />
          </div>
        </div>
      </div>
      <div className="loadlends-section dataSet-bg relative py-4 lg:py-20 pt-2 mt-12 px-2">
        <div className="max-w-7xl mx-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="loadlens-left order-1">
              <h2 className="w-full px-8">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Large dataset testing</span>
              </h2>
              <ul className="list-disc pl-14 pr-8 py-8">
                <li className="mb-2 lg:mb-6">Seamless integration with DataForger: Easily set up large data scenarios with DataForger.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.c</li>
                <li className="mb-2 lg:mb-6">Detailed analysis: Gain insights from your load tests with comprehensive analysis.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.</li>
              </ul>
              <div className="w-full px-8 hidden lg:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Try now !</button>
              </div>
            </div>
            <div className="loadlens-right order-2">
              <Image
                className="block lg:hidden w-full"
                src={largeDataImg}
                alt="largeData"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="loadlens-section relative py-4 lg:py-20 pt-2 mt-12 px-2">
        <div className="max-w-7xl mx-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="loadlens-left order-2 lg:order-1">
              <Image
                src={runningAuto}
                className="w-full"
                alt="running auto"
              />
            </div>
            <div className="loadlens-right order-1 lg:order-2">
              <h2 className="px-8">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Running Automated Tests</span>
              </h2>
              <ul className="list-disc pl-14 pr-8 py-8">
                <li className="mb-2 lg:mb-6">Seamless integration with DataForger: Easily set up large data scenarios with DataForger.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.c</li>
                <li className="mb-2 lg:mb-6">Detailed analysis: Gain insights from your load tests with comprehensive analysis.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.</li>
              </ul>
              <div className="w-full px-8 hidden lg:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Try now !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loadlens-section relative py-4 lg:py-20 pt-2 mt-12 px-2">
        <div className="max-w-7xl mx-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="loadlens-left order-1">
              <h2 className="w-full px-8">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Performance Graph Analytics</span>
              </h2>
              <ul className="list-disc pl-14 pr-8 py-8">
                <li className="mb-2 lg:mb-6">Seamless integration with DataForger: Easily set up large data scenarios with DataForger.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.c</li>
                <li className="mb-2 lg:mb-6">Detailed analysis: Gain insights from your load tests with comprehensive analysis.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.</li>
              </ul>
              <div className="w-full px-8 hidden lg:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Try now !</button>
              </div>
            </div>
            <div className="loadlens-right order-2">
              <Image
                src={performance}
                className="w-full"
                alt="performance"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="loadlens-section relative py-4 lg:py-20 pt-2 mt-12 px-2">
        <div className="max-w-7xl mx-auto py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="loadlens-left order-2 lg:order-1">
              <Image
                src={streamlineImg}
                className="w-full"
                alt="streamline"
              />
            </div>
            <div className="loadlens-right order-1 lg:order-2">
              <h2 className="w-full px-8">
                <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">Streamline your load testing Analytics and analysis.</span>
              </h2>
              <ul className="list-disc pl-14 pr-8 py-8">
                <li className="mb-2 lg:mb-6">Seamless integration with DataForger: Easily set up large data scenarios with DataForger.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.c</li>
                <li className="mb-2 lg:mb-6">Detailed analysis: Gain insights from your load tests with comprehensive analysis.</li>
                <li className="mb-2 lg:mb-6">Environment setup with Nimbus: Define your environment requirements for accurate testing.</li>
              </ul>
              <div className="w-full px-8 hidden lg:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Try now !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AIManagement />
    </section>
  )
}