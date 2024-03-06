import React from "react";
import Style from "./Hero.module.css";
import heroDr from "../../assets/images/heroDr.png";
import Vector from "../../assets/images/Vector.png";
import Button from "../button/Button";

export default function Hero() {
  return (
    <section className={`${Style.heroOuter}`}>
      <div className="container">
        <div className="hero over">
          <div className="row">
            <div className="col-6">
              <div className={`${Style.heroText}`}>
                <div className="">
                  <h1 className={`${Style.heroTitle} text-light mb-4`}>
                    Super speciality <br /> eye hospitals in India
                  </h1>
                  <p className={`${Style.text} mb-5`}>
                    It offers a comprehensive range of eye care services including treatment and surgeries
                  </p>
                  <div className="d-flex mb-5">
                    <div className="me-3">
                      <Button btn_title={"Consult Now"} />
                    </div>
                    <Button btn_title={"See all doctors"} isTrans={true} colorWhite={true} />
                  </div>
                  <div className={`${Style.tallfree} `}>
                    <a href="#">
                      <div className={`${Style.subTallfree} position-relative`}>
                        <i className={`ri-phone-line position-absolute ${Style.setCall}`}></i>
                        <span className="text">Let’s talk to doctor</span>
                        <h4>1800 1200 111</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={`${Style.heroImgDiv}`}>
                <img className={`${Style.heroImg}`} src={heroDr} alt="" />
                <img className={`${Style.heroBgImg}`} src={Vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className={`${Style.bottomImg}`} src={Vector4} alt="" /> */}
    </section>
  );
}
