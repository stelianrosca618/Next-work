"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ScrollDown from "@/components/scrollDown";
import playIco from "@/public/imgs/home/playIco.svg";
import playBtn from "@/public/imgs/Dataforger/playBtn.png";
import nimbusIco from "@/public/imgs/home/Nimbus.svg";
import Evanescent from "@/public/imgs/Nimbus/Evanescent.png";

import nimbusItem1 from "@/public/imgs/Nimbus/nimbusItem1.png";
import nimbusItem2 from "@/public/imgs/Nimbus/nimbusItem2.png";
import nimbusItem3 from "@/public/imgs/Nimbus/nimbusItem3.png";
import nimbusItem4 from "@/public/imgs/Nimbus/nimbusItem4.png"
import integration from "@/public/imgs/Nimbus/integration.png";
import gitlab from "@/public/imgs/Nimbus/Gitlab.png";
import circleCi from "@/public/imgs/Nimbus/circle_ci.png";
import TravisCI from "@/public/imgs/Nimbus/Travis_CI.png";
import Jenkins from "@/public/imgs/Nimbus/Jenkins_logo.png";
import github from "@/public/imgs/Nimbus/github.png";
import Kubernets from "@/public/imgs/Nimbus/Kubernets_logo.png";
import ForgerCarousel from "@/components/dataforger/forgerCarousel";
import ForgerMobileCarousel from "@/components/dataforger/forgerMobileCarousel";
import AIManagement from "@/components/aiManagement";
import Mediapopup from "@/components/ui/Mediapopup";

export default function Nimbus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [svgDimensions, setSvgDimensions] = useState<any>({ width: 0, height: 0 });
  const videoContainer = useRef<HTMLDivElement>(null);
  const nimbsItems = [
    {
      id: '01',
      imgsrc: nimbusItem1,
      title: 'Personal ephemeral environments',
      detail: 'Avoid conflicts with dedicated environments for each team member',
    },
    {
      id: '02',
      imgsrc: nimbusItem2,
      title: 'Integrates with DataForger',
      detail: 'Creates a powerful platform for streamlined testing.',
    },
    {
      id: '03',
      imgsrc: nimbusItem3,
      title: 'Endless Possibilities',
      detail: 'Embrace Limitless Potential at Every Turn.',
    },
    {
      id: '04',
      imgsrc: nimbusItem4,
      title: 'Meticulous testing',
      detail: 'Hosted database integrates seamlessly with your CI pipeline or locally.',
    },
    {
      id: '05',
      imgsrc: nimbusItem1,
      title: 'Meticulous testing',
      detail: 'Hosted database integrates seamlessly with your CI pipeline or locally.',
    },
    {
      id: '06',
      imgsrc: nimbusItem2,
      title: 'Meticulous testing',
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
    }
  }, [playingVideo])

  return (
    <section ref={sectionRef as any} className="relative overflow-hidden">
      <ScrollDown />
      <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-12">
        <div className="hidden lg:block wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-2">
          <h1 className="font-extrabold mb-4"><span className="custom-start-lg-effect px-8">Nimbus</span></h1>
          <p className="px-6 py-4 lg:py-8 mb-4 w-full lg:w-3/4 mx-auto">DataForger solves your data seeding problem, but what about environment conflicts? Here comes Nimbus.</p>
          <div data-aos="fade-up" data-aos-delay="400" className="text-center">
            <a
              href="https://calendly.com/hakkaren-thomas/demo"
              target="_blank"
              className="w-full lg:w-fit btn-sm mx-auto text-white bg-purple-600 rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
            >
              <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
              </svg>
              Try Nimbus
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <div ref={videoContainer} className={playingVideo ? "nimbus-card inline-grid rounded-none lg:rounded-3xl" : "nimbus-card flex rounded-none lg:rounded-3xl"}>
            <div className="w-full h-full p-12">

              <div className="dataforger-overload">
                <Image
                  className="nimbus-logo"
                  src={nimbusIco}
                  height={300}
                  alt="nimbus"
                />
                <Image
                  src={playBtn}
                  onClick={() => { onPlayVideo() }}
                  className="block lg:hidden dataforgerVideo-play cursor-pointer"
                  alt="pllay button"
                />
              </div>
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
            <Mediapopup playingVideo={playingVideo} src={'/videos/demo.mp4'} closePlayingVideo={setPlayingVideo}/>
          </div>
        </div>
      </div>
      <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex w-full flex-col-reverse lg:flex-row">
            <div className="nimbus-left w-full lg:w-6/12">
              <Image
                src={Evanescent}
                width={855}
                height={610}
                alt="Evanescent"
              />
              <div className="w-full block lg:hidden mt-6 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="nimbus-right w-full lg:w-6/12">
              <h2 className="px-4 lg:px-8 mb-8">
                <span className="custom-start-lg-effect -ml-4 pl-4">Evanescent Environment for Every Pull Request</span>
              </h2>
              <p className="px-4 lg:px-8 mb-8">Test-Driven Development or Behavior-Driven Development are vital in today's software development process, making it essential to thoroughly test each pull request.</p>
              <p className="px-4 lg:px-8 mb-8">But making sure every PR's tests don't interfere with each other can be tough and time-consuming. Nimbus steps in to simplify your DevOps workflow, saving you from this routine work and putting your focus back on your actual tasks</p>
              <div className="w-full px-8 hidden lg:block ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-12">
        <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto mt-12 px-4">
          <h2 className="px-4 lg:px-8 mb-8">
            <span className="custom-start-lg-effect -ml-4 pl-4">Dedicated Individual Realm</span>
          </h2>
          <p className="px-4 lg:px-8 mb-8 w-full lg:w-1/2">Nimbus revolutionizes your team's workflow by equipping each individual with their own exclusive environment.</p>
          <div className="w-full hidden lg:block ">
            <ForgerCarousel items={nimbsItems} />
          </div>
          <div className="w-full block lg:hidden">
            <ForgerMobileCarousel items={nimbsItems} />
          </div>
          
        </div>
      </div>
      <div className="nimbus-section relative py-4 lg:py-12 pt-2 mt-6">
        <div className="max-w-7xl mx-auto mt-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="nimbus-left order-2 lg:order-1">
              <Image
                src={integration}
                height={650}
                className="w-full"
                alt="integration"
              />
            </div>
            <div className="nimbus-right order-1 lg:order-2">
              <h2 className="px-4 lg:px-8 mb-8">
                <span className="custom-start-effect -ml-4 pl-4">Integrations</span>
              </h2>
              <p className="px-4 lg:px-8 mb-8 w-full lg:w-3/4">Inspired by Inception. Just like planting an idea in a dream, Inceptor plants specific test scenarios directly into your database.</p>
              <span className="font-extrabold px-4 lg:px-8 py-4">CD/CI:</span>
              <div className="w-full lg:flex gap-4 py-4 px-4 lg:px-8 grid grid-cols-2">
                <Image
                  className="mx-2"
                  src={gitlab}
                  height={55}
                  alt="gitlab"
                />
                <Image
                  className="mx-2"
                  src={circleCi}
                  height={55}
                  alt="circleCi"
                />
              </div>
              <div className="w-full lg:flex gap-4 py-4 px-4 lg:px-8  grid grid-cols-3">
                <Image
                  className="mx-2"
                  src={TravisCI}
                  height={55}
                  alt="travisCI"
                />
                <Image
                  className="mx-2"
                  src={Jenkins}
                  height={55}
                  alt="jenkins"
                />
                <Image
                  className="mx-2"
                  src={github}
                  height={55}
                  alt="github"
                />
              </div>
              <span className="font-extrabold px-4 lg:px-8 py-4">Container:</span>
              <div className="w-full flex gap-4 py-4 px-4 lg:px-8">
                <Image
                  className="mx-2"
                  src={Kubernets}
                  height={55}
                  alt="Kubernets"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AIManagement />
      {/* <StarryBackground
        width={svgDimensions.width}
        height={svgDimensions.height}
      /> */}

    </section>
  );
}
