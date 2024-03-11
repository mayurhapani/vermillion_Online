import React from "react";
import s from "./news.module.css";

const MostReadBlogCards = ({ img, disc, sub_img, dr_name, blog_date }) => {
  return (
    <>
      <div className="col-4">
        <div className="p-3 rounded-4 shadow">
          <img className="w-100 rounded-3" src={img} alt="" />
          <h2>{disc}</h2>
          <div className="d-flex align-items-center my-3">
            <div className="me-3">
              <img className={`${s.news_right_thumbnail} me-2`} src={sub_img} alt="Client" />
              <span>
                by <b>{dr_name}</b>
              </span>
            </div>
            <div className="d-flex align-items-center">
              <i className={`${s.calander} fs-3 me-2 ri-calendar-2-line`}></i>
              <span>{blog_date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostReadBlogCards;
