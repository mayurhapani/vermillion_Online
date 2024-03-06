import React from "react";
import Style from "./services.module.css";
import Section_title from "../section_title/SectionTitle";
import img1 from "../../assets/images/card_1.png";
import img2 from "../../assets/images/card_2.png";
import img3 from "../../assets/images/card_3.png";
import img4 from "../../assets/images/card_4.png";
import img5 from "../../assets/images/card_5.png";
import img6 from "../../assets/images/card_6.png";
import S_card from "./S_card";
import Buttonn from "../button/Button";

const serviceCard = [
  { img: img1, title: "Cataract", disc: "Cataract Opacify the eye’s natural lens and limit your ability to see clearly." },
  { img: img2, title: "Diabetic Retinopathy", disc: "This condition is one of the leading causes of blindness in people with diabetes..." },
  { img: img3, title: "Neuro Ophthalmology", disc: "We have a dedicated neuro-ophthalmology department that specializes in the diagn..." },
  { img: img4, title: "Oculoplasty", disc: "Oculoplasty, also known as oculoplastic surgery or ophthalmic plastic surgery,.." },
  {
    img: img5,
    title: "Refractive Surgeries",
    disc: "Refractive surgeries are elective procedures chosen byindividuals seeking to correct...",
  },
  { img: img6, title: "Q-Lasik Laser", disc: "Q-LASIK, also known as Quick LASIK is an innovative and minimally invasive proc..." },
];

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <Section_title section_title={"what we do"} />
          <h2 className={`${Style.srvs_heading} mt-4 mb-5`}>Services and Specialities</h2>
        </div>
        <div className="row gx-3 gy-3">
          {serviceCard.map((data) => (
            <S_card img={data.img} title={data.title} disc={data.disc} />
          ))}
        </div>
        <div className="text-center">
          <Buttonn btn_title={"VIEW ALL SERVICES"} />
        </div>
        <div className={`${Style.serv_banner} d-flex p-5 mt-5 shadow shadow-4 rounded-4`}>
          <div className="w-3 px-5 border-end border-2">
            <h2>17 Years of Excellence</h2>
          </div>
          <div className="w-8 px-4">
            <h3>
              <span>80 Lakh+</span> Successfully Treated Eyes
            </h3>
            <p>
              Being one of the best eye hospital Chain in India, ASG Eye Hospital provides state-of-the-art Ophthalmology services in
              Cataract, Retina, Squint, Glaucoma, Cornea, Oculoplasty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
