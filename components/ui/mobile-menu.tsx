"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);
  const productsDropdown = useRef<HTMLDivElement>(null);
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="min-[976px]:hidden">
      {/* Hamburger button */}
      {/* <button>
        <Link
          href="https://app.hakkaren.co/auth/login"
          className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
        >
          Login
        </Link>
      </button>
      <button className="mr-5">
        <Link
          href="https://app.hakkaren.co/auth/signup"
          className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
        >
          Try it Now
        </Link>
      </button> */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute bg-gray-900 top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: '100vh', opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="flex grow justify-end flex-wrap items-center">
          <li className="bg-gray-900 w-full py-1">
            <Link
              href="/"
              onClick={() => setMobileNavOpen(false)}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              home
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </li>
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="/company"
              onClick={() => setMobileNavOpen(false)}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              about us
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </li>
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                //setMobileNavOpen(false);
                setProductsDropdownOpen(!productsDropdownOpen);
              }}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              products
              {!productsDropdownOpen &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              }
              {!!productsDropdownOpen &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              }
            </Link>
            <nav
              ref={productsDropdown}
              className="relative top-18 ml-2 text-center overflow-hidden transition-all duration-300 ease-in-out"
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
                  <Link
                    href="/products/dataforger"
                    className="flex justify-between items-center font-medium w-full headerMenu_btn py-2"
                    onClick={() => {setProductsDropdownOpen(false); setMobileNavOpen(false);}}
                  >
                    DataForger
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    href="/products/nimbus"
                    className="flex justify-between items-center font-medium w-full headerMenu_btn py-2"
                    onClick={() => {setProductsDropdownOpen(false); setMobileNavOpen(false);}}
                  >
                    Nimbus
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </li>
                <li className="flex justify-center items-center">
                  <Link
                    href="/products/loadlens"
                    className="flex justify-between items-center font-medium w-full headerMenu_btn py-2"
                    onClick={() => {setProductsDropdownOpen(false); setMobileNavOpen(false);}}
                  >
                    Loadlens
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </li>
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="/features"
              onClick={() => setMobileNavOpen(false)}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              features
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

          </li>
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="/how-it-works"
              onClick={() => setMobileNavOpen(false)}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              how it works
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </li>
          <li className="bg-gray-900 w-full py-1">
            {" "}
            <Link
              href="/how-it-works"
              onClick={() => setMobileNavOpen(false)}
              className="headerMenu_btn flex justify-between items-center text-white-600 font-medium hover:font-medium hover:underline hover:underline-offset-4 px-4 py-3 transition duration-150 ease-in-out"
            >
              log in
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </li>
          <li className="bg-gray-900 w-full pt-3 pb-8">
            <Link
              href="https://app.hakkaren.co/auth/signup"
              className="btn-sm shadow-lg shadow-indigo-600/100 w-full rounded border-white text-white bg-purple-600 hover:bg-purple-700"
            >
              Try Hakkaren!
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
