import React from "react";
import Styel from "./section_title.module.css";

const Section_title = ({ section_title }) => {
  return <span className={Styel.sectionTitle}>{section_title}</span>;
};

export default Section_title;
