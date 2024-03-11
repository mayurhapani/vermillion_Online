import React from "react";
import s from "./news.module.css";

import Hero2 from "../../components/hero2/Hero2";
import LatestNews from "../../components/latestNews/LatestNews";
import LaserSurgeryCard from "./Laser_Surgery_Card";
import MostReadBlogCards from "./Most_read_blog_cards";
import Footer from "../../components/footer/Footer";

import adv_surgery_1 from "../../assets/images/adv_surgery_1.png";
import adv_surgery_2 from "../../assets/images/adv_surgery_2.png";
import adv_surgery_3 from "../../assets/images/adv_surgery_3.png";
import adv_surgery_4 from "../../assets/images/adv_surgery_4.png";
import adv_surgery_5 from "../../assets/images/adv_surgery_5.png";
import adv_surgery_6 from "../../assets/images/adv_surgery_6.png";
import adv_surgery_7 from "../../assets/images/adv_surgery_7.png";
import adv_surgery_8 from "../../assets/images/adv_surgery_8.png";
import doctor1 from "../../assets/images/doctor1.png";

const laser_cards_Data = [
  {
    img: adv_surgery_1,
    sub_img: doctor1,
    disc: "The Correct Way to Put Medicine in Your Eyes: Tips and Techniques",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_2,
    sub_img: doctor1,
    disc: "Eye Care for Professionals: Navigating Digital Challenges",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_3,
    sub_img: doctor1,
    disc: "How to Give First Aid and Care for Eye Emergencies?",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_4,
    sub_img: doctor1,
    disc: "5 Important Dermatologist Tips for Dry Eyelids (Blepharitis)",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_5,
    sub_img: doctor1,
    disc: "The Correct Way to Put Medicine in Your Eyes: Tips and Techniques",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_6,
    sub_img: doctor1,
    disc: "Eye Care for Professionals: Navigating Digital Challenges",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
];

const blog_cards_Data = [
  {
    img: adv_surgery_7,
    sub_img: doctor1,
    disc: "The Correct Way to Put Medicine in Your Eyes: Tips and Techniques",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_8,
    sub_img: doctor1,
    disc: "Eye Care for Professionals: Navigating Digital Challenges",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
  {
    img: adv_surgery_1,
    sub_img: doctor1,
    disc: "How to Give First Aid and Care for Eye Emergencies?",
    dr_name: "Dr. Arun Singhvi",
    blog_date: "Sep 08, 2023",
  },
];

const NewsPg = () => {
  return (
    <>
      <Hero2 PageTitle={"News & Events"} PageName={"Blog"} />

      <LatestNews />
      <section>
        <div className="container">
          <div className={s.news_head}>
            <h2 className="text-center">Advanced laser eye surgery</h2>
          </div>
          <div className="row gy-4">
            {
              // sec_one_card.map((item) => item)
              laser_cards_Data.map((item, index) => (
                <LaserSurgeryCard
                  key={index}
                  img={item.img}
                  sub_img={item.sub_img}
                  disc={item.disc}
                  dr_name={item.dr_name}
                  blog_date={item.blog_date}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={s.news_head}>
            <h2 className="text-center">Most Read Blog</h2>
          </div>
          <div className="row gy-4">
            {blog_cards_Data.map((item, index) => (
              <MostReadBlogCards
                key={index}
                img={item.img}
                sub_img={item.sub_img}
                disc={item.disc}
                dr_name={item.dr_name}
                blog_date={item.blog_date}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewsPg;
