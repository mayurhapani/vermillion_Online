import React from "react";

import Style from "./Diabetic.module.css";

export default function Diabetic2({ img, revers }) {
  return (
    <section>
      <div className="container">
        <div className="">
          <div className={`row ${revers && `flex-row-reverse`}`}>
            <div className="col-7">
              <div className={Style.eyeDetial}>
                <h2>Causes of Diabetic Retinopathy:</h2>

                <h4>High Blood Sugar Levels</h4>
                <p className="text">
                  Prolonged periods of elevatedblood sugar levels in people with diabetes can damage theblood vessels in the retina, leading
                  to diabetic retinopathy.
                </p>

                <h4>Duration of Diabetes</h4>
                <p className="text">The longer a person has diabetes,the greater their risk of developing diabetic retinopathy.</p>

                <h4>Poor Blood Sugar Control</h4>
                <p className="text">
                  Inadequate management ofblood sugar levels, such as irregular monitoring or failureto follow a diabetes management plan,
                  can increase therisk of diabetic retinopathy.
                </p>

                <h4>High Blood Pressure</h4>
                <p className="text">
                  Hypertension or high blood pressurecan further damage the blood vessels in the retina,worsening the condition.
                </p>
              </div>
            </div>
            <div className="col-5">
              <img className={Style.eyeImg} src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
