"use client";
import React, { useState } from "react";
import Style from "../styles/Help.module.css";
import Button from "./Button";

const Help = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const submited = (e) => {
    e.preventDefault();

    setIsSubmited(true);
    // console.log(e.target);
    // e.target.addclass({ hidden });
  };

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="">
          <div className="flex">
            <div className="w-1/2">
              <div className=" mb-14 pr-14">
                <span className="text-[#6285CA] text-xl font-bold">HELP</span>
                <h3 className="text-[#032342] font-bold text-5xl mt-5 mb-8">
                  A <span className="text-[#385182] text-5xl">Dialysis Patient’s</span> Life Is Hard. Laugh Harder.
                </h3>
                <span className="text-2xl text-[#032342]">Our support services inclide:</span>
                <p className="my-6 text-[#888888]">
                  Today the hospital is recognised as a world-renowned institution, not only providing outstanding care and treatment, our
                  goal is to deliver quality care in a respectful & compassionate manner. We strive to be the first and best choice for
                  healthcare.
                </p>
                <ul className="list-disc ml-5 text-[#888888]">
                  <li>A family history of stone disease</li>
                  <li>Stones caused by an infection in your urinary system</li>
                  <li>A genetic condition which makes you prone to forming stones</li>
                  <li>A cyst or a condition called calyceal diverticulum</li>
                  <li>Swelling in one of your ureters, called ureterocele</li>
                </ul>
              </div>
            </div>

            <div className="w-1/2">
              {isSubmited ? (
                <div className="flex justify-center items-center h-full">
                  <span className="text-4xl">Your Form Has Been Submited</span>
                </div>
              ) : (
                <form onSubmit={submited} id="Form" class={Style.formOuter}>
                  <input class={Style.formInput} type="text" placeholder="Name" />
                  <input class={Style.formInput} type="email" placeholder="Email" />
                  <input class={Style.formInput} type="tel" placeholder="Phone number" />
                  <input class={Style.formInput} type="email" placeholder="Experience" />
                  <input class={Style.formInput} type="file" />
                  <input class={Style.formInput} type="text" placeholder="Designation" />

                  <textarea class={Style.formTextArea} placeholder="Massage" rows="6"></textarea>
                  <button type="submit" className={Style.submitBtn}>
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
