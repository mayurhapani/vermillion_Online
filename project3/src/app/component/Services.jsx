import React from "react";
import Image from "next/image";

import Arrow from "../../../public/arrow.png";

import ServicesCard1 from "../../../public/ServicesCard1.png";
import ServicesCard2 from "../../../public/ServicesCard2.png";
import ServicesCard3 from "../../../public/ServicesCard3.png";

const Services = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#6285CA] text-xl font-bold">SERVICES</span>
          <h3 className="text-[#032342] text-xl font-bold text-6xl mt-5">
            Our <span className="text-[#385182] text-6xl">Medical</span> Services
          </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col">
            <div className="card bg-[#d6dae4] p-10 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-[#032342] text-4xl">Kidney Stone</span>
                <Image className="inline-block" src={Arrow} />
              </div>
              <p className="text-[#888888] text-lg mt-14 mb-5">
                We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our
                patient that very much.
              </p>
              <Image className="w-full" src={ServicesCard1} />
            </div>
          </div>
          <div className="col">
            <div className="card bg-[#d6dae4] p-10 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-[#032342] text-4xl">Prostate</span>
                <Image className="inline-block" src={Arrow} />
              </div>
              <p className="text-[#888888] text-lg mt-14 mb-5">
                We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our
                patient that very much.
              </p>
              <Image className="w-full" src={ServicesCard2} />
            </div>
          </div>
          <div className="col">
            <div className="card bg-[#d6dae4] p-10 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-[#032342] text-4xl">Uro Oncology</span>
                <Image className="inline-block" src={Arrow} />
              </div>
              <p className="text-[#888888] text-lg mt-14 mb-5">
                We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our
                patient that very much.
              </p>
              <Image className="w-full" src={ServicesCard3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
