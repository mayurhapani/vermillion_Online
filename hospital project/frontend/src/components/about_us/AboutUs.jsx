import React, { useState } from "react";
import about_1 from "../../assets/images/about_1.png";
import bg_vector from "../../assets/images/bg_vector.png";
import SectionTitle from "../section_title/SectionTitle";
import Button from "../button/Button";
import Style from "./about_us.module.css";

const AboutUs = ({ direction, isbutton, tabName }) => {
  return (
    <>
      <section className="py-0" id={Style.about}>
        <div className="container">
          <div className={`row ${direction}`}>
            <div className="col-6">
              <div className={`${Style.abt_img}`}>
                <img className="w-100" src={about_1} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="h-100 d-flex flex-column gap-3 justify-content-center ps-5 ">
                <SectionTitle sectionTitle={tabName} />
                <h2 className={`${Style.abt_heading}`}>Know more about ASG</h2>
                <p className={`${Style.abt_disc}`}>
                  ASG Eye Hospitals is a chain of super speciality eye hospitals in India. It offers a comprehensive range of eye care
                  services including treatment and surgeries of Retina, Cataract, Squint, Oculoplasty, Cornea, Lasik, ICL, Glaucoma, and
                  Pediatric Opthalmology. Currently, the group has 150 Eye Hospitals across 83 cities in India.
                </p>
                {isbutton && <Button btn_title={"GET IN TOUCH"} />}
              </div>
            </div>
          </div>
        </div>
        <img className={`${Style.bg_vector}`} src={bg_vector} alt="" />
      </section>
    </>
  );
};

export default AboutUs;
