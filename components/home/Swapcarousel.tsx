import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";

import dataforger_svg from "@/public/imgs/home/Dataforger.svg";
import nimbus_svg from "@/public/imgs/home/Nimbus.svg";
import loadLens_svg from "@/public/imgs/home/Loadlens.svg";
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swapcarousel() {
    const swipItems = [
        { src: dataforger_svg },
        { src: loadLens_svg },
        { src: nimbus_svg }
    ]
    return (
        <div className="swipAnim-width">
            <Swiper
                effect={'coverflow'}   
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    scale: 0.8,
                    slideShadows: false,
                  }}
                centeredSlides={true} 
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                modules={[EffectCoverflow]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="dataforger-btn">
                            <Image
                                src={dataforger_svg}
                                width={200}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="nimbus-btn">
                            <Image
                                src={nimbus_svg}
                                width={150}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="leadLens-btn">
                            <Image
                                src={loadLens_svg}
                                width={200}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="dataforger-btn">
                            <Image
                                src={dataforger_svg}
                                width={200}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="nimbus-btn">
                            <Image
                                src={nimbus_svg}
                                width={150}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-section-Bnt hero-center-btn mx-8">
                        <div className="leadLens-btn">
                            <Image
                                src={loadLens_svg}
                                width={200}
                                alt="Loadlens"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>

    )
}