import React from "react";
import Image from "next/image";
import Link from "next/link";
import logimg from "@/public/imgs/logos/Logo.svg";
import ScreentopPointer from "@/components/ui/ScreentopPointer";

export default function Footer() {
  return (
    <footer>
      <ScreentopPointer />
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20">
            {/* 1st block */}
            <div className="md:col-span-3 lg:col-span-3 sm:col-span-12">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Hakkaren">
                  <Image
                    className="rounded-full"
                    src={logimg}
                    width={150}
                    alt="Hakkaren"
                  />
                </Link>
              </div>
              {/* <div className="text-gray-400">
                Built with &#10084;&#65039; in Boston
              </div> */}
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-9 lg:col-span-9 sm:col-span-12 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-3">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/company"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/whyhakkaren"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Why Hakkaren?
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/features"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/products/dataforger"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Data Forger
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/products/nimbus"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nimbus
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/products/loadlens"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      LoadLens
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Blog</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              {/* 5th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Social</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Wellfound
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          
          <hr className="hidden md:block py-4" />
          {/* Bottom area */}
          <div className="mt-4 md:mt-1 md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 text-sm ml-4"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 text-sm ml-4"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-gray-400 text-sm ml-4"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <hr className="md:hidden mb-4" />
            <div className="text-center text-gray-400 text-sm mr-4">
              &copy; Hakkaren.co. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
