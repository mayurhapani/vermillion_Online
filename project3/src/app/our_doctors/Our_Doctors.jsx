import React from "react";
import "./our_doctors.css";
import Image from "next/image";

import od_1 from "../../../public/od_1.png";
import od_2 from "../../../public/od_2.png";

const Our_Doctors = () => {
  return (
    <section id="our_doctors" className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pe-5 mb-8 md:mb-0">
            <span className="od_title text-2xl text-blue-500">OUR DOCTOR</span>
            <h2 className="od_headline mb-4 text-4xl">
              Meet Our Professional <span className="highlight">Expert Doctor</span>
            </h2>
            <div className="od_left_data flex">
              <div className="odld_1 w-1/2">
                <Image className="od_1" src={od_1} alt="" />
              </div>
              <div className="w-1/2">
                <h4 className="text-xl">Dr.Christopher Nicks</h4>
                <p className="text-gray-600">MBBS,FCPS - Cardiologist</p>
                <a href="#learn_more" className="od_learn_more_btn scrollto hidden lg:inline-block text-blue-500">
                  Learn More<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ps-5">
            <div className="od_left_data flex">
              <div className="odld_1 w-1/2">
                <Image className="od_1" src={od_2} alt="" />
              </div>
              <div className="w-1/2">
                <h4 className="text-xl">Dr.Christopher Nicks</h4>
                <p className="text-gray-600">MBBS,FCPS - Cardiologist</p>
                <a href="#od_learn_more" className="od_learn_more_btn scrollto hidden lg:inline-block text-blue-500">
                  Learn More<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <h3 className="od_right_bottom_title text-3xl">Our Doctors</h3>
            <div className="flex mt-4">
              <div className="peginetion">
                <i className="text-white ri-arrow-left-line"></i>
              </div>
              <div className="peginetion">
                <i className="text-white ri-arrow-right-up-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our_Doctors;
