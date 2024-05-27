import Image from "next/image";

import FeatImage01 from "@/public/images/collabaration.svg";
import FeatImage02 from "@/public/images/universe.svg";
import FeatImage03 from "@/public/images/data_privacy.svg";
import FeatImage04 from "@/public/images/data_processing.svg";

export default function Mission() {
  return (
    <section>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 custom-text-shadow">
              Build Quality into the Culture
            </h1>
            <h1 className="h2 mb-4 custom-text-shadow">
              Accelerate Development Productivity
            </h1>
            <h3 className="h2 mb-4 custom-text-shadow">in</h3>
            <h1 className="h2 mb-4 custom-text-shadow">One Stop</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">
                    Hindered by data constraints while trying to recreate
                    specific scenarios?
                  </h3>
                  <p className="text-l text-gray-400 mb-4">
                    DataForger is engineered for intuitive use at its core,
                    ensuring data seeding is within everyone's reach, regardless
                    of technical expertise. Empower your entire team to
                    effortlessly craft any desired test scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Still testing on live production?</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Are you stuck testing on production because it's just
                    easier? Let DataForger simplify things for you. We make test
                    data setup a breeze, so you can say goodbye to high-risk
                    testing in live production environments.
                  </p>
                </div>
              </div>
            </div>

            {/* 4th item */}
          </div>
        </div>
      </div>
    </section>
  );
}
