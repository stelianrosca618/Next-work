"use client";
import Image from "next/image";
import codeImg from "@/public/imgs/home/code_main.png";
import mainCode from "@/public/imgs/products/main.png";
import Benefits from "@/components/benifits";
import AIManagement from "@/components/aiManagement";
export default function Products() {
  return (
    <section>
      <div className="products-section relative py-10 md:py-20 ">
        <div className="wave-bg absolute top-0 left-0 w-full h-full opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <h1 className="font-extrabold mb-8 md:text-start text-center"><span className="px-4 md:px-8 custom-start-lg-effect">Our Products</span></h1>
          <p className="text-center md:text-start px-4 md:px-8 w-full md:w-2/3">Hakkaren is a comprehensive platform offering Fake Data Generation, Environment as a Service (EaaS), and Load Testing Analysis in one place. It goes beyond developers, enabling seamless collaboration for QA, CSM, PM, and even Sales.</p>
        </div>
        <div className="max-w-7xl mx-auto text-center my-6 pb-12">
          <div className="hidden w-full md:flex justify-between items-center py-8 px-8 mb-8">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
            <div className="hero-left-content px-4 md:px-8 order-2 md:order-1">
              <Image
                className="hero-codeImg mb-4"
                src={codeImg}
                alt="code_main"
              />
              <div className="flex justify-center items-center rounded-lg border-white border-2 py-2 md:py-4 bg-blue font-bold text-lg">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="white" />
                </svg>
                <span className="text-white font-bold text-xl">Enter</span>
              </div>
            </div>
            <div className="hero-right-content text-start px-6 order-1 md:order-2">
              <h2><span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-effect">Exploring How Nimbus Works: A Brief Overview</span></h2>
              <p className="mb-2 md:mb-6">DataForger solves your data seeding problem, but what about environment conflicts? Here comes Nimbus. </p>
              <ul className="list-disc pl-6 pr-8">
                <li className="mb-2 md:mb-6">Personal ephemeral environments: Avoid conflicts with dedicated environments for each team member.</li>
                <li className="mb-2 md:mb-6">Integrates with DataForger: Creates a powerful platform for streamlined testing.</li>
                <li className="mb-2 md:mb-6">Integrates with DataForger: Creates a powerful platform for streamlined testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="products-section  bg-heavy-blue relative py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hero-left-content px-4 md:px-8  order-1 md:order-1">
              <h2 className=" mb-2 md:mb-6"><span className="px-4 md:px-8 custom-start-effect">DataForger</span></h2>
              <p className="px-4 md:px-8 mb-2 md:mb-6">DataForger: Streamlines data seeding for QA, Developers, CSM, PM, Sales, and more.</p>
              <ul className="list-disc pl-14 pr-8">
                <li className="mb-2 md:mb-6">No production database access: Eliminates the need to "synthesize" data.</li>
                <li className="mb-2 md:mb-6">Schema-based data generation: Creates fake data based on your existing database schema.</li>
                <li className="mb-2 md:mb-6">Industry-specific data customization: Choose the type of data generated based on your needs.</li>
                <li className="mb-2 md:mb-6">Easy database access: Hosted database integrates seamlessly with your CI pipeline or locally.</li>
              </ul>
              <div className="hidden md:block w-full px-8 mt-8 ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="hero-right-content text-start px-4 order-2 md:order-2">
              <Image
                className="hero-codeImg mb-4"
                src={mainCode}
                alt="code_main"
              />
              <div className="flex justify-center items-center rounded-lg border-white border-2 py-2 md:py-4 bg-yellow font-bold text-lg">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="black" />
                </svg>
                <span className="text-black font-bold text-xl">Enter</span>
              </div>
              <div className="block md:hidden w-full mt-8 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-section relative py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hero-left-content px-4 md:px-8 order-2 md:order-1">
              <Image
                className="hero-codeImg mb-4"
                src={codeImg}
                alt="code_main"
              />
              <div className="flex justify-center items-center rounded-lg border-white border-2 py-2 md:py-4 bg-blue font-bold text-lg">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" />
                </svg>
                <span className="text-white font-bold text-xl">Enter</span>
              </div>
              <div className="block md:hidden w-full mt-8 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold border-white border-2 ">Learn more</button>
              </div>
            </div>
            <div className="hero-right-content text-start px-4 order-1 md:order-2">
              <h2 className=" mb-2 md:mb-6"><span className="px-4 md:px-8 custom-start-effect">Nimbus</span></h2>
              <p className="px-4 md:px-8 mb-2 md:mb-6">DataForger: Streamlines data seeding for QA, Developers, CSM, PM, Sales, and more.</p>
              <ul className="list-disc pl-14 pr-8">
                <li className="mb-2 md:mb-6">No production database access: Eliminates the need to "synthesize" data.</li>
                <li className="mb-2 md:mb-6">Schema-based data generation: Creates fake data based on your existing database schema.</li>
                <li className="mb-2 md:mb-6">Industry-specific data customization: Choose the type of data generated based on your needs.</li>
                <li className="mb-2 md:mb-6">Easy database access: Hosted database integrates seamlessly with your CI pipeline or locally.</li>
              </ul>
              <div className="hidden md:block w-full px-8 mt-8 ">
                <button className="rounded px-12 py-2 bg-blue text-white border-white border-2 ">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-section bg-blue relative py-10 md:py-20 ">
        <div className="max-w-7xl mx-auto ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hero-left-content px-4 md:px-8 order-1 md:order-1">
              <h2 className=" mb-2 md:mb-6"><span className="px-4 md:px-8 custom-start-yellow-effect">LoadLens</span></h2>
              <p className="px-4 md:px-8 mb-2 md:mb-6">DataForger: Streamlines data seeding for QA, Developers, CSM, PM, Sales, and more.</p>
              <ul className="list-disc pl-14 pr-8">
                <li className="mb-2 md:mb-6">No production database access: Eliminates the need to "synthesize" data.</li>
                <li className="mb-2 md:mb-6">Schema-based data generation: Creates fake data based on your existing database schema.</li>
                <li className="mb-2 md:mb-6">Industry-specific data customization: Choose the type of data generated based on your needs.</li>
                <li className="mb-2 md:mb-6">Easy database access: Hosted database integrates seamlessly with your CI pipeline or locally.</li>
              </ul>
              <div className="hidden md:block w-full px-8 mt-8 ">
                <button className="rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
            <div className="hero-right-content text-start px-4 order-2 md:order-2">
              <Image
                className="hero-codeImg mb-4"
                src={mainCode}
                alt="code_main"
              />
              <div className="flex justify-center items-center rounded-lg border-white border-2 py-2 md:py-4 bg-yellow font-bold text-lg">
                <svg className="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2331 0.237062C10.2707 -0.0790205 10.7293 -0.0790205 10.7669 0.237062L11.0815 2.8887C11.4878 6.31269 14.1873 9.01224 17.6113 9.41851L20.2629 9.73314C20.579 9.77067 20.579 10.2293 20.2629 10.2669L17.6113 10.5815C14.1873 10.9878 11.4878 13.6873 11.0815 17.1113L10.7669 19.7629C10.7293 20.079 10.2707 20.079 10.2331 19.7629L9.91851 17.1113C9.51224 13.6873 6.81269 10.9878 3.3887 10.5815L0.737062 10.2669C0.420979 10.2293 0.420979 9.77067 0.737062 9.73314L3.3887 9.41851C6.81269 9.01224 9.51224 6.31269 9.91851 2.8887L10.2331 0.237062Z" fill="black" />
                </svg>
                <span className="text-black font-bold text-xl">Enter</span>
              </div>
              <div className="block md:hidden w-full mt-8 ">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-section relative py-10 md:py-20 px-4">
       <Benefits />
      </div>
      <AIManagement />
    </section>
  )
}