import React from "react";
import Style from "./latest_news.module.css";
import event_1 from "../../assets/images/event_1.png";
import sub_event_1 from "../../assets/images/sub_event_1.png";
import event_2 from "../../assets/images/event_2.png";
import sub_event_2 from "../../assets/images/sub_event_2.png";
import event_3 from "../../assets/images/event_3.png";
import sub_event_3 from "../../assets/images/sub_event_3.png";
import Buttonn from "../button/Button";

const LatestNews = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.news_head}>
          <h2>See our latest News & Events</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text</p>
        </div>
        <div className="row gx-5">
          <div className="col-6">
            <div className={`${Style.news_left} shadow shadow-5 rounded-4`}>
              <img className="w-100" src={event_1} alt="" />
              <p className="mb-0 py-4">Eye Care for Professionals: Navigating Digital Challenges</p>
              <div className="d-flex align-items-center">
                <div className="me-5">
                  <img className="me-2" src={sub_event_1} alt="Client" />
                  <span>
                    by <b>Dr. Arun Singhvi</b>
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fs-3 me-2  ri-calendar-2-line"></i>
                  <span>Sep 08, 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-between">
            <div className={`${Style.news_right} d-flex align-items-center shadow shadow-5  rounded-4`}>
              <img className={Style.img1} src={event_2} alt="" />
              <div className={`${Style.news_right_inner} ps-4 py-3`}>
                <p className="mb-0">How to Give First Aid and Care for Eye Emergencies?</p>
                <div className="d-flex align-items-center my-3">
                  <div className="me-3">
                    <img className={`${Style.news_right_thumbnail} me-2`} src={sub_event_2} alt="Client" />
                    <span>
                      by <b>Dr. Arun Singhvi</b>
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className={`${Style.calander} fs-3 me-2 ri-calendar-2-line`}></i>
                    <span>Sep 08, 2023</span>
                  </div>
                </div>
                <Buttonn isTrans={true} btn_title={"Read More"} />
              </div>
            </div>
            <div className={`${Style.news_right} d-flex align-items-center shadow shadow-5  rounded-4`}>
              <img className={Style.img1} src={event_3} alt="" />
              <div className={`${Style.news_right_inner} ps-4 py-3`}>
                <p className="mb-0">How to Give First Aid and Care for Eye Emergencies?</p>
                <div className="d-flex align-items-center my-3">
                  <div className="me-3">
                    <img className={`${Style.news_right_thumbnail} me-2`} src={sub_event_3} alt="Client" />
                    <span>
                      by <b>Dr. Anup Kumar</b>
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className={`${Style.calander} fs-3 me-2 ri-calendar-2-line`}></i>
                    <span>Sep 08, 2023</span>
                  </div>
                </div>
                <Buttonn isTrans={true} btn_title={"Read More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
