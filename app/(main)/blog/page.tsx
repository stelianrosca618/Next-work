"use client";
import Image from "next/image";
import Blogswip from "@/components/blog/blogswip";
import BlogPostsSwipe from "@/components/blog/blogpostswip";
import BlogSubscribe from "@/components/blog/blogsubscribe"

export default function Blog() {
  return (
    <section>
      <div className="blog-section relative py-10 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Blogswip />
        </div>
      </div>
      <div className="blog-section relative py-10 lg:py-20 px-4">
        
        <BlogPostsSwipe />
      </div>
      <BlogSubscribe />
    </section>
  )
}