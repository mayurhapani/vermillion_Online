import React from "react";
import Style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={Style.footerMain}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-4/12">
            <div className={Style.footLeft}>
              <h4 className={Style.footTitle}>Dhameliya Kidney Hospital</h4>
              <p className={Style.footText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim laboriosam eius voluptate ipsam, error fugit praesentium
                aut modi. Rerum obcaecati deleniti laboriosam nesciunt nisi
              </p>
              <i className={`${Style.footSocIcon} fa-brands fa-facebook`}></i>
              <i className={`${Style.footSocIcon} fa-brands fa-instagram`}></i>
              <i className={`${Style.footSocIcon} fa-brands fa-linkedin`}></i>
            </div>
          </div>
          <div className="w-4/12">
            <div className={Style.footCenter}>
              <h5 className={Style.footSubTitle}>Get in Touch</h5>
              <p className={Style.footText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur omnis adipisci</p>

              <span className={Style.footCallIcon}>
                <i className={`${Style.footIconPosi} fa-solid fa-phone`}></i> +91 261 2490001
              </span>
              <span className={Style.footCallIcon}>
                <i className={`${Style.footIconPosi2} fa-solid fa-location-dot`}></i> 402, Aayush Doctor House, Lal Darwaja, Station Road,
                SURAT 395002 -GUJ INDIA
              </span>

              <a href="#">
                Get DIrection <i className={`${Style.footSocIcon} fa-solid fa-arrow-right-long`}></i>
              </a>
              <br />
              <a href="#">
                Our Branches <i className={`${Style.footSocIcon} fa-solid fa-arrow-right-long`}></i>
              </a>
            </div>
          </div>
          <div className="w-4/12">
            <div className={Style.footerRight}>
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <h6 className={Style.footSubTitle}>Madical Services</h6>
                  <ul>
                    <li className={Style.linkLi}>Kidney Stone</li>
                    <li className={Style.linkLi}>Prostate</li>
                    <li className={Style.linkLi}>Uro Oncology</li>
                    <li className={Style.linkLi}>Paediatric Urology</li>
                    <li className={Style.linkLi}>Femail Urology</li>
                  </ul>
                </div>
                <div className="w-1/2">
                  <h6 className={Style.footSubTitle}>Quick Links</h6>
                  <ul>
                    <li className={Style.linkLi}>Home</li>
                    <li className={Style.linkLi}>About Us</li>
                    <li className={Style.linkLi}>Medical Services</li>
                    <li className={Style.linkLi}>Testimonials</li>
                    <li className={Style.linkLi}>Contect Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.lineBottom}></div>
        <p className={Style.copyrifhted}>Non Copyrighted @ 2022 Desig and uloded by Dhameliya Kidney Hospital</p>
      </div>
    </footer>
  );
}
