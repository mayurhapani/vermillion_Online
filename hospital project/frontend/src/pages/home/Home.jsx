import React from "react";

import Hero from "../../components/hero/Hero";
import AboutUs from "../../components/about_us/AboutUs";
import Awards from "../../components/awards/Awards";
import Google from "../../components/googleReview/Google";
import Services from "../../components/services/Services";
import PatientReview from "../../components/patientReview/PatientReview";
import OurTeam from "../../components/ourTeam/OurTeam";
import LatestNews from "../../components/latestNews/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <Awards />
      <AboutUs tabName={"ABOUT US"} isbutton={true} />
      <Services BottomPart={true} TopPart={true} />
      <Google />
      <PatientReview />
      <OurTeam />
      <LatestNews />
    </>
  );
}
