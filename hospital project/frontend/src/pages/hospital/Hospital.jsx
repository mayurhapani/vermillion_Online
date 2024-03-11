import React from "react";
import s from "./hospital.module.css";
import Hero2 from "../../components/hero2/Hero2";
import MapComponent from "../../components/googlemap/GoogleMap";

import hospital_1 from "../../assets/images/Hospital_1.png";
import hospital_2 from "../../assets/images/Hospital_2.png";
import hospital_3 from "../../assets/images/Hospital_3.png";
import hospital_4 from "../../assets/images/Hospital_4.png";
import hospital_5 from "../../assets/images/Hospital_5.png";
import hospital_6 from "../../assets/images/Hospital_6.png";
import hospital_7 from "../../assets/images/Hospital_7.png";
import hospital_8 from "../../assets/images/Hospital_8.png";
import hospital_9 from "../../assets/images/Hospital_9.png";
import hospital_10 from "../../assets/images/Hospital_10.png";
import hospital_11 from "../../assets/images/Hospital_11.png";
import hospital_12 from "../../assets/images/Hospital_12.png";
import Hospital_Card from "./Hospital_Card";

const laser_cards_Data = [
  {
    img: hospital_1,
    disc: "Jodhpur, Pal Link Road",
    location: "1, Pal Link Rd, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_2,
    disc: "Jodhpur, Paota",
    location: "Plot no. 7&8, Mandore Rd, Manji ka Hatha, Paota, Jodhpur, Rajasthan 342003",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_3,
    disc: "Amritsar",
    location: "Plot No 3, Mukut House, Mall Rd, opp. Company Bagh, Amritsar, Punjab 143001",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_4,
    disc: "Guwahati (Down Town)",
    location: "Shubham Redstone, First Floor, G.S. Road, Down Town, Bormotoria, Guwahati, Assam 781006",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_5,
    disc: "Darbhanga",
    location: "Beena Imperia Benta, Ward No :, 43, VIP Rd, Laheriasarai, Darbhanga, Bihar 846001",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_6,
    disc: "Dombivili",
    location: "Jaykul arcade, Manpada Rd, opp. Indian bank, Dombivli East, Dombivli, Maharashtra 421201",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_7,
    disc: "Guwahati (Paltan Bazaar)",
    location: "Amaze Plaza, MD Shah Rd, opp. Hotel Hornbill, Paltan Bazaar, Guwahati, Assam 781008",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_8,
    disc: "Patna (Danapur)",
    location: "Swadha Sharda Complex, Saguna Khagaul Rd, near Canara Bank, Danapur, Bihar 801503",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_9,
    disc: "Hajipur",
    location: "Naveen Plaza, Near Anjanpeer Chowk, Lalganj Road, Hajipur, Bihar 844101",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_10,
    disc: "Patna (Rajendra Nagar)",
    location: "OLD R.K. Avenue, Rajendra Nagar Near Dinkar, Golambar, Patna, Bihar 800004",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_11,
    disc: "Jamshedpur",
    location: "159, Dhalbhum Road, SNP Area, Ambagan, Sakchi, Jamshedpur, Jharkhand 831001",
    c_no: "+91 88877 77766",
  },
  {
    img: hospital_12,
    disc: "Kolkata (BT Road)",
    location: "Ground and First Floor, 149, Barrackpore Trunk Rd, Kamarhati, Kolkata, West Bengal 700058",
    c_no: "+91 88877 77766",
  },
];

const para = {
  para: (
    <p>
      ASG Eye Hospitals brings state of art technology ophthalmology care with an aim to extend the highest standard of eye care.
      <br />
      The hospital will provide services includingsuperspecialist consultations by ASG expert doctors, best inpatient treatments using the
      most diagnosis and treatment of complex eye conditions.
    </p>
  ),
};

const Hospital = () => {
  return (
    <>
      <Hero2 PageTitle={"Hospitals"} PageName={"Hospitals"} isPara={true} para={para} />

      <section>
        <div className="container">
          <div className={s.hosp_head}>
            <h2 className={`text-center mb-5`}>Hospital Locations</h2>
          </div>
          <div className={`${s.hosp_map} p-5`}>
            <MapComponent isFullSize={true} />
            <div className={`${s.form_div} d-flex justify-content-between`}>
              <div className={`${s.hosp_search_by_code}`}>
                <input className="form-control p-3" list="datalistOptions" id="exampleDataList" placeholder="Enter Zipcode.." />
              </div>
              <div className={`${s.hosp_search_by_name}`}>
                <input className="form-control p-3" list="datalistOptions" id="exampleDataList" placeholder="Search Hospital.." />
                <datalist id="datalistOptions">
                  <option value="Jodhpur, Pal Link Road" />
                  <option value="Jodhpur, Paota" />
                  <option value="Amritsar" />
                  <option value="Guwahati (Down Town)" />
                  <option value="Darbhanga" />
                  <option value="Dombivili" />
                  <option value="Guwahati (Paltan Bazaar)" />
                  <option value="Patna (Danapur)" />
                  <option value="Hajipur" />
                  <option value="Patna (Rajendra Nagar)" />
                  <option value="Jamshedpur" />
                  <option value="Kolkata (BT Road)" />
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row gy-4">
            {laser_cards_Data.map((item, index) => (
              <Hospital_Card key={index} img={item.img} disc={item.disc} location={item.location} c_no={item.c_no} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hospital;
