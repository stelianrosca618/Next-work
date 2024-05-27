"use client";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import LogoImg from "@/public/imgs/logos/Logo.svg";
import arrowUp from '@/public/imgs/arrow-up-right.svg';
import { useState, useRef, useEffect } from "react";
import JoinBetaPopup from "../join-beta-popup";

export default function Header() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<Boolean>(false);

  const productsDropdown = useRef<HTMLDivElement>(null);
  const resourcesDropdown = useRef<HTMLDivElement>(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      setProductsDropdownOpen(false);
      setResourcesDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <header className="header-bar sticky top-0 w-full bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Hakkaren">
              <Image
                className="rounded-full"
                src={LogoImg}
                width={150}
                alt="Hakkaren"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden min-[976px]:flex min-[976px]:grow">
            {/* Desktop login and signup links */}
            <ul className="flex grow flex-wrap items-center justify-end ml-3">
              <li>
                {" "}
                <Link
                  href="/"
                  className="headerMenu_btn text-white-600 font-light hover:font-medium hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/company"
                  className="headerMenu_btn text-white-600 font-light hover:font-medium hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  about us
                </Link>
              </li>
              <li onMouseOver={(e) => {
                    e.preventDefault();
                    setProductsDropdownOpen(true);
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setProductsDropdownOpen(true);
                    setResourcesDropdownOpen(false);
                  }}
                  onMouseOut={(e) => {
                    e.preventDefault();
                    setProductsDropdownOpen(false);
                    setResourcesDropdownOpen(false);
                  }}>
                <Link
                  href="/products"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setProductsDropdownOpen(!productsDropdownOpen);
                  //   setResourcesDropdownOpen(false);
                  // }}
                  
                  className="headerMenu_btn text-white-600 font-light hover:font-medium hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 p-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <nav
                  ref={productsDropdown}
                  className="absolute top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
                  style={
                    productsDropdownOpen
                      ? {
                        maxHeight: '300px',
                        opacity: 1,
                      }
                      : { maxHeight: 0, opacity: 0.8 }
                  }
                >
                  <ul className="bg-gray-900 px-4 py-2">
                    <li className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-purple-800 m-2"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <Link
                        href="/products/dataforger"
                        className="flex font-medium w-full headerMenu_btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        DataForger
                      </Link>
                    </li>
                    <li className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-purple-800 m-2"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <Link
                        href="/products/nimbus"
                        className="flex font-medium w-full headerMenu_btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        Nimbus
                      </Link>
                    </li>
                    <li className="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-purple-800 m-2"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <Link
                        href="/products/loadlens"
                        className="flex font-medium w-full headerMenu_btn py-2"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        Loadlens
                      </Link>
                    </li>
                  </ul>
                </nav>
              </li>
              <li>
                {" "}
                <Link
                  href="/features"
                  className="headerMenu_btn text-white-600 font-light hover:font-medium hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  features
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/how-it-works"
                  className="headerMenu_btn text-white-600 font-light hover:font-medium hover:underline hover:underline-offset-4 md:px-2 xl:px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  how it works
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="hidden min-[976px]:flex xl:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://app.hakkaren.co/auth/login"
                  className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Login
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mx-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.hakkaren.co/auth/signup"
                  className="btn-sm text-white bg-purple-600 rounded border-white hover:bg-purple-700 ml-3"
                >
                  Try it Now
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
      {showModal && <JoinBetaPopup onHide={handleHideModal} />}
    </header>
  );
}
