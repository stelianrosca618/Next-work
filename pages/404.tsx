import { useEffect } from 'react'
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'

import Image from "next/image";
import Footer from '@/components/ui/footer'

import "@/app/css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

import oopsImg from "@/public/imgs/oopsImg.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default function Custom404() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div
      className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased custom-purple text-gray-200 tracking-tight`}
    >
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <div className='max-w-7xl mx-auto my-8 px-3'>
          <Image
            src={oopsImg}
            className='mx-auto'
            alt='oop'
          />
          <h2 className='text-center font-extrabold my-8 uppercase'>Sorry.. page not found..</h2>
          <div className="w-full md:max-w-xs mt-4 mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/"
                className="w-full md:w-fit btn-sm text-white bg-blue rounded border-white hover:bg-purple-700 py-3 px-6 shadow-lg shadow-indigo-600/100"
              >
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
                </svg>
                GO HOME
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </div>
  )
}