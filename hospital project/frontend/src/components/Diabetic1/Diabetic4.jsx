import React from "react";

import Style from "./Diabetic.module.css";

import diab1 from "../../assets/images/diab1.png";
import diab2 from "../../assets/images/diab2.png";
import diab3 from "../../assets/images/diab3.png";
import diab4 from "../../assets/images/diab4.png";
import diab5 from "../../assets/images/diab5.png";

export default function Diabetic4() {
  return (
    <section>
      <div className="container">
        <div className={`${Style.Diab4inner}`}>
          <h4 className="text-center">
            The symptoms of Diabetic Retinopathy in the early stages, diabetic retinopathy may not cause any noticeable symptoms. As the
            condition progresses, symptoms may include:
          </h4>

          <div className={`${Style.Diab4CardOuter}`}>
            <div className={Style.Diab4Card}>
              <img src={diab1} alt="" />
              <p>Blurred vision</p>
            </div>
            <div className={Style.Diab4Card}>
              <img src={diab2} alt="" />
              <p>Fluctuating vision</p>
            </div>
            <div className={Style.Diab4Card}>
              <img src={diab3} alt="" />
              <p>
                Dark spots or <br /> strings (floaters)
              </p>
            </div>
            <div className={Style.Diab4Card}>
              <img src={diab4} alt="" />
              <p>
                Blurred or <br /> distorted vision
              </p>
            </div>
            <div className={Style.Diab4Card}>
              <img src={diab5} alt="" />
              <p>
                Partial or <br /> total loss of vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
