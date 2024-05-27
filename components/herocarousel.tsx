import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import CarouselItemBg from "@/public/imgs/home/CarouselItemBg.png";
import DataforgerIco from "@/public/imgs/home/Dataforger.svg";
import loadLensIco from "@/public/imgs/home/Loadlens.svg";
import NimbusIco from "@/public/imgs/home/Nimbus.svg";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules';


const responsive = {
  450: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
};

export default function HeroCarousel() {
  return (
    <div className="carousel-width">
      <Swiper pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1
        }} modules={[EffectCreative, Pagination]} slidesPerView={2} breakpoints={responsive} loop={true} centeredSlides={true}>
        <SwiperSlide>
          <Link href="/products/dataforger">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={DataforgerIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/nimbus">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={NimbusIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/loadlens">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={loadLensIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/dataforger">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={DataforgerIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/nimbus">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={NimbusIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/products/loadlens">
            <div className="mx-3 flex justify-center items-center">
              <Image
                className="heroCarouselItem"
                src={CarouselItemBg}
                height={200}
                alt="item1"
              />
              <div className="heroCarouselItem-overload">
                <Image
                  src={loadLensIco}
                  height={80}
                  alt="loadlens"
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      {/* <Carousel itemClass=" flex justify-center" centerMode={true} focusOnSelect={true} ssr={true} infinite={true} slidesToSlide={3} responsive={responsive} showDots={true}>
        <Link href="/products/dataforger">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="heroCarouselItem"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="heroCarouselItem-overload">
              <Image
                src={DataforgerIco}
                height={80}
                alt="loadlens"
              />
            </div>
          </div>
        </Link>
        <Link href="/products/nimbus">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="heroCarouselItem"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="heroCarouselItem-overload">
              <Image
                src={NimbusIco}
                height={80}
                alt="loadlens"
              />
            </div>
          </div>
        </Link>
        <Link href="/products/loadlens">
          <div className="h-52 w-52 mx-3 flex justify-center items-center">
            <Image
              className="heroCarouselItem"
              src={CarouselItemBg}
              height={200}
              alt="item1"
            />
            <div className="heroCarouselItem-overload">
              <Image
                src={loadLensIco}
                height={80}
                alt="loadlens"
              />
            </div>
          </div>
        </Link>
      </Carousel> */}
    </div>

  );
}

