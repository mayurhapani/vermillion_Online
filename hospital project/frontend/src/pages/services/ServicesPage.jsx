import React from "react";
import Hero2 from "../../components/hero2/Hero2";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";

export default function ServicesPage() {
  return (
    <>
      <Hero2 PageTitle={"Services and Specialities"} PageName={"Specialities"} />

      <Services BottomPart={false} TopPart={false} />
      {/* <Services BottomPart={false} TopPart={false}  /> */}

      <Footer />
    </>
  );
}
