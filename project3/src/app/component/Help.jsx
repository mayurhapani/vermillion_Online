import React from "react";

const Help = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="">
          <div className="flex">
            <div className="w1/2">
              <div className=" mb-14">
                <span className="text-[#6285CA] text-xl font-bold">HELP</span>
                <h3 className="text-[#032342] font-bold text-5xl mt-5">
                  A <span className="text-[#385182] text-5xl">Dialysis Patient’s</span> Life Is Hard. Laugh Harder.
                </h3>
                <span>Our support services inclide:</span>
                <p>
                  Today the hospital is recognised as a world-renowned institution, not only providing outstanding care and treatment, our
                  goal is to deliver quality care in a respectful & compassionate manner. We strive to be the first and best choice for
                  healthcare.
                </p>
                <ul className="list-disc">
                  <li>A family history of stone disease</li>
                  <li>Stones caused by an infection in your urinary system</li>
                  <li>A genetic condition which makes you prone to forming stones</li>
                  <li>A cyst or a condition called calyceal diverticulum</li>
                  <li>Swelling in one of your ureters, called ureterocele</li>
                </ul>
              </div>
            </div>

            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
