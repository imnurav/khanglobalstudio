import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
const ContactUs = () => {
  return (
    <div>
        <h5 className="mb-5">
        <Link className="textBlack" to="/">
          Home
        </Link>
        <strong className="textBlack"> /</strong>{" "}
        <Link className="textBlack" to="/contact">
          <strong>Contact Us</strong>
        </Link>
      </h5>
      <h1 className="mt-5 mb-5 text-center">Contact</h1>
      <div className="grid grid-two-column mb-2 p-2">
        <div className="mt-5">
          <h5 className="textBlack">CONTACT DETAILS</h5>
          <h1>Get in Touch</h1>
          <p>
            For any enquiry, Send us email or message using following
            information.
          </p>
          <div>
            <div className="row">
              <div className="col-3">
                <i class="fa-solid icon fa-location-dot fa-3x"></i>
              </div>
              <div className="col-9">
                <h2>Our Address</h2>
                <p>
                  Khan Global Studies Pvt. Ltd. 5th Floor, A13A, Sector 62,
                  Noida, Uttar Pradesh 201309
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-3 " >
                <i class="fa-solid icon fa-phone-volume fa-3x"></i>
              </div>
              <div className="col-9">
                <h2>Contact</h2>
                <p>Mail: <a href="mailto:enquiry@khanglobalstudies.com">enquiry@khanglobalstudies.com</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-3 " >
                <i class="fa-solid icon fa-clock fa-3x"></i>
              </div>
              <div className="col-9 ">
                <h2>Hours of Operation</h2>
                <p>Monday - Friday: 09:00 - 20:00</p>
                <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
