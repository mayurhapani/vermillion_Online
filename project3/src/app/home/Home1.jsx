import React from "react";
import "./home.css";

import Image from "next/image";

// import Medi from "../../../public/medi.png";
// import Button from "./Button";

import doctor from "../../../public/doctor.png";
import loose_aerrow from "../../../public/loose_aerrow.png";
import hospi from "../../../public/hospi.png";
import medico_kit from "../../../public/medico_kit.png";
import kidney from "../../../public/kidney.png";
import doc_1 from "../../../public/doc_1.png";
import doc_2 from "../../../public/doc_2.png";
import doc_3 from "../../../public/doc_3.png";
import doc_4 from "../../../public/doc_4.png";

const Home = () => {
  return (
    <>
      <section id="hero" class="">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="col">
              <div class="main_box">
                <h2 class="hero_title mb-4">
                  Find the good life by <span class="highlight">good</span> health
                </h2>
                <p class="w-75 mb-4">
                  Dhameliya Kidney Hospital has born out of the need for a good centre which catered to patients with complicated kidney
                  diseases in Surat.
                </p>
                <div class="flex mb-5">
                  <a href="#get_appointment" class="get_appointment_btn scrollto hidden lg:inline-block me-3">
                    Make Appointment
                  </a>
                  <a href="#learn_more" class="learn_more_btn scrollto hidden lg:inline-block">
                    Learn More
                  </a>
                </div>
                <div class="w-50 hero_doctor">
                  <Image className="pl-10 pt-10" src={doctor} alt="" />
                </div>
                <Image src={loose_aerrow} class="abs_img loose_aerrow" />
                <Image src={hospi} alt="" class="abs_img hospi" />
              </div>
            </div>

            <div class="col grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div class="col mt-6">
                <div class="col-span-1 grid grid-cols-2 gap-3">
                  <div class="box_1 flex justify-center">
                    <Image src={medico_kit} alt="" width="85px" />
                  </div>
                  <div class="box_2 flex justify-center">
                    <Image src={kidney} alt="" width="85px" />
                  </div>
                </div>
                <div class="w-full box_3 flex justify-center">
                  <Image src={doc_1} class="grid_img_1" alt="" />
                </div>
                <div class="w-full box_4 text-center">
                  <div class="flex items-center justify-center text-start mb-3">
                    <div class="doc_4_img me-3">
                      <Image src={doc_4} alt="" />
                    </div>
                    <div class="doc_4_data">
                      <h2>Dr. Alex Smith</h2>
                      <span>Infermrdica Hospital</span>
                    </div>
                  </div>
                  <a href="#mk_apmt" class="mk_apmt_btn scrollto hidden lg:inline-block">
                    Make Appointment
                  </a>
                </div>
              </div>

              <div class="col">
                <div class="w-full box_5">
                  <Image src={doc_2} class="grid_img_2" alt="" />
                </div>
                <div class="w-full box_6">
                  <Image src={doc_3} class="grid_img_3" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
