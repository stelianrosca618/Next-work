"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";
import { useEffect } from "react";

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow">
        <PageIllustration />

        {children}
      </main>

      <Footer />
    </>
  );
}
