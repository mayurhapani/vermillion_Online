import React, { useRef, useState } from "react";
import Style from "./patient.module.css";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PatientReview() {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h2 className={`${Style.subTitle} mt-4 mb-5`}>Our patients speak about us</h2>
        </div>
        <div className="  ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <iframe
                  className={Style.patientIframe}
                  width="900"
                  height="450"
                  src="https://www.youtube.com/embed/i0ZHTiDTS30?si=MWGSGSYIjqFJVjkj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <iframe
                  className={Style.patientIframe}
                  width="900"
                  height="450"
                  src="https://www.youtube.com/embed/i0ZHTiDTS30?si=MWGSGSYIjqFJVjkj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-center">
                <iframe
                  className={Style.patientIframe}
                  width="900"
                  height="450"
                  src="https://www.youtube.com/embed/i0ZHTiDTS30?si=MWGSGSYIjqFJVjkj"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
