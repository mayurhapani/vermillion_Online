import React from "react";
import Hero2 from "../../components/hero2/Hero2";
import AboutUs from "../../components/about_us/AboutUs";
import OurDr from "../../components/ourDr/OurDr";
import Awards from "../../components/awards/Awards";

export default function AboutPage() {
  return (
    <>
      <Hero2 PageTitle={"About Us"} PageName={"About Us"} />
      <AboutUs tabName={"ABOUT US"} isbutton={false} direction={"flex-row-reverse"} />
      <AboutUs tabName={"OUR MISSION"} isbutton={false} />

      <OurDr />
      <Awards isPara={true} />
    </>
  );
}
