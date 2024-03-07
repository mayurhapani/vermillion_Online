import React from "react";
import our_team from "../../assets/images/team_img.png";
import bg_vector from "../../assets/images/bg_vector.png";
import SectionTitle from "../section_title/SectionTitle";
import Buttonn from "../button/Button";
import Style from "./our_team.module.css";

const OurTeam = () => {
  return (
    <>
      <section id={Style.our_team}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="h-100 d-flex flex-column gap-3 justify-content-center ps-5">
                <SectionTitle sectionTitle={"Our team"} />
                <h2 className={`${Style.our_team_heading}`}>
                  All our doctors are
                  <br />
                  available 24×7 at respective
                  <br />
                  locations
                </h2>
                <p className={`${Style.our_team_disc}`}>
                  500+ Eye specialists out of which 250+ are alumni of premier institutes like all India Institute of Medical Sciences (New
                  Delhi), Sankara Nethralaya, LV Prasad & Aravind Eye Institute
                </p>
                <Buttonn btn_title={"MEET ALL DOCTORS"} />
              </div>
            </div>
            <div className="col-6">
              <div className={`${Style.our_team_img}`}>
                <img className="w-100" src={our_team} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img className={`${Style.bg_vector}`} src={bg_vector} alt="" />
      </section>
    </>
  );
};

export default OurTeam;
