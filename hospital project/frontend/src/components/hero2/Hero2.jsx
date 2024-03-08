import React from "react";
import Style from "./hero2.module.css";

export default function Hero2({ PageTitle, PageName, isSubName, subPageName }) {
  return (
    <section className={Style.hero2Outer}>
      <div className="container">
        <div className="hero2inner">
          <div className="text-center text-light">
            <h2 className={Style.title}>{PageTitle}</h2>
            <span>
              <span className={Style.textLight}>Home</span> <span className="px-2">/</span>{" "}
              <span className={`${isSubName && Style.textLight}`}>{PageName}</span>
              {isSubName && (
                <>
                  <span className="px-2">/</span>
                  {subPageName}
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
