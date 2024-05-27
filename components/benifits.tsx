import Image from "next/image";
import Benifit1 from "@/public/imgs/home/Benifit_1.png";
import Benifit2 from "@/public/imgs/home/Benifit_2.png";
import Benifit3 from "@/public/imgs/home/Benifit_3.png";
import Benifit4 from "@/public/imgs/home/Benifit_4.png";

export default function Benefits() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="hero-left-content">
          <h2 className="text-white"><span className="custom-start-effect pl-4 md:pl-12">Benefits</span></h2>
        </div>
        <div className="hidden md:block hero-right-content">
          <p className="mb-6 text-size-30">Developing safe and beneficial AI requires people from a wide range of disciplines.</p>
          <span className="underline underline-offset-4"><a href="#">view careers</a></span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 my-12">
        <div className="hero-grid-item">
          <Image src={Benifit1} alt="team" className="mb-4 w-full" />
          <h4 className="mb-2 font-extrabold">
            Team collaboration:
          </h4>
          <p className="hero-grid-text">Shared platform for streamlined testing across departments</p>
        </div>
        <div className="hero-grid-item">
          <Image src={Benifit2} alt="increased" className="mb-4 w-full" />
          <h4 className="mb-2 font-extrabold">
            Increased efficiency:
          </h4>
          <p className="hero-grid-text">Simplified data generation, environment provisioning, and load testing.</p>
        </div>
        <div className="hero-grid-item">
          <Image src={Benifit3} alt="Improved" className="mb-4 w-full" />
          <h4 className="mb-2 font-extrabold">
            Improved accuracy:
          </h4>
          <p className="hero-grid-text">Realistic data and dedicated environments for reliable testing.</p>
        </div>
        <div className="hero-grid-item">
          <Image src={Benifit4} alt="Reduced" className="mb-4 w-full" />
          <h4 className="mb-2 font-extrabold">
            Reduced costs:
          </h4>
          <p className="hero-grid-text">Eliminates the need for manual data seeding and environment management.</p>
        </div>
        <div className="block md:hidden w-full ">
          <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
        </div>
      </div>
    </div>
  )
}