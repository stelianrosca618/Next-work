"use client";
import Image from "next/image";
import FeatImage01 from "@/public/images/undraw_launch_day_4e04.svg";
import VideoThumb from "@/public/images/thumb1.png";
import ModalVideo from "@/components/modal-video";
import React, { useEffect, useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import BookDemo from "@/components/book-demo";
import ScrollDown from "@/components/scrollDown";
import playIco from "@/public/imgs/home/playIco.svg";
import dataforgerSvg from "@/public/imgs/home/Dataforger.svg";
import ForgerCarousel from "@/components/dataforger/forgerCarousel";
import ForgerMobileCarousel from "@/components/dataforger/forgerMobileCarousel";
import AIManagement from "@/components/aiManagement";
import powerIco1 from "@/public/imgs/Dataforger/powerIco.png"
import powerIco2 from "@/public/imgs/Dataforger/powerIco1.png";
import powerIco3 from "@/public/imgs/Dataforger/powerIco2.png";
import acceptImg from "@/public/imgs/Dataforger/acceptImg.png";
import mongoIco from "@/public/imgs/Dataforger/mongoIco.png";
import MySQLogo from "@/public/imgs/Dataforger/MySQL_logo.png";
import PostgreSQLogo from "@/public/imgs/Dataforger/PostgreSQLogo.png";
import Seamlessly from "@/public/imgs/Dataforger/seamlessly.png";
import playBtn from "@/public/imgs/Dataforger/playBtn.png";

import forgerItem1 from "@/public/imgs/Dataforger/forgerItem1.png";
import forgerItem2 from "@/public/imgs/Dataforger/forgerItem2.png";
import forgerItem3 from "@/public/imgs/Dataforger/forgerItem3.png";
import forgerItem4 from "@/public/imgs/Dataforger/forgerItem4.png";

import Mediapopup from "@/components/ui/Mediapopup";

export default function DataForger() {
  const sectionRef = useRef<HTMLElement>(null);
  const [svgDimensions, setSvgDimensions] = useState<any>({ width: 0, height: 0 });
  const videoContainer = useRef<HTMLDivElement>(null);
  const videoPlayer = useRef<HTMLDivElement>(null);
  const forgerItems = [
    {
      id: '01',
      imgsrc: forgerItem1,
      title: 'No production database access',
      detail: 'Eliminates the need to "synthesize" data.',
    },
    {
      id: '02',
      imgsrc: forgerItem2,
      title: 'Schema-based data generation',
      detail: 'Creates fake data based on your existing database schema.',
    },
    {
      id: '03',
      imgsrc: forgerItem3,
      title: 'Inductry-specific data customization',
      detail: 'Choose the type of data generated based on your needs.',
    },
    {
      id: '04',
      imgsrc: forgerItem4,
      title: 'Easy database access',
      detail: 'Hosted database integrates seamlessly with your CI pipeline or locally.',
    },
    {
      id: '05',
      imgsrc: forgerItem1,
      title: 'Easy database access',
      detail: 'Hosted database integrates seamlessly with your CI pipeline or locally.',
    },
    {
      id: '06',
      imgsrc: forgerItem2,
      title: 'Easy database access',
      detail: 'Hosted database integrates seamlessly with your CI pipeline or locally.',
    }
  ];

  useEffect(() => {
    function handleResize() {
      if (sectionRef.current) {
        setSvgDimensions({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // call it once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [playingVideo, setPlayingVideo] = useState<Boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  }
  useEffect(() => {
    if (playingVideo) {
      // videoPlayer.current.style.width = videoContainer.current.clientWidth + 'px';
      // videoPlayer.current.style.height=videoContainer.current.clientHeight + 'px';
    }
  }, [playingVideo])
  return (
    <section ref={sectionRef as any} className="relative overflow-hidden ">
      <ScrollDown />
      <div className="dataforger-section relative py-4 md:py-12 pt-2 mt-12">
        <div className="hidden md:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-2">
          <h1 className="font-extrabold mb-4"><span className="custom-start-lg-effect px-8">DataForger</span></h1>
          <p className="px-6 py-4 md:py-8 mb-4">Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.</p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://calendly.com/hakkaren-thomas/demo"
              target="_blank"
              className="w-full md:w-fit btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
            >
              <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
              </svg>
              Try DataForger
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <div ref={videoContainer} className="dataforger-card flex rounded-none md:rounded-3xl " >
            <div className="flex justify-start items-end w-full h-full p-12">
              <div className="dataforger-overload">
                <Image
                  className="dataforger-logo"
                  src={dataforgerSvg}
                  height={300}
                  alt="dataForger"
                />
                <Image
                  onClick={() => { onPlayVideo() }}
                  src={playBtn}
                  className="block md:hidden dataforgerVideo-play cursor-pointer"
                  alt="pllay button"
                />
                <div className="playbtn-content">
                  <div onClick={() => { onPlayVideo() }} className="hidden hero-play-btn cursor-pointer px-2 rounded-full bg-black md:flex justify-end items-center">
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
      <div className="dataforger-section relative py-12">
        <div className="hidden md:block wave2-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto px-2">
          <h2 className=" md:w-5/6 px-4 md:px-8 "><span className="custom-start-lg-effect -ml-4 pl-4">Ever want to test a specific user or scenario, but data seeding is a pain?</span></h2>
          <p className="px-4 md:px-8 w-full md:w-4/6 my-8 ">Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.</p>
          <div className="w-full hidden md:block ">
            <ForgerCarousel items={forgerItems} />
          </div>
          <div className="w-full block md:hidden">
            <ForgerMobileCarousel items={forgerItems} />
          </div>

        </div>
      </div>
      <div className="dataforger-section lineWave_bg relative py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center px-4 md:px-8">
            <span className=" custom-start-yellow-effect -ml-4 pl-4">AI-Powered Test Data Management</span>
          </h2>
          <p className="w-full md:w-1/2 mx-auto my-8 text-center">
            DataForger solves your data seeding problem, but what about environment conflicts? Here comes Nimbus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-8 pt-6">
            <div className="text-center w-3/4 mx-auto md:w-full">
              <Image
                className="mx-auto mb-4"
                src={powerIco2}
                height={100}
                alt="power1"
              />
              <span className="power-text">No-code Test Data Seeding and Management Platform</span>
            </div>
            <div className="text-center w-3/4 mx-auto md:w-full">
              <Image
                className="mx-auto mb-4"
                src={powerIco3}
                height={100}
                alt="power1"
              />
              <span className="power-text">No need to access your production database</span>
            </div>
            <div className="text-center w-3/4 mx-auto md:w-full">
              <Image
                className="mx-auto mb-4"
                src={powerIco1}
                height={100}
                alt="power1"
              />
              <span className="power-text">No need to manually seed the test data repeatedly</span>
            </div>
          </div>
        </div>
      </div>
      <AIManagement />
      <div className="dataforger-section relative py-12">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="dataforger-left order-2 md:order-1">
              <Image
                src={acceptImg}
                className="w-full"
                height={480}
                alt="updated"
              />
            </div>
            <div className="dataforger-right order-1 md:order-2">
              <h2 className="px-4"><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Accept Major Databases</span></h2>
              <p className="px-4 md:px-8 my-8 w-full md:w-9/12">Inspired by Inception. Just like planting an idea in a dream, Inceptor plants specific test scenarios directly into your database.</p>
              <span className="font-extrabold px-4 md:px-8 py-4">Available Now:</span>
              <div className="flex px-4 md:px-8 py-4">
                <Image
                  src={mongoIco}
                  height={55}
                  alt="mongo ico"
                />
              </div>
              <span className="font-extrabold px-4 md:px-8 py-4">Coming Soon:</span>
              <div className="flex px-4 md:px-8 py-4">
                <Image
                  src={PostgreSQLogo}
                  height={94}
                  alt="postgreSQL"
                />
                <Image
                  className="mx-4"
                  src={MySQLogo}
                  height={94}
                  alt="Mysql"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dataforger-section relative py-12">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="dataforger-left py-12">
              <h2 className="px-4">
                <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Seamlessly connect from your local machine or CI workflows</span>
              </h2>

              <ul className="list-disc pl-14 pr-8 py-8">
                <li className="mb-2 md:mb-6">Hassle-free database hosting</li>
                <li className="mb-2 md:mb-6">Custom URI and secure access for effortless connection</li>
                <li className="mb-2 md:mb-6">Individual hosted databases ensure conflict-free and independent work</li>
              </ul>
              <div className="w-full px-8 hidden md:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="dataforger-right text-right">
              <Image
                src={Seamlessly}
                className="w-full"
                height={696}
                alt="seamlessly"
              />
              <div className="w-full px-8 mt-8 block md:hidden ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
