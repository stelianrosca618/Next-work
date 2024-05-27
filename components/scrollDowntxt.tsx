"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import scrollIco from "@/public/imgs/scrollIco.svg";
export default function ScrollDowntxt(){
    const [isScrolled, setIsScrolled] = useState<Boolean>(false);
    const scrolled = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
  
    }
  
    useEffect(() => {
      window.addEventListener('scroll', scrolled);
    }, [])

    return (
        <div className="max-w-3xl mx-auto text-center">
          {!isScrolled &&
            <span className="scrollDown_text duration-700 ease-linear animate-bounce font-sm text-yellow-550 flex justify-center items-center">
              <Image
                className="mx-2"
                src={scrollIco}
                width={17}
                alt="mousescroll"
              />
              SCROLL DOWN
            </span>
          }
        </div>
    )
}