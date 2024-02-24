import React from "react";
import "./contact_us.css";
import Image from "next/image";

import about_two from "../../../public/about_two.png";
import blur_star from "../../../public/blur_star.png";
import services from "../../../public/services.png";

const Contact_us = () => {
  return (
    <section id="c_us" className="">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="c_us_left relative">
            <div className="prtnr_collabs">
              <h2>🤝</h2>
              <h4 className="text-xl font-bold">
                <b>25+</b>
              </h4>
              <p className="inline-block mb-0">Partner Collaboration</p>
            </div>
            <Image src={about_two} alt="" className="mt-5 md:mt-0" />
            <Image className="blur_star absolute" src={blur_star} alt="" />
          </div>
          <div className="pt-5">
            <span className="c_us_title text-3xl font-bold">CONTACT US</span>
            <h2 className="c_us_headline my-3 text-4xl">
              True <span className="highlight">Healthcare</span> For Your Family!
            </h2>
            <p className="mb-4">
              Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney
              diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care.
            </p>
            <h3 className="c_us_headline_mini text-4xl font-bold my-3">Our support services include:</h3>
            <div className="c_us_ul flex">
              <ul className="mr-8 list-disc ms-5">
                <li>ESWL - Lithotripsy</li>
                <li>Cystolitholapaxy</li>
                <li>HOLEP</li>
              </ul>
              <ul className="list-disc ms-6">
                <li>Endoscopic Surgery</li>
                <li>Open Surgery</li>
                <li>RIRS</li>
              </ul>
            </div>
            <p className="my-3">Contact us today to learn more about our support services and to find out how we can help you.</p>
            <a href="#c_us_btn" className=" my-3 c_us_btn scrollto hidden lg:inline-block bg-blue-500 text-white py-2 px-6 rounded-lg">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Image className="c_us_srvs" src={services} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
