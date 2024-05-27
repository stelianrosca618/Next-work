"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import AIManagement from "@/components/aiManagement";

import logo from "@/public/imgs/logos/Logo.svg";
import manualImg from "@/public/imgs/solution/manualImg.png";
import automatedImg from "@/public/imgs/solution/AutomatedImg.png";
import releaseImg from "@/public/imgs/solution/releaseDemo.png";
import customerImg from "@/public/imgs/solution/customerDemo.png";
import salesCustomerImg from "@/public/imgs/solution/salesCustomer.png";
import salesTrailImg from "@/public/imgs/solution/salesTrails.png";
export default function Solution() {
  const solutionBtnDropDown = useRef<HTMLDivElement>(null);
  const [solutionBtnDropDownOpen, setSolutionBtnDropDownOpen] = useState<Boolean>(false);
  const [chooseType, setChooseType] = useState<Number>(1);
  return (
    <section>
      <div className="solution-section relative py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto px-2 lg:px-0 md:px-8">
          <h1 className="font-extrabold w-full lg:w-3/4 px-6 md:px-4"><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Transforming work and creativity with AI</span></h1>

        </div>
        <div className="max-w-7xl mx-auto">
          <div className="solution-card my-8 md:rounded-2xl w-full h-[300px] md:h-[600px] ">
            <div className="w-full h-full bg-[#0000005c] flex justify-center items-center">
              <Image
                className="h-[50px] lg:h-[135px]"
                src={logo}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="solution-section relative py-10 lg:py-20 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="w-full hidden lg:grid grid-cols-3 gap-10">
            <button onClick={() => { setChooseType(1) }} className={chooseType == 1 ? "solutiontype-btn solutiontype-actBtn" : "solutiontype-btn"}>
              Engineering Team
            </button>
            <button onClick={() => { setChooseType(2) }} className={chooseType == 2 ? "solutiontype-btn solutiontype-actBtn" : "solutiontype-btn"}>
              Product and Support Team
            </button>
            <button onClick={() => { setChooseType(3) }} className={chooseType == 3 ? "solutiontype-btn solutiontype-actBtn" : "solutiontype-btn"}>
              Sales Team
            </button>
          </div>
          <div className="w-full block lg:hidden">
            <button onClick={(e) => { e.preventDefault(); setSolutionBtnDropDownOpen(!solutionBtnDropDownOpen); }} className="w-full flex justify-center items-center solutiontype-btn solutiontype-actBtn">
              {chooseType == 1 && <>Engineering Team</>}
              {chooseType == 2 && <>Product and Support Team</>}
              {chooseType == 3 && <>Sales Team</>}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <nav
              ref={solutionBtnDropDown}
              className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
              style={
                solutionBtnDropDownOpen
                  ? {
                    maxHeight: '300px',
                    opacity: 1,
                  }
                  : { maxHeight: 0, opacity: 0.8 }
              }
            >
              <ul className="bg-gray-900 py-2">
                <li className="w-full flex justify-center items-center">
                  <button onClick={() => { setChooseType(1); setSolutionBtnDropDownOpen(!solutionBtnDropDownOpen); }} className="w-full solutiontype-btn px-4 text-start">
                    Engineering Team
                  </button>
                </li>
                <li className="w-full flex justify-center items-center">
                  <button onClick={() => { setChooseType(2); setSolutionBtnDropDownOpen(!solutionBtnDropDownOpen); }} className="w-full solutiontype-btn px-4 text-start">
                    Product and Support Team
                  </button>
                </li>
                <li className="w-full flex justify-center items-center">
                  <button onClick={() => { setChooseType(3); setSolutionBtnDropDownOpen(!solutionBtnDropDownOpen); }} className="w-full solutiontype-btn px-4 text-start">
                    Sales Team
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {chooseType == 1 &&
        <div className="solution-section section-waveBg relative px-2">
          <div className="max-w-7xl mx-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-1">
                <h2><span className="px-4 md:px-8 custom-start-lg-effect">Manual Testing</span></h2>
                <p className="my-8 px-4 md:px-8">
                  Struggling with seeding data for specific test scenarios? Let DataForger streamline the process for you. Whether you need to replicate a user journey with a large dataset or a unique user scenario, DataForger accelerates the setup with ease.
                </p>
                <p className="my-8 px-4 md:px-8">
                  Say goodbye to the "it works on my end" scenario. DataForger fosters closer collaboration between QA and developers by replicating bugs efficiently and accurately. Imagine sending a complete testing environment, set up via Nimbus, to your developers – no lengthy test steps, no need for recording videos.  Just a click, and they're in the same scenario you tested, ready to pinpoint and fix issues faster.
                </p>
              </div>
              <div className="solution-right order-2 px-4">
                <Image
                  src={manualImg}
                  className="w-full"
                  alt="manual"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-2 lg:order-1 px-4">
                <Image
                  src={automatedImg}
                  className="w-full"
                  alt="automated"
                />
              </div>
              <div className="solution-righ order-1 lg:order-2">
                <h2><span className="px-4 md:px-8 custom-start-lg-effect">Automated Testing</span></h2>
                <p className="my-8 px-4 md:px-8">
                  The golden rule for automated tests? Start clean and stay isolated. Each test should be a self-contained unit, unaffected by others, to ensure reliability and accuracy. But building and maintaining a data seeding framework for this can be a cumbersome task.
                </p>
                <p className="my-8 px-4 md:px-8">
                  Enter DataForger and Nimbus, the dynamic duo that makes your life easier. With DataForger, setting up your automated tests becomes a breeze, even without a technical background. Create your own data seeding setup quickly and focus on what you do best – developing standout features and accelerating your pace.  With DataForger and Nimbus, automated testing becomes not just a task, but a seamless part of your development cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {chooseType == 2 &&
        <div className="solution-section section-waveBg relative px-2">
          <div className="max-w-7xl mx-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-1">
                <h2 className="px-4 md:px-8 "><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Pre-Release Demos and Testing</span></h2>
                <p className="my-8 px-4 md:px-8">
                  Are you a Product Manager eager to test pre-release features as if you were a major enterprise customer? Relying on backup or replica data is risky, especially with stringent GDPR and CCPA regulations and increasing concerns over data privacy. The traditional approach of using actual customer data isn't just legally precarious; it's a short-term fix fraught with privacy risks.
                </p>
                <p className="my-8 px-4 md:px-8">
                  This is where DataForger and Nimbus come into play. DataForger empowers you to create realistic data scenarios without touching actual customer data and with zero technical hassle. Nimbus offers you your own ephemeral environment for isolated testing. Together, they ensure that your pre-release demos and stakeholder presentations respect privacy concerns and comply with data protection laws, all while delivering accurate, real-world testing scenarios.
                </p>
              </div>
              <div className="solution-right order-2 px-4">
                <Image
                  src={releaseImg}
                  className="w-full"
                  alt="manual"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-2 lg:order-1">
                <Image
                  src={customerImg}
                  className="w-full"
                  alt="automated"
                />
              </div>
              <div className="solution-righ order-1 lg:order-2">
                <h2 className="px-4 md:px-8 "><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Customer Support Bug Triage</span></h2>
                <p className="my-8 px-4 md:px-8">
                  For Customer Support Managers, replicating a bug without the exact environment setup can be a daunting challenge. Using customer data directly is often not an option, especially in industries with high privacy standards. This leads to a bottleneck in the bug triage process, with engineering teams also struggling to replicate issues without an appropriate data setup.
                </p>
                <p className="my-8 px-4 md:px-8">
                  DataForger and Nimbus are the solution to this predicament. They enable Customer Support Managers to easily replicate customer scenarios without breaching data privacy. DataForger simplifies the data setup process, while Nimbus provides isolated environments for accurate replication of bugs. This streamlined approach not only respects customer privacy but also enhances the efficiency and effectiveness of your bug triage process.
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      {chooseType == 3 &&
        <div className="solution-section section-waveBg relative px-2">
          <div className="max-w-7xl mx-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-1">
                <h2 className="px-4 md:px-8 "><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Customer Demos without Production Data</span></h2>
                <p className="my-8 px-4 md:px-8">
                  As a sales professional, you know the impact of a compelling demo. But are you often stuck with a lackluster test account for demonstrations? Or find yourself spending excessive time manually setting up demo data?
                </p>
                <p className="my-8 px-4 md:px-8">
                  Enter DataForger, a game-changer for the Sales team. It enables you to efficiently seed data setups and create realistic, industry-specific scenarios. With DataForger's AI-powered data generation, your product demos become more engaging, vibrant, and effective, ultimately boosting sales opportunities.
                </p>
              </div>
              <div className="solution-right order-2 px-4">
                <Image
                  src={salesCustomerImg}
                  className="w-full h-full"
                  alt="manual"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
              <div className="solution-left order-2 lg:order-1 px-4">
                <Image
                  src={salesTrailImg}
                  className="w-full h-full"
                  alt="automated"
                />
              </div>
              <div className="solution-righ order-1 lg:order-2">
                <h2 className="px-4 md:px-8 "><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">Trials without Accessing Production Data</span></h2>
                <p className="my-8 px-4 md:px-8">
                  Want to offer prospective customers a trial of your product without overexposing features or risking your production database? DataForger and Nimbus offer an innovative solution. They allow you to set up trial access distinctly, maintaining a cleaner database that supports more accurate LLM models in your system.
                </p>
                <p className="my-8 px-4 md:px-8">
                  After the trial, effortlessly destroy the environment and access, ensuring no impact on your production data. This approach not only safeguards your data integrity but also provides a more controlled and secure trial experience for potential customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      }


      <AIManagement />
    </section>
  )
}