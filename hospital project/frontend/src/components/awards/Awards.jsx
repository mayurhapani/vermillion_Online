import React from "react";
import Style from "./award.module.css";

import award1 from "../../assets/images/award1.png";
import award2 from "../../assets/images/award2.png";
import award3 from "../../assets/images/award3.png";
import award4 from "../../assets/images/award4.png";

export default function Awards({ isPara }) {
  return (
    <section className={Style.wards}>
      <div className="container">
        <h3 className={Style.title1}>All India’s Achievers Award</h3>
        {isPara && (
          <p className="text-center mb-5">
            ASG has been awarded the{" "}
            <span className={Style.textBlue}> “Young Entrepreneur Award” for the year 2013 by the Times of India.</span> It has also been
            bestowed upon with the <span className={Style.textBlue}>“All India Achievers Award” in 2009-10.</span> Recently,{" "}
            <span className={Style.textBlue}>”Rajiv Gandhi Gold Medal Award” has also been received for Medicine & Management.</span>
          </p>
        )}
        <div className="row">
          <div className="col-3">
            <div className={Style.card}>
              <img className={Style.cardImg} src={award1} alt="" />
              <span className="text ms-3">International Achivers Award 2009</span>
            </div>
          </div>
          <div className="col-3">
            <div className={Style.card}>
              <img className={Style.cardImg} src={award2} alt="" />
              <span className="text ms-3">Patrika - 2018 Youth Icon Award for Healthcare</span>
            </div>
          </div>
          <div className="col-3">
            <div className={Style.card}>
              <img className={Style.cardImg} src={award3} alt="" />
              <span className="text ms-3">Times wellness Rajasthan Health Award 2013</span>
            </div>
          </div>
          <div className="col-3">
            <div className={Style.card}>
              <img className={Style.cardImg} src={award4} alt="" />
              <span className="text ms-3">Rajeev Gandhi Gold Medal Award 2013</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
