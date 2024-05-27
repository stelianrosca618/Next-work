"use client";
import Image from "next/image";
import subscribeImage from "@/public/imgs/blog/subscribeImage.png";

export default function BlogSubscribe() {
  return (
    <div className="blog-section bg-blue blogSubscibe-background relative py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="blog-left px-0 md:px-8 order-2 md:order-1">
            <h2 className="blogSubscribe-head">Subscribe to our newsletter!</h2>
            <p className="py-8">Our ultimate goal is to revolutionize the testing process by providing a centralized hub for companies to streamline their testing efforts.</p>
            <input className="w-full my-4 p-3 placeholder-white border-white border-2 text-white bg-light-blue rounded-md" placeholder="Enter your email" />
            <button className="w-full my-4 rounded-md text-black bg-white font-bold py-3 px-14">Subscribe now</button>
          </div>
          <div className="blog-right order-1 md:order-2">
            <Image
              src={subscribeImage}
              alt="subscribe"
            />
          </div>
        </div>
      </div>
    </div>
  )
}