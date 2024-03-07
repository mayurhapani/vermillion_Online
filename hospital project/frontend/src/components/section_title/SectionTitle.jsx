import React from "react";
import Styel from "./section_title.module.css";

const SectionTitle = ({ sectionTitle }) => {
  return <span className={Styel.sectionTitle}>{sectionTitle}</span>;
};

export default SectionTitle;
