import React from "react";
import Hero2 from "../../components/hero2/Hero2";
import Diabetic1 from "../../components/Diabetic1/Diabetic1";

export default function ServicesSubPage() {
  return (
    <>
      <Hero2 PageTitle={"Diabetic Retinopathy"} PageName={"Specialities"} isSubName={true} subPageName={"Diabetic Retinopathy"} />

      <Diabetic1 />
    </>
  );
}
