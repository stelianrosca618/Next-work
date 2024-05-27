"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Step1Img from "@/public/imgs/howitwork/howitworkStep1.png";
import Step2Img from "@/public/imgs/howitwork/howitworkStep2.png";
import step3Img from "@/public/imgs/howitwork/howitworkStep3.png";
import step4Img from "@/public/imgs/howitwork/howitworkStep4.png";
import step5Img from "@/public/imgs/howitwork/howitworkStep5.png";
import playIco from "@/public/imgs/home/playIco.svg";

import Mediapopup from "@/components/ui/Mediapopup";
import AIManagement from "@/components/aiManagement";


export default function HowItWorks() {
  const howitDropDown = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const [howitDropdownOpen, setHowitDropdownOpen] = useState<boolean>(false);
  const [playingVideo, setPlayingVideo] = useState<boolean>(false);
  const onPlayVideo = () => {
    setPlayingVideo(!playingVideo);
  };
  const [chooseType, setChooseType] = useState<Number>(1);
  return (
    <section className="relative overflow-hidden">
      <div className="howitwork-section relative px-4">
        <div className="max-w-7xl mx-auto mt-8 lg:mt-16">
          <h1
            className="lg:h1 mb-6 font-extrabold text-start lg:text-center px-2"
          >
            <span className="-ml-4 lg:-ml-8 px-4 lg:px-8 custom-start-lg-effect">How It works</span>
          </h1>
          <p className="py-4 lg:py-6 w-full lg:w-3/4 mx-auto text-start lg:text-center px-2">
            Ever want to test a specific user or scenario, but data seeding is a pain? Tired of constantly requesting data seeding to developers? DataForger solves this and more.
          </p>
          <div data-aos="fade-up" className="hidden lg:grid grid-cols-3 gap-10 mt-1 lg:mt-8 py-6">
            <button onClick={() => { setChooseType(1) }} className={chooseType == 1 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4_9182)">
                  <path d="M14.9088 3.30839C13.2969 4.27408 11.8483 5.14073 10.3976 6.01151C9.88553 6.31896 9.22038 6.67182 9.75495 7.34037C9.95898 7.58386 10.7751 7.56529 11.1607 7.35688C13.7621 5.91247 16.3003 4.33599 18.8935 2.86475C19.8058 2.32402 20.8735 2.11514 21.9194 2.27279C22.9653 2.43043 23.9264 2.94512 24.6431 3.7314C25.3525 4.47319 25.7925 5.43612 25.8914 6.46322C25.9903 7.49031 25.7423 8.52101 25.1879 9.38732C24.7571 10.0292 24.1966 10.5715 23.5434 10.9782C21.246 12.3896 18.8976 13.7061 16.5982 15.0866C16.0901 15.392 15.7188 15.4291 15.2087 15.0866C14.2355 14.4531 13.2112 13.9001 12.0483 13.2295C13.7846 12.1977 15.3556 11.2754 16.9328 10.3406C18.3916 9.48224 19.881 8.67336 21.299 7.74687C21.6173 7.54053 21.9376 6.84308 21.8213 6.54388C21.5826 5.92485 21.0052 6.13119 20.5217 6.41801C18.2712 7.75719 15.9391 8.96018 13.7723 10.417C10.1181 12.8807 6.68836 11.3125 5.5519 7.01022C5.30023 6.1192 5.18667 5.19411 5.21525 4.26789C5.38256 1.26557 8.19003 -0.368681 10.8547 0.966372C12.1972 1.6535 13.4704 2.47476 14.9088 3.30839Z" fill="white" />
                  <path d="M15.1348 21.5472C12.1294 19.7891 9.31177 18.1239 6.47574 16.5061C5.90241 16.1781 5.16382 15.297 4.59253 16.24C3.96411 17.2717 5.14137 17.5049 5.72898 17.8598C7.99373 19.2361 10.3013 20.5423 12.5803 21.8959C15.1715 23.4352 15.9611 26.1239 14.3044 28.6269C13.4306 29.9445 12.2892 31.0587 10.9563 31.8954C8.48136 33.4099 5.62901 31.9366 5.27195 29.0437C5.06792 27.4486 5.23523 25.8082 5.23523 23.9944C6.73078 24.8487 8.09166 25.6287 9.45459 26.4025C9.74228 26.5655 10.03 26.8151 10.3299 26.8399C10.6298 26.8647 11.1256 26.7347 11.2419 26.5139C11.3582 26.2931 11.2419 25.769 11.0379 25.5585C10.7155 25.2242 10.2442 25.0385 9.83205 24.7971C7.58771 23.4744 5.31072 22.1724 3.06638 20.8311C0.581277 19.3496 -0.196082 16.5949 1.16277 14.2446C2.52161 11.8943 5.26787 11.2732 7.76317 12.728C9.95855 14.0073 12.1396 15.3114 14.3513 16.5577C14.943 16.892 15.1838 17.2779 15.1491 17.9629C15.0961 19.071 15.1348 20.1894 15.1348 21.5472Z" fill="white" />
                  <path d="M27.536 22.1792C27.536 20.1157 27.536 18.4278 27.536 16.7296C27.536 16.1642 27.5543 15.4915 26.7872 15.4915C25.971 15.4915 25.971 16.191 25.971 16.7998C25.971 19.6624 25.9792 22.5245 25.9955 25.3858C25.9955 28.3819 24.0776 30.5093 21.362 30.5011C18.6463 30.4928 16.6978 28.4025 16.6897 25.4105C16.6897 22.8828 16.7142 20.3551 16.657 17.8274C16.6407 17.0845 16.8815 16.6842 17.516 16.3582C18.4892 15.8568 19.4176 15.2645 20.4969 14.6331C20.5316 15.085 20.5744 15.3945 20.5744 15.702C20.5826 18.899 20.5867 22.0959 20.5867 25.2929C20.5867 25.8769 20.5867 26.531 21.3212 26.5537C22.123 26.5764 22.1557 25.8975 22.1536 25.2682C22.1536 22.3793 22.1291 19.4678 22.1536 16.5686C22.1781 13.6695 23.9389 11.8227 26.8035 11.734C28.5822 11.6522 30.3374 12.1697 31.7941 13.2052C33.8344 14.6703 34.1425 17.5385 32.247 19.1624C30.9208 20.2808 29.311 21.0587 27.536 22.1792Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_4_9182">
                    <rect width="33" height="32" fill="white" transform="translate(0.5 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              DataForger
            </button>
            <button onClick={() => { setChooseType(2) }} className={chooseType == 2 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M32.6464 14.1985C32.6464 21.1723 27.0288 26.6951 20.1506 26.6951C17.1474 26.6951 14.4355 25.727 12.3046 23.9835C14.1413 25.0046 16.2088 25.5385 18.3102 25.5343C25.1878 25.5343 30.8054 19.9168 30.8054 12.942C30.8054 8.96904 28.9657 5.48408 26.0601 3.15813C29.9345 5.28764 32.6464 9.4536 32.6464 14.2006V14.1985ZM22.8625 1.79992C28.7713 5.19079 30.8054 12.8427 27.4159 18.8491C25.865 21.4638 23.6366 23.2091 21.0218 24.2726C22.766 23.208 24.219 21.7568 25.3801 19.8178C28.7713 13.9091 26.7369 6.25641 20.7327 2.77007C17.3425 0.736714 13.3699 0.639527 9.98004 1.89814C13.7573 -0.329245 18.6969 -0.620807 22.8625 1.80061V1.79992ZM26.7369 28.9228C20.8285 32.3133 13.1765 30.2789 9.68951 24.273C8.13865 21.755 7.75197 18.9466 8.13865 16.1395C8.13865 18.1729 8.72108 20.2062 9.78739 22.1455C13.2727 28.0495 20.9253 30.181 26.9313 26.6951C30.3208 24.661 32.4517 21.367 33.1289 17.7828C33.1289 22.1428 30.9022 26.5021 26.7369 28.9224V28.9228ZM11.0457 31.247C5.13618 27.7607 3.0046 20.1077 6.49336 14.1034C8.04422 11.5841 10.2695 9.74344 12.7899 8.77639C11.1425 9.84062 9.59198 11.2922 8.52671 13.1343C7.69714 14.5582 7.15679 16.1319 6.93663 17.765C6.71648 19.3982 6.82085 21.0587 7.24377 22.6515C7.66669 24.2442 8.39984 25.7378 9.40117 27.0467C10.4025 28.3555 11.6523 29.4538 13.079 30.2786C16.4706 32.2161 20.5387 32.4105 23.9271 31.0533C20.1503 33.3782 15.2095 33.5726 11.0453 31.2474L11.0457 31.247ZM1.26143 18.8491C1.26143 11.8743 6.879 6.35394 13.7566 6.35394C16.7601 6.35394 19.4734 7.32271 21.6043 9.06623C19.768 8.04452 17.7004 7.51057 15.599 7.51536C8.72074 7.51536 3.10214 13.1329 3.10214 20.1063C3.10386 23.9814 4.94215 27.5649 7.8495 29.7926C3.9751 27.6638 1.26143 23.5954 1.26143 18.8491ZM7.07441 4.12483C8.49845 3.29567 10.0721 2.75564 11.7052 2.5357C13.3383 2.31576 14.9988 2.42023 16.5914 2.84312C18.1841 3.266 19.6776 3.999 20.9865 5.00011C22.2954 6.00122 23.3939 7.25076 24.219 8.67713C25.6734 11.2936 26.1566 14.1034 25.7682 16.8157C25.6734 14.8771 25.1878 12.7456 24.025 10.9056C20.6345 4.89923 12.885 2.86519 6.97722 6.35394C3.58773 8.29045 1.45684 11.6827 0.874063 15.2669C0.778254 10.9055 3.0046 6.45147 7.07441 4.12552V4.12483Z" fill="white" />
              </svg>

              LoadLens
            </button>
            <button onClick={() => { setChooseType(3) }} className={chooseType == 3 ? "howitworks-btn howitWork-actBtn" : "howitworks-btn"}>
              <svg className="mr-2" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4_9197)">
                  <path d="M28.7664 1.83565C25.5961 0.0892869 21.2233 -0.0390943 17.5625 2.01029C14.4063 3.78214 12.6936 7.79123 13.3794 11.9344C15.4976 12.5158 17.5335 13.8223 18.4511 15.8387C19.3686 17.855 18.8295 20.5973 16.9243 21.6989C17.7914 21.1976 18.0035 19.691 17.8438 18.714C17.6808 17.7758 17.2775 16.8971 16.6739 16.1653C15.179 14.4302 13.058 13.2389 10.7875 12.9557C7.57891 12.5612 4.20868 14.0168 2.27456 16.6373C0.340445 19.2578 -0.0790815 22.9317 1.20753 25.9279C1.81112 27.3335 2.77818 28.5975 4.04891 29.4348C6.76321 31.2284 10.7613 31.2945 13.5588 29.6406C16.3563 27.9867 18.0792 25.9072 20.1236 22.4116C21.7727 19.5938 23.4826 16.5589 25.8568 14.3349C28.231 12.1109 31.447 10.5288 34.6556 10.9866C33.8381 7.25693 31.9367 3.58202 28.7664 1.83565Z" fill="white" />
                  <path d="M32.6215 31.404C34.0604 32.3914 35.9011 32.6632 37.6231 32.4121C41.3605 31.8675 44.5971 28.7835 45.3586 25.0491C46.1201 21.3147 44.3476 17.1886 41.1288 15.1977C37.9099 13.2069 33.4671 13.4901 30.522 15.8727C29.3792 16.7968 28.472 17.9787 27.5909 19.1605C25.4802 21.9925 23.4377 24.8981 20.8981 27.3411C18.3585 29.7841 15.2443 31.7617 11.7778 32.2941C16.3571 32.7491 20.9468 31.5384 24.7215 28.8798C25.9361 28.0208 27.0424 27.0201 28.2795 26.2008C29.5166 25.3814 30.9228 24.7348 32.4019 24.7027C33.881 24.6706 35.4367 25.354 36.1533 26.6614C36.87 27.9688 36.4729 29.8776 35.1489 30.544C36.0571 29.9653 36.2057 28.5701 35.6254 27.6573C34.7733 26.315 31.888 25.5041 30.7415 26.9238C29.6147 28.3238 31.5236 30.6516 32.6215 31.404Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_4_9197">
                    <rect width="45.0612" height="32" fill="white" transform="translate(0.469238 0.5)" />
                  </clipPath>
                </defs>
              </svg>

              Nimbus
            </button>
          </div>
          <div className="block lg:hidden mt-1 lg:mt-8 py-6">
            <button className="howitworks-btn howitWork-actBtn w-full" onClick={(e) => {
              e.preventDefault();
              //setMobileNavOpen(false);
              setHowitDropdownOpen(!howitDropdownOpen);
            }}>
              {chooseType == 1 &&
                <>
                  <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4_9182)">
                      <path d="M14.9088 3.30839C13.2969 4.27408 11.8483 5.14073 10.3976 6.01151C9.88553 6.31896 9.22038 6.67182 9.75495 7.34037C9.95898 7.58386 10.7751 7.56529 11.1607 7.35688C13.7621 5.91247 16.3003 4.33599 18.8935 2.86475C19.8058 2.32402 20.8735 2.11514 21.9194 2.27279C22.9653 2.43043 23.9264 2.94512 24.6431 3.7314C25.3525 4.47319 25.7925 5.43612 25.8914 6.46322C25.9903 7.49031 25.7423 8.52101 25.1879 9.38732C24.7571 10.0292 24.1966 10.5715 23.5434 10.9782C21.246 12.3896 18.8976 13.7061 16.5982 15.0866C16.0901 15.392 15.7188 15.4291 15.2087 15.0866C14.2355 14.4531 13.2112 13.9001 12.0483 13.2295C13.7846 12.1977 15.3556 11.2754 16.9328 10.3406C18.3916 9.48224 19.881 8.67336 21.299 7.74687C21.6173 7.54053 21.9376 6.84308 21.8213 6.54388C21.5826 5.92485 21.0052 6.13119 20.5217 6.41801C18.2712 7.75719 15.9391 8.96018 13.7723 10.417C10.1181 12.8807 6.68836 11.3125 5.5519 7.01022C5.30023 6.1192 5.18667 5.19411 5.21525 4.26789C5.38256 1.26557 8.19003 -0.368681 10.8547 0.966372C12.1972 1.6535 13.4704 2.47476 14.9088 3.30839Z" fill="white" />
                      <path d="M15.1348 21.5472C12.1294 19.7891 9.31177 18.1239 6.47574 16.5061C5.90241 16.1781 5.16382 15.297 4.59253 16.24C3.96411 17.2717 5.14137 17.5049 5.72898 17.8598C7.99373 19.2361 10.3013 20.5423 12.5803 21.8959C15.1715 23.4352 15.9611 26.1239 14.3044 28.6269C13.4306 29.9445 12.2892 31.0587 10.9563 31.8954C8.48136 33.4099 5.62901 31.9366 5.27195 29.0437C5.06792 27.4486 5.23523 25.8082 5.23523 23.9944C6.73078 24.8487 8.09166 25.6287 9.45459 26.4025C9.74228 26.5655 10.03 26.8151 10.3299 26.8399C10.6298 26.8647 11.1256 26.7347 11.2419 26.5139C11.3582 26.2931 11.2419 25.769 11.0379 25.5585C10.7155 25.2242 10.2442 25.0385 9.83205 24.7971C7.58771 23.4744 5.31072 22.1724 3.06638 20.8311C0.581277 19.3496 -0.196082 16.5949 1.16277 14.2446C2.52161 11.8943 5.26787 11.2732 7.76317 12.728C9.95855 14.0073 12.1396 15.3114 14.3513 16.5577C14.943 16.892 15.1838 17.2779 15.1491 17.9629C15.0961 19.071 15.1348 20.1894 15.1348 21.5472Z" fill="white" />
                      <path d="M27.536 22.1792C27.536 20.1157 27.536 18.4278 27.536 16.7296C27.536 16.1642 27.5543 15.4915 26.7872 15.4915C25.971 15.4915 25.971 16.191 25.971 16.7998C25.971 19.6624 25.9792 22.5245 25.9955 25.3858C25.9955 28.3819 24.0776 30.5093 21.362 30.5011C18.6463 30.4928 16.6978 28.4025 16.6897 25.4105C16.6897 22.8828 16.7142 20.3551 16.657 17.8274C16.6407 17.0845 16.8815 16.6842 17.516 16.3582C18.4892 15.8568 19.4176 15.2645 20.4969 14.6331C20.5316 15.085 20.5744 15.3945 20.5744 15.702C20.5826 18.899 20.5867 22.0959 20.5867 25.2929C20.5867 25.8769 20.5867 26.531 21.3212 26.5537C22.123 26.5764 22.1557 25.8975 22.1536 25.2682C22.1536 22.3793 22.1291 19.4678 22.1536 16.5686C22.1781 13.6695 23.9389 11.8227 26.8035 11.734C28.5822 11.6522 30.3374 12.1697 31.7941 13.2052C33.8344 14.6703 34.1425 17.5385 32.247 19.1624C30.9208 20.2808 29.311 21.0587 27.536 22.1792Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_9182">
                        <rect width="33" height="32" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  DataForger
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              }
              {chooseType == 2 &&
                <>
                  <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.6464 14.1985C32.6464 21.1723 27.0288 26.6951 20.1506 26.6951C17.1474 26.6951 14.4355 25.727 12.3046 23.9835C14.1413 25.0046 16.2088 25.5385 18.3102 25.5343C25.1878 25.5343 30.8054 19.9168 30.8054 12.942C30.8054 8.96904 28.9657 5.48408 26.0601 3.15813C29.9345 5.28764 32.6464 9.4536 32.6464 14.2006V14.1985ZM22.8625 1.79992C28.7713 5.19079 30.8054 12.8427 27.4159 18.8491C25.865 21.4638 23.6366 23.2091 21.0218 24.2726C22.766 23.208 24.219 21.7568 25.3801 19.8178C28.7713 13.9091 26.7369 6.25641 20.7327 2.77007C17.3425 0.736714 13.3699 0.639527 9.98004 1.89814C13.7573 -0.329245 18.6969 -0.620807 22.8625 1.80061V1.79992ZM26.7369 28.9228C20.8285 32.3133 13.1765 30.2789 9.68951 24.273C8.13865 21.755 7.75197 18.9466 8.13865 16.1395C8.13865 18.1729 8.72108 20.2062 9.78739 22.1455C13.2727 28.0495 20.9253 30.181 26.9313 26.6951C30.3208 24.661 32.4517 21.367 33.1289 17.7828C33.1289 22.1428 30.9022 26.5021 26.7369 28.9224V28.9228ZM11.0457 31.247C5.13618 27.7607 3.0046 20.1077 6.49336 14.1034C8.04422 11.5841 10.2695 9.74344 12.7899 8.77639C11.1425 9.84062 9.59198 11.2922 8.52671 13.1343C7.69714 14.5582 7.15679 16.1319 6.93663 17.765C6.71648 19.3982 6.82085 21.0587 7.24377 22.6515C7.66669 24.2442 8.39984 25.7378 9.40117 27.0467C10.4025 28.3555 11.6523 29.4538 13.079 30.2786C16.4706 32.2161 20.5387 32.4105 23.9271 31.0533C20.1503 33.3782 15.2095 33.5726 11.0453 31.2474L11.0457 31.247ZM1.26143 18.8491C1.26143 11.8743 6.879 6.35394 13.7566 6.35394C16.7601 6.35394 19.4734 7.32271 21.6043 9.06623C19.768 8.04452 17.7004 7.51057 15.599 7.51536C8.72074 7.51536 3.10214 13.1329 3.10214 20.1063C3.10386 23.9814 4.94215 27.5649 7.8495 29.7926C3.9751 27.6638 1.26143 23.5954 1.26143 18.8491ZM7.07441 4.12483C8.49845 3.29567 10.0721 2.75564 11.7052 2.5357C13.3383 2.31576 14.9988 2.42023 16.5914 2.84312C18.1841 3.266 19.6776 3.999 20.9865 5.00011C22.2954 6.00122 23.3939 7.25076 24.219 8.67713C25.6734 11.2936 26.1566 14.1034 25.7682 16.8157C25.6734 14.8771 25.1878 12.7456 24.025 10.9056C20.6345 4.89923 12.885 2.86519 6.97722 6.35394C3.58773 8.29045 1.45684 11.6827 0.874063 15.2669C0.778254 10.9055 3.0046 6.45147 7.07441 4.12552V4.12483Z" fill="white" />
                  </svg>

                  LoadLens
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              }
              {chooseType == 3 &&
                <>
                  <svg className="mr-2" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4_9197)">
                      <path d="M28.7664 1.83565C25.5961 0.0892869 21.2233 -0.0390943 17.5625 2.01029C14.4063 3.78214 12.6936 7.79123 13.3794 11.9344C15.4976 12.5158 17.5335 13.8223 18.4511 15.8387C19.3686 17.855 18.8295 20.5973 16.9243 21.6989C17.7914 21.1976 18.0035 19.691 17.8438 18.714C17.6808 17.7758 17.2775 16.8971 16.6739 16.1653C15.179 14.4302 13.058 13.2389 10.7875 12.9557C7.57891 12.5612 4.20868 14.0168 2.27456 16.6373C0.340445 19.2578 -0.0790815 22.9317 1.20753 25.9279C1.81112 27.3335 2.77818 28.5975 4.04891 29.4348C6.76321 31.2284 10.7613 31.2945 13.5588 29.6406C16.3563 27.9867 18.0792 25.9072 20.1236 22.4116C21.7727 19.5938 23.4826 16.5589 25.8568 14.3349C28.231 12.1109 31.447 10.5288 34.6556 10.9866C33.8381 7.25693 31.9367 3.58202 28.7664 1.83565Z" fill="white" />
                      <path d="M32.6215 31.404C34.0604 32.3914 35.9011 32.6632 37.6231 32.4121C41.3605 31.8675 44.5971 28.7835 45.3586 25.0491C46.1201 21.3147 44.3476 17.1886 41.1288 15.1977C37.9099 13.2069 33.4671 13.4901 30.522 15.8727C29.3792 16.7968 28.472 17.9787 27.5909 19.1605C25.4802 21.9925 23.4377 24.8981 20.8981 27.3411C18.3585 29.7841 15.2443 31.7617 11.7778 32.2941C16.3571 32.7491 20.9468 31.5384 24.7215 28.8798C25.9361 28.0208 27.0424 27.0201 28.2795 26.2008C29.5166 25.3814 30.9228 24.7348 32.4019 24.7027C33.881 24.6706 35.4367 25.354 36.1533 26.6614C36.87 27.9688 36.4729 29.8776 35.1489 30.544C36.0571 29.9653 36.2057 28.5701 35.6254 27.6573C34.7733 26.315 31.888 25.5041 30.7415 26.9238C29.6147 28.3238 31.5236 30.6516 32.6215 31.404Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_9197">
                        <rect width="45.0612" height="32" fill="white" transform="translate(0.469238 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>

                  Nimbus
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </>
              }


            </button>
            <nav
              ref={howitDropDown}
              className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
              style={
                howitDropdownOpen
                  ? {
                    maxHeight: '300px',
                    opacity: 1,
                  }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-900 px-4 py-2">
                <li className="flex justify-start items-center">
                  <button onClick={() => { setChooseType(1); setHowitDropdownOpen(!howitDropdownOpen); }} className="w-full border-b-2 leading-8 p-[12px] flex justify-start items-center text-[24px] text-white font-extrabold">
                    <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_4_9182)">
                        <path d="M14.9088 3.30839C13.2969 4.27408 11.8483 5.14073 10.3976 6.01151C9.88553 6.31896 9.22038 6.67182 9.75495 7.34037C9.95898 7.58386 10.7751 7.56529 11.1607 7.35688C13.7621 5.91247 16.3003 4.33599 18.8935 2.86475C19.8058 2.32402 20.8735 2.11514 21.9194 2.27279C22.9653 2.43043 23.9264 2.94512 24.6431 3.7314C25.3525 4.47319 25.7925 5.43612 25.8914 6.46322C25.9903 7.49031 25.7423 8.52101 25.1879 9.38732C24.7571 10.0292 24.1966 10.5715 23.5434 10.9782C21.246 12.3896 18.8976 13.7061 16.5982 15.0866C16.0901 15.392 15.7188 15.4291 15.2087 15.0866C14.2355 14.4531 13.2112 13.9001 12.0483 13.2295C13.7846 12.1977 15.3556 11.2754 16.9328 10.3406C18.3916 9.48224 19.881 8.67336 21.299 7.74687C21.6173 7.54053 21.9376 6.84308 21.8213 6.54388C21.5826 5.92485 21.0052 6.13119 20.5217 6.41801C18.2712 7.75719 15.9391 8.96018 13.7723 10.417C10.1181 12.8807 6.68836 11.3125 5.5519 7.01022C5.30023 6.1192 5.18667 5.19411 5.21525 4.26789C5.38256 1.26557 8.19003 -0.368681 10.8547 0.966372C12.1972 1.6535 13.4704 2.47476 14.9088 3.30839Z" fill="white" />
                        <path d="M15.1348 21.5472C12.1294 19.7891 9.31177 18.1239 6.47574 16.5061C5.90241 16.1781 5.16382 15.297 4.59253 16.24C3.96411 17.2717 5.14137 17.5049 5.72898 17.8598C7.99373 19.2361 10.3013 20.5423 12.5803 21.8959C15.1715 23.4352 15.9611 26.1239 14.3044 28.6269C13.4306 29.9445 12.2892 31.0587 10.9563 31.8954C8.48136 33.4099 5.62901 31.9366 5.27195 29.0437C5.06792 27.4486 5.23523 25.8082 5.23523 23.9944C6.73078 24.8487 8.09166 25.6287 9.45459 26.4025C9.74228 26.5655 10.03 26.8151 10.3299 26.8399C10.6298 26.8647 11.1256 26.7347 11.2419 26.5139C11.3582 26.2931 11.2419 25.769 11.0379 25.5585C10.7155 25.2242 10.2442 25.0385 9.83205 24.7971C7.58771 23.4744 5.31072 22.1724 3.06638 20.8311C0.581277 19.3496 -0.196082 16.5949 1.16277 14.2446C2.52161 11.8943 5.26787 11.2732 7.76317 12.728C9.95855 14.0073 12.1396 15.3114 14.3513 16.5577C14.943 16.892 15.1838 17.2779 15.1491 17.9629C15.0961 19.071 15.1348 20.1894 15.1348 21.5472Z" fill="white" />
                        <path d="M27.536 22.1792C27.536 20.1157 27.536 18.4278 27.536 16.7296C27.536 16.1642 27.5543 15.4915 26.7872 15.4915C25.971 15.4915 25.971 16.191 25.971 16.7998C25.971 19.6624 25.9792 22.5245 25.9955 25.3858C25.9955 28.3819 24.0776 30.5093 21.362 30.5011C18.6463 30.4928 16.6978 28.4025 16.6897 25.4105C16.6897 22.8828 16.7142 20.3551 16.657 17.8274C16.6407 17.0845 16.8815 16.6842 17.516 16.3582C18.4892 15.8568 19.4176 15.2645 20.4969 14.6331C20.5316 15.085 20.5744 15.3945 20.5744 15.702C20.5826 18.899 20.5867 22.0959 20.5867 25.2929C20.5867 25.8769 20.5867 26.531 21.3212 26.5537C22.123 26.5764 22.1557 25.8975 22.1536 25.2682C22.1536 22.3793 22.1291 19.4678 22.1536 16.5686C22.1781 13.6695 23.9389 11.8227 26.8035 11.734C28.5822 11.6522 30.3374 12.1697 31.7941 13.2052C33.8344 14.6703 34.1425 17.5385 32.247 19.1624C30.9208 20.2808 29.311 21.0587 27.536 22.1792Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_9182">
                          <rect width="33" height="32" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    DataForger
                  </button>
                </li>
                <li className="flex justify-center items-center">
                  <button onClick={() => { setChooseType(2); setHowitDropdownOpen(!howitDropdownOpen); }} className="w-full border-b-2 leading-8 p-[12px] flex justify-start items-center text-[24px] text-white font-extrabold">
                    <svg className="mr-2" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M32.6464 14.1985C32.6464 21.1723 27.0288 26.6951 20.1506 26.6951C17.1474 26.6951 14.4355 25.727 12.3046 23.9835C14.1413 25.0046 16.2088 25.5385 18.3102 25.5343C25.1878 25.5343 30.8054 19.9168 30.8054 12.942C30.8054 8.96904 28.9657 5.48408 26.0601 3.15813C29.9345 5.28764 32.6464 9.4536 32.6464 14.2006V14.1985ZM22.8625 1.79992C28.7713 5.19079 30.8054 12.8427 27.4159 18.8491C25.865 21.4638 23.6366 23.2091 21.0218 24.2726C22.766 23.208 24.219 21.7568 25.3801 19.8178C28.7713 13.9091 26.7369 6.25641 20.7327 2.77007C17.3425 0.736714 13.3699 0.639527 9.98004 1.89814C13.7573 -0.329245 18.6969 -0.620807 22.8625 1.80061V1.79992ZM26.7369 28.9228C20.8285 32.3133 13.1765 30.2789 9.68951 24.273C8.13865 21.755 7.75197 18.9466 8.13865 16.1395C8.13865 18.1729 8.72108 20.2062 9.78739 22.1455C13.2727 28.0495 20.9253 30.181 26.9313 26.6951C30.3208 24.661 32.4517 21.367 33.1289 17.7828C33.1289 22.1428 30.9022 26.5021 26.7369 28.9224V28.9228ZM11.0457 31.247C5.13618 27.7607 3.0046 20.1077 6.49336 14.1034C8.04422 11.5841 10.2695 9.74344 12.7899 8.77639C11.1425 9.84062 9.59198 11.2922 8.52671 13.1343C7.69714 14.5582 7.15679 16.1319 6.93663 17.765C6.71648 19.3982 6.82085 21.0587 7.24377 22.6515C7.66669 24.2442 8.39984 25.7378 9.40117 27.0467C10.4025 28.3555 11.6523 29.4538 13.079 30.2786C16.4706 32.2161 20.5387 32.4105 23.9271 31.0533C20.1503 33.3782 15.2095 33.5726 11.0453 31.2474L11.0457 31.247ZM1.26143 18.8491C1.26143 11.8743 6.879 6.35394 13.7566 6.35394C16.7601 6.35394 19.4734 7.32271 21.6043 9.06623C19.768 8.04452 17.7004 7.51057 15.599 7.51536C8.72074 7.51536 3.10214 13.1329 3.10214 20.1063C3.10386 23.9814 4.94215 27.5649 7.8495 29.7926C3.9751 27.6638 1.26143 23.5954 1.26143 18.8491ZM7.07441 4.12483C8.49845 3.29567 10.0721 2.75564 11.7052 2.5357C13.3383 2.31576 14.9988 2.42023 16.5914 2.84312C18.1841 3.266 19.6776 3.999 20.9865 5.00011C22.2954 6.00122 23.3939 7.25076 24.219 8.67713C25.6734 11.2936 26.1566 14.1034 25.7682 16.8157C25.6734 14.8771 25.1878 12.7456 24.025 10.9056C20.6345 4.89923 12.885 2.86519 6.97722 6.35394C3.58773 8.29045 1.45684 11.6827 0.874063 15.2669C0.778254 10.9055 3.0046 6.45147 7.07441 4.12552V4.12483Z" fill="white" />
                    </svg>

                    LoadLens
                  </button>
                </li>
                <li className="flex justify-center items-center">
                  <button onClick={() => { setChooseType(3); setHowitDropdownOpen(!howitDropdownOpen); }} className="w-full border-b-2 leading-8 p-[12px] flex justify-start items-center text-[24px] text-white font-extrabold">
                    <svg className="mr-2" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_4_9197)">
                        <path d="M28.7664 1.83565C25.5961 0.0892869 21.2233 -0.0390943 17.5625 2.01029C14.4063 3.78214 12.6936 7.79123 13.3794 11.9344C15.4976 12.5158 17.5335 13.8223 18.4511 15.8387C19.3686 17.855 18.8295 20.5973 16.9243 21.6989C17.7914 21.1976 18.0035 19.691 17.8438 18.714C17.6808 17.7758 17.2775 16.8971 16.6739 16.1653C15.179 14.4302 13.058 13.2389 10.7875 12.9557C7.57891 12.5612 4.20868 14.0168 2.27456 16.6373C0.340445 19.2578 -0.0790815 22.9317 1.20753 25.9279C1.81112 27.3335 2.77818 28.5975 4.04891 29.4348C6.76321 31.2284 10.7613 31.2945 13.5588 29.6406C16.3563 27.9867 18.0792 25.9072 20.1236 22.4116C21.7727 19.5938 23.4826 16.5589 25.8568 14.3349C28.231 12.1109 31.447 10.5288 34.6556 10.9866C33.8381 7.25693 31.9367 3.58202 28.7664 1.83565Z" fill="white" />
                        <path d="M32.6215 31.404C34.0604 32.3914 35.9011 32.6632 37.6231 32.4121C41.3605 31.8675 44.5971 28.7835 45.3586 25.0491C46.1201 21.3147 44.3476 17.1886 41.1288 15.1977C37.9099 13.2069 33.4671 13.4901 30.522 15.8727C29.3792 16.7968 28.472 17.9787 27.5909 19.1605C25.4802 21.9925 23.4377 24.8981 20.8981 27.3411C18.3585 29.7841 15.2443 31.7617 11.7778 32.2941C16.3571 32.7491 20.9468 31.5384 24.7215 28.8798C25.9361 28.0208 27.0424 27.0201 28.2795 26.2008C29.5166 25.3814 30.9228 24.7348 32.4019 24.7027C33.881 24.6706 35.4367 25.354 36.1533 26.6614C36.87 27.9688 36.4729 29.8776 35.1489 30.544C36.0571 29.9653 36.2057 28.5701 35.6254 27.6573C34.7733 26.315 31.888 25.5041 30.7415 26.9238C29.6147 28.3238 31.5236 30.6516 32.6215 31.404Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_9197">
                          <rect width="45.0612" height="32" fill="white" transform="translate(0.469238 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>

                    Nimbus
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {chooseType == 1 &&
        <div className="howitwork-section relative px-4 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">01 step - </span>Create a project and upload your database schema (or dump file)</span></h2>
                <p className="py-6">Each project has its own hosted database.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step1Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">02 step - </span>Set up foreign keys and data generation types</span></h2>
                <p className="py-6 pr-8">Alternatively, use our AI-powered feature to automatically scan the type for you.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step2Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">03 step - </span>Set up foreign keys and data generation types</span></h2>
                <p className="py-6 pr-8">You can decide how you want to generate your data using the database schema.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step3Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">04 step - </span>Select the number of data entries you want to be generated</span></h2>
                <p className="py-6 pr-8">Then all your data or test scenarios are generated!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step4Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">05 step - </span>Connect to the database</span></h2>
                <p className="py-6 pr-8">Go to settings to find the connection info. You can use the URI to connect locally or to your CI seamlessly!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step5Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
          </div>
        </div>
      }
      {chooseType == 2 &&
        <div className="howitwork-section relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">01 step - </span>Create a project and upload your database schema (or dump file) For LoadLens</span></h2>
                <p className="py-6">Each project has its own hosted database.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step1Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">02 step - </span>Set up foreign keys and data generation types For LoadLens</span></h2>
                <p className="py-6 pr-8">Alternatively, use our AI-powered feature to automatically scan the type for you.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step2Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">03 step - </span>Set up foreign keys and data generation types For LoadLens</span></h2>
                <p className="py-6 pr-8">You can decide how you want to generate your data using the database schema.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step3Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">04 step - </span>Select the number of data entries you want to be generated For LoadLens</span></h2>
                <p className="py-6 pr-8">Then all your data or test scenarios are generated!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step4Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">05 step - </span>Connect to the database For LoadLens</span></h2>
                <p className="py-6 pr-8">Go to settings to find the connection info. You can use the URI to connect locally or to your CI seamlessly!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step5Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
          </div>
        </div>
      }
      {chooseType == 3 &&
        <div className="howitwork-section relative px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">01 step - </span>Create a project and upload your database schema (or dump file) For Nimbus</span></h2>
                <p className="py-6">Each project has its own hosted database.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step1Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">02 step - </span>Set up foreign keys and data generation types For Nimbus</span></h2>
                <p className="py-6 pr-8">Alternatively, use our AI-powered feature to automatically scan the type for you.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={Step2Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">03 step - </span>Set up foreign keys and data generation types For Nimbus</span></h2>
                <p className="py-6 pr-8">You can decide how you want to generate your data using the database schema.</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step3Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">04 step - </span>Select the number of data entries you want to be generated For Nimbus</span></h2>
                <p className="py-6 pr-8">Then all your data or test scenarios are generated!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step4Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div data-aos="fade-left" className="howitworks-left">
                <h2><span className=" howitwork-txt-effect -ml-2 lg:-ml-8 px-2 lg:px-8"><span className="howitwork-stepEffect">05 step - </span>Connect to the database For Nimbus</span></h2>
                <p className="py-6 pr-8">Go to settings to find the connection info. You can use the URI to connect locally or to your CI seamlessly!</p>
              </div>
              <div data-aos="fade-right" className="howitworks-right flex justify-end items-center">
                <Image
                  src={step5Img}
                  className="w-full"
                  height={358}
                  alt="step1"
                />
              </div>
            </div>
          </div>
        </div>
      }
      <div className="howitwork-section relative px-0 lg:px-4 py-0 lg:py-8">
        <div className="hidden lg:block wave-background absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl lg:px-2 m-auto">
          <div className="w-full howitwork-play-card bg-dark  shadow ">
            <div ref={videoContainer} className="hero-play-card-content">
              <div className="w-full h-full p-4 lg:p-10 flex flex-col justify-between">
                <div className="hero-play-card-text h-20">
                  <p>Fake Data Generation</p>
                  <p>Environment as a Service(EaaS),</p>
                  <p>and Load Testing Analysis</p>
                </div>
                <div className="hero-play-card-logo text-center lg:h-20 flex justify-center items-center">
                  <h2 className="howitwork-cardTxt">How It works?</h2>
                  <Image
                    onClick={() => { onPlayVideo() }}
                    className="mobile-hereo-play-btn cursor-pointer"
                    src={playIco}
                    height={80}
                    alt="playIco"
                  />
                </div>
                <div className=" md:h-20">
                  <div onClick={() => { onPlayVideo() }} className="hidden md:flex hero-play-btn px-2 rounded-full bg-black justify-end items-center">
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
      <AIManagement />
    </section>
  );
}
