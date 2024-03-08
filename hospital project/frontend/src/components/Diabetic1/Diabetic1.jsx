import React from "react";

import DiabeticImg from "../../assets/images/diabetic.png";
import Style from "./Diabetic.module.css";

export default function Diabetic1() {
  return (
    <section>
      <div className="container">
        <div className="">
          <img className={Style.diabeticImg} src={DiabeticImg} alt="" />

          <p className={`${Style.diabeticData} text`}>
            This condition is one of the leading causes of blindness in people with diabetes. It is a serious eye condition that can occur
            in individuals with diabetes. It is caused by damage to the blood vessels in the retina, which is the light-sensitive tissue at
            the back of the eye. Here's a comprehensive overview of the causes, symptoms, diagnosis, and treatment of diabetic retinopathy.
          </p>
        </div>
      </div>
    </section>
  );
}
