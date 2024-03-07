import React from "react";
import about_1 from "../../assets/images/about_1.png";
import bg_vector from "../../assets/images/bg_vector.png";
import SectionTitle from "../section_title/SectionTitle";
import Buttonn from "../button/Button";
import s from "./about_us.module.css";

const AboutUs = () => {
  return (
    <>
      <section id={s.about}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={`${s.abt_img}`}>
                <img className="w-100" src={about_1} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="h-100 d-flex flex-column gap-3 justify-content-center ps-5">
                <SectionTitle sectionTitle={"About Us"} />
                <h2 className={`${s.abt_heading}`}>Know more about ASG</h2>
                <p className={`${s.abt_disc}`}>
                  ASG Eye Hospitals is a chain of super speciality eye hospitals in India. It offers a comprehensive range of eye care
                  services including treatment and surgeries of Retina, Cataract, Squint, Oculoplasty, Cornea, Lasik, ICL, Glaucoma, and
                  Pediatric Opthalmology. Currently, the group has 150 Eye Hospitals across 83 cities in India.
                </p>
                <Buttonn btn_title={"GET IN TOUCH"} />
              </div>
            </div>
          </div>
        </div>
        <img className={`${s.bg_vector}`} src={bg_vector} alt="" />
      </section>
    </>
  );
};

export default AboutUs;
