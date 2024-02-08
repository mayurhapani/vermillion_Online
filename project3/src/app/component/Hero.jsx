import React from "react";
import Image from "next/image";

import Medi from "../../../public/medi.png";
import Button from "./Button";

import Img1 from "../../../public/img1.png";
import Img2 from "../../../public/img2.png";
import Img3 from "../../../public/img3.png";
import Img4 from "../../../public/img4.png";
import Img5 from "../../../public/img5.png";
import Img6 from "../../../public/img6.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="hreoInner p-5">
          <div className="flex flex-wrap">
            <div className="w-1/2 px-24">
              <span className="text-5xl text-[#032342] relative">
                Find the good life by <span className="text-[#6285CA]"> good</span> health
                <Image className="absolute left-72 top-16" src={Medi} />
              </span>

              <p className="text-xl text-[#888888] py-4">
                Dhameliya Kidney Hospital has born out of the need for a good centre which catered to patients with complicated kidney
                diseases in Surat.
              </p>
              <Button text="Get Appointment" />
              <Button text="Learn More" />
            </div>
            <div className="w-1/2">
              <div className="flex">
                <div className="w-1/2">
                  <div className="flex flex-wrap">
                    <div className="w-1/2 flex justify-center">
                      <div className="bg-[#6285CA] w-[135px] h-[135px] rounded-2xl">
                        <Image src={Img1} />
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <div className="bg-[#8faeeb] w-[135px] h-[135px] rounded-2xl">
                        <Image src={Img2} />
                      </div>
                    </div>
                    <div
                      className="w-full flex justify-center mt-5
                    "
                    >
                      <div className="bg-[#6285CA] w-[280px] h-[290px] rounded-2xl">
                        <Image src={Img3} />
                      </div>
                    </div>
                    <div className="w-full ">
                      <div className="bg-[#385182]">
                        <Image src={Img4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="">
                    <div className="w-full ">
                      <div className="bg-[#385182] ">
                        <Image src={Img5} />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="">
                        <Image src={Img6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
