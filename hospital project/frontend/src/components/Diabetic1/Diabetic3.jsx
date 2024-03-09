import React from "react";

import Style from "./Diabetic.module.css";

export default function Diabetic3() {
  return (
    <section className={`${Style.Diab3outer}`}>
      <div className="container">
        <div className={``}>
          <div className="">
            <h2 className={`subTitle mt-4 mb-2 text-center`}>Types of Diabetic Retinopathy</h2>
            <p className={`text-center ${Style.textSize}`}>There are two main types of diabetic retinopathy</p>
          </div>

          <div className="row px-5 mt-5">
            <div className="col-6">
              <div className={`d-flex ${Style.diab3Card} `}>
                <h5>1.</h5>
                <p>Non-proliferative diabetic retinopathy (NPDR)</p>
              </div>
            </div>
            <div className="col-6">
              <div className={`d-flex ${Style.diab3Card}`}>
                <h5>2.</h5>
                <p>Proliferative diabetic retinopathy (PDR)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
