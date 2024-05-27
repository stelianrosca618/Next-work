import Image from "next/image";

import ProductImage1 from "@/public/images/dataforger.png";
import ProductImage2 from "@/public/images/nimbus.png";
import ProductImage3 from "@/public/images/inception.png";
import Link from "next/link";
import ModalVideo from "./modal-video";
import VideoThumb from "@/public/images/thumb1.png";

export default function Features() {
  return (
    <section className="custom-bg-video">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-4">One platform</h1>
            <h1 className="h2 mb-4">Unlimited possibilities</h1>
            <p className="text-xl text-gray-400">
              Empower Your Teams to Shape the Culture of Quality
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <span
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                }}
              >
                <Link
                  href="/products/dataforger"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-full"
                    src={ProductImage1}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    alt="Product 1"
                  />
                </Link>
              </span>
              <h4 className="h4 mb-2">DataForger</h4>
              <h5>Seamlessly seed any scenario you want</h5>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <span
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                }}
              >
                <Image
                  className="rounded-full bg-black"
                  src={ProductImage2}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Product 1"
                />
              </span>
              <h4 className="h4 mb-2">Nimbus</h4>
              <h5>Coming Soon!</h5>
            </div>
            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <span
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                }}
              >
                <Image
                  className="rounded-full"
                  src={ProductImage3}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Product 1"
                />
              </span>
              <h4 className="h4 mb-2">Inception</h4>
              <h5>JS Seeding framework for e2e test</h5>
              <h5>Coming Soon!</h5>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
