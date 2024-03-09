import React from "react";

import Style from "./Diabetic.module.css";

import diab5Img1 from "../../assets/images/diab5Img1.png";
import diab5Img2 from "../../assets/images/diab5Img2.png";
import diab5Img3 from "../../assets/images/diab5Img3.png";
import diab5Img4 from "../../assets/images/diab5Img4.png";
import diab5Img5 from "../../assets/images/diab5Img5.png";

export default function Diabetic5() {
  return (
    <section className={`${Style.Diab3outer}`}>
      <div className="container">
        <div className={``}>
          <div className="">
            <h2 className={`subTitle mt-4 mb-2 text-center`}>Treatments</h2>
            <p className={`text-center ${Style.textSize}`}>
              The treatment for diabetic retinopathy depends on the severity and stage of the disease. Early detection and treatment can
              help prevent vision loss or slow down its progresion. Here are some of the treatment options for diabetic retinopathy:
            </p>
          </div>

          <div className="row my-5">
            <div className="col-6">
              <div className={Style.diab5Card}>
                <div className="d-flex p-4">
                  <img src={diab5Img1} alt="" />
                  <div className="ps-5">
                    <h3>Control of Blood Sugar Levels</h3>
                    <p className={`text`}>
                      Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved
                      through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or
                      oral hypoglycemic agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={Style.diab5Card}>
                <div className="d-flex p-4">
                  <img src={diab5Img2} alt="" />
                  <div className="ps-5">
                    <h3>Intravitreal injections</h3>
                    <p className={`text`}>
                      Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved
                      through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or
                      oral hypoglycemic agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={Style.diab5Card}>
                <div className="d-flex p-4">
                  <img src={diab5Img3} alt="" />
                  <div className="ps-5">
                    <h3>Vitrectomy</h3>
                    <p className={`text`}>
                      Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved
                      through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or
                      oral hypoglycemic agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={Style.diab5Card}>
                <div className="d-flex p-4">
                  <img src={diab5Img4} alt="" />
                  <div className="ps-5">
                    <h3>Laser Therapy</h3>
                    <p className={`text`}>
                      Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved
                      through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or
                      oral hypoglycemic agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="d-flex p-4">
              <img src={diab5Img5} alt="" />
              <div className="ps-5">
                <h3>Anti-inflammatory Medication</h3>
                <p className={`text`}>
                  Nonsteroidal anti-inflammatory drugs(NSAIDs) and corticosteroids can help reduce inflammation in the eye and prevent
                  further damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
