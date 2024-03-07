import React from "react";
import Style from "./ourDr.module.css";
import SectionTitle from "../section_title/SectionTitle";
import DrCard from "./DrCard";
import Button from "../button/Button";

export default function OurDr() {
  return (
    <section className={`${Style.ourDROuter} pb-0`}>
      <div className="container">
        <div className={Style.ourDRInner}>
          <div className="text-center">
            <SectionTitle sectionTitle={"OUR TEAM"} />
            <h2 className="subTitle mt-3">Meet Our Doctors</h2>
          </div>
          <div className={Style.drCardPOuter}>
            <div className="row">
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
              <DrCard />
            </div>

            <div className="text-center">
              <Button btn_title={"VIEW ALL DOCTORS"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
