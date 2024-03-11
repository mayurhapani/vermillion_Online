import React from "react";
import Styel from "./contact_us.module.css";
import Hero2 from "../../components/hero2/Hero2";
import Contact_Footer from "../../components/footer/Contact_Footer";

const para = {
  para: <p>Connect with ASG Eye Hospital - Your Gateway to Exceptional Eye Care and Support</p>,
};

const Contact_us = () => {
  return (
    <>
      <Hero2 PageTitle={"Contact Us"} PageName={"Contact"} isPara={true} para={para} />

      <section id={Styel.contact_us}>
        <div className="container">
          <div className={`${Styel.form_box} p-5 shadow rounded-4`}>
            <div className={`${Styel.form_head} pb-5`}>
              <h2 className="">
                Our constant endeavour is to provide high-quality care to our patients. Your feedback is important to us and can help us
                improve our services.
              </h2>
            </div>
            <div className={`${Styel.form_wrap}`}>
              <form id={`${Styel.review_form}`} className={`${Styel.review_form}`}>
                <div className="row">
                  <div className="col-md-6">
                    <div className={`${Styel.form_group}`}>
                      <label id="name-label" for="name">
                        Name
                      </label>
                      <input type="text" name="name" id="name" placeholder="Enter your name" className="form-control" required />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class={`${Styel.form_group}`}>
                      <label id="phone-label" for="phone">
                        Phone
                      </label>
                      <input type="tel" name="phone" id="phone" placeholder="phone" class="form-control" required />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={`${Styel.form_group}`}>
                      <label>Select Hospital</label>
                      <select id="dropdown" name="role" className="form-control" required>
                        <option disabled selected value>
                          Click Here To Select Hospital
                        </option>
                        <option value="Jodhpur">Jodhpur, Pal Link Road</option>
                        <option value="Jodhpur_Paota">Jodhpur, Paota</option>
                        <option value="Amritsar">Amritsar</option>
                        <option value="Guwahati_(Down_Town)">Guwahati (Down Town)</option>
                        <option value="Darbhanga">Darbhanga</option>
                        <option value="Dombivili">Dombivili</option>
                        <option value="Guwahati_(Paltan_Bazaar)">Guwahati (Paltan Bazaar)</option>
                        <option value="Patna_(Danapur)">Patna (Danapur)</option>
                        <option value="Hajipur">Hajipur</option>
                        <option value="Patna (Rajendra_Nagar)">Patna (Rajendra Nagar)</option>
                        <option value="Jamshedpur">Jamshedpur</option>
                        <option value="Kolkata_(BT_Road)">Kolkata (BT Road)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`${Styel.form_group}`}>
                      <label id="email-label" for="email">
                        Email
                      </label>
                      <input type="email" name="email" id="email" placeholder="Enter your email" className="form-control" required />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className={`${Styel.form_group}`}>
                      <label>Remark</label>
                      <textarea
                        id="comments"
                        className="form-control"
                        name="comment"
                        rows="4"
                        placeholder="Please enter your remark..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <button type="submit" id="submit" className="btn btn-primary btn-block">
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Contact_Footer />
    </>
  );
};

export default Contact_us;
