import React, { useState } from "react";

import Style from "./Diabetic.module.css";

export default function Diabetic6() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className={`${Style.Diab3outer}`}>
      <div className="container">
        <div className={``}>
          <div className="">
            <h2 className={`subTitle mt-4 mb-5 text-center`}>Frequently Asked Questions</h2>
          </div>

          <div className="">
            <div className="">
              <div className={Style.aordian}>
                <h3>What is diabetic retinopathy? </h3>
                {isOpen ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>What are the symptoms of diabetic retinopathy?</h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>How is diabetic retinopathy diagnosed?</h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>Can diabetic retinopathy be prevented? </h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>Is diabetic retinopathy reversible?</h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>How is diabetic retinopathy treated?</h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>

            <div className="">
              <div className={Style.aordian}>
                <h3>Can diabetic retinopathy lead to blindness? </h3>
                <i class="ri-add-line"></i>
              </div>
              <div className={Style.aordianSub}>
                <p>
                  In the early stages, diabetic retinopathy may not cause noticeable symptoms. As the disease progresses, symptoms may
                  include blurred or fluctuating vision, floaters (spots or dark strings floating in your vision), impaired color vision,
                  dark or empty areas in your vision, and vision loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
