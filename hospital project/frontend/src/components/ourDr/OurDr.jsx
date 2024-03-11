import React from "react";
import Style from "./ourDr.module.css";
import SectionTitle from "../section_title/SectionTitle";
import DrCard from "./DrCard";
import Button from "../button/Button";

import drDp1 from "../../assets/images/drDp1.png";
import drDp2 from "../../assets/images/drDp1.png";
import drDp3 from "../../assets/images/drDp1.png";
import drDp4 from "../../assets/images/drDp1.png";
import drDp5 from "../../assets/images/drDp1.png";
import drDp6 from "../../assets/images/drDp1.png";
import drDp7 from "../../assets/images/drDp1.png";
import drDp8 from "../../assets/images/drDp1.png";
import drDp9 from "../../assets/images/drDp1.png";
import drDp10 from "../../assets/images/drDp1.png";
import drDp11 from "../../assets/images/drDp1.png";
import drDp12 from "../../assets/images/drDp1.png";

const drDetials = [
  {
    drImg: drDp1,
    drName: "Dr. Arun Singhvi",
    drDescription: "Co-founder, promoter, Chairman, and Managing Director",
  },
  {
    drImg: drDp2,
    drName: "Dr. Shilpi Gang",
    drDescription: "Co-founder, promoter, and CEO",
  },
  {
    drImg: drDp3,
    drName: "Dr. Himanshu Shekhar",
    drDescription: "Director On Board CSO (Chief Strategy Officer) Clinical,...",
  },
  {
    drImg: drDp4,
    drName: "Dr. Vikas Jain",
    drDescription: "Director and CSO(Chief Strategy Officer) HR and new Establishment",
  },
  {
    drImg: drDp5,
    drName: "Dr. Raghav Ravani",
    drDescription: "Medical Director (Recruitment) PHACO, VITREO-RETINA",
  },
  {
    drImg: drDp6,
    drName: "Dr. Mayank Sharma",
    drDescription: "Medical Director Induction PHACO, FEMTO, CORNEA, REFRACTIVE ",
  },
  {
    drImg: drDp7,
    drName: "Dr. Farin Shaikh",
    drDescription: "Medical Director, Sambhaji Nagar Zone",
  },
  {
    drImg: drDp8,
    drName: "Dr. Koushik Basu",
    drDescription: "Medical Director, Kolkata (Sreebhumi)",
  },
  {
    drImg: drDp9,
    drName: "Dr. Pavan Lohiya",
    drDescription: "Medical Director, Vashi PHACO-REFRACTIVE, STRABIS",
  },
  {
    drImg: drDp10,
    drName: "Dr. Milap Vaghela",
    drDescription: "Co-founder, promoter, Chairman, and Managing Director",
  },
  {
    drImg: drDp11,
    drName: "Dr. Harish Pathak",
    drDescription: "Co-founder, promoter, Chairman, and Managing Director",
  },
  {
    drImg: drDp12,
    drName: "Dr. Rohit Agarwal",
    drDescription: "Co-founder, promoter, Chairman, and Managing Director",
  },
];

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
