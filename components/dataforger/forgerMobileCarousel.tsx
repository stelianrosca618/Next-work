
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from "next/image";
import { Pagination } from 'swiper/modules';


export default function ForgerMobileCarousel({ items }: any) {
    return (
        <Swiper slidesPerView={1.1} spaceBetween={20} pagination={true} modules={[Pagination]} loop={true} centeredSlides={false}>
            {
                items.map((item: any, key: number) => (
                    <SwiperSlide key={key}>
                        <div className="forger-item-card w-full">
                            <div className="flex justify-between items-start">
                                <div>
                                    <Image
                                        src={item.imgsrc}
                                        height={100}
                                        alt="fitem1"
                                    />
                                </div>
                                <div className="text-right">
                                    {item.id}
                                </div>
                            </div>
                            <div className="w-full mt-2">
                                <h4 className="font-bold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))
            }
        </Swiper>
    )
}