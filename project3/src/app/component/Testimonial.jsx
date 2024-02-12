import React from "react";
import Image from "next/image";

import User1 from "../../../public/user1.png";
import stars from "../../../public/stars.png";

const Testimonial = () => {
  return (
    <section className="py-32 bg-[#F5F6F9]">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#6285CA] text-xl font-bold uppercase">testimonial</span>
          <h3 className="text-[#032342] font-bold text-6xl mt-5">
            What Our <span className="text-[#385182] text-6xl">Patient Says</span>
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-8/12 mx-auto px-16">
          <Image src={User1} />
          <h4 className="text-[#032342] text-4xl my-3">Raymond Galario</h4>
          <span className="text-[#888888] text-xl">Sydney, Australia</span>
          <Image className="w-2/12 my-5" src={stars} />
          <p className="text-[#032342] text-xl text-center">
            Now you can make an appointment with your doctor anywhere and anytime via online booking easier. Now you can make an appointment
            with your doctor anywhere and anytime via online booking easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
