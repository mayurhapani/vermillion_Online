import React from "react";
import Hero2 from "../../components/hero2/Hero2";
import Diabetic1 from "../../components/Diabetic1/Diabetic1";
import Diabetic2 from "../../components/Diabetic1/Diabetic2";
import Diabetic3 from "../../components/Diabetic1/Diabetic3";
import Diabetic4 from "../../components/Diabetic1/Diabetic4";
import Diabetic5 from "../../components/Diabetic1/Diabetic5";
import Diabetic6 from "../../components/Diabetic1/Diabetic6";

import eyeImg from "../../assets/images/eyeImg.png";
import eyeImg2 from "../../assets/images/eyeImg2.png";

export default function ServicesSubPage() {
  return (
    <>
      <Hero2 PageTitle={"Diabetic Retinopathy"} PageName={"Specialities"} isSubName={true} subPageName={"Diabetic Retinopathy"} />

      <Diabetic1 />
      <Diabetic2 img={eyeImg} />
      <Diabetic3 />
      <Diabetic4 />
      <Diabetic2 revers={true} img={eyeImg2} />
      <Diabetic5 />
      <Diabetic6 />
    </>
  );
}
