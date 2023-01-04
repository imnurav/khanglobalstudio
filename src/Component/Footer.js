import React from "react";
import Mobile from "../assets/mobile.png";
import { Link } from "react-router-dom";
import IMG1 from "../assets/kgs-logo.png";
import PlayStore from "../assets/play.png";
const Footer = () => {
  return (
    <div className="">
      <section className="contact-short">
        <div
          className="grid grid-two-column text-center"
          style={{ backgroundColor: "#383386", padding: 0 }}
        >
          <div className="whiteText" style={{ backgroundColor: "#383386" }}>
            <h1 style={{ backgroundColor: "#383386", marginTop: "10%" }}>
              The most trusted learning platform on your phone
            </h1>
            <button className="blackButton mt-4">
              <a target="_blank" rel="noreferrer" href="https://bit.ly/kgs-app">
                <img className="w-100" src={PlayStore} alt="..." />
              </a>
            </button>
          </div>
          <div className="text-center " style={{ backgroundColor: "#383386" }}>
            <img src={Mobile} alt="" />
          </div>
        </div>
      </section>
      <footer className="mt-5">
        <div
          className="container grid grid-two-column-pr  "
          style={{ backgroundColor: "#100F1F" }}
        >
          <div
            className="grid grid-two-column"
            style={{ backgroundColor: "#100F1F" }}
          >
            <div style={{ backgroundColor: "#100F1F", padding: 0 }}>
              <img
                style={{ backgroundColor: "#100F1F", padding: 0 }}
                className="brand-height rounded"
                src={IMG1}
                alt="..."
              />
              <h5 className="text-left mt-5">
                KGS is the Most Trusted Learning Platform. Download our app to
                start learning
              </h5>
              <button className="blackButton mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bit.ly/kgs-app"
                >
                  <img className="w-100" src={PlayStore} alt="..." />
                </a>
              </button>
            </div>
            <div
              className="text-white"
              style={{ backgroundColor: "#100F1F", padding: 0 }}
            >
              <ul className="unorderedList ">
                <h2>Explore</h2>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about-us">
                  <li>About</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/career">
                  <li>Career</li>
                </Link>
                <Link to="/faq">
                  <li>FAQs</li>
                </Link>
              </ul>
            </div>
          </div>
          <div
            className="grid grid-two-column"
            style={{ backgroundColor: "#100F1F" }}
          >
            <div style={{ backgroundColor: "#100F1F" }}>
              <div
                className="text-white"
                style={{ backgroundColor: "#100F1F", padding: 0 }}
              >
                <ul className="unorderedList">
                  <h2>Resources</h2>
                  <Link to="/">
                    <li>Student Success</li>
                  </Link>
                  <Link to="/">
                    <li>Scholarships</li>
                  </Link>
                  <Link to="/">
                    <li>For Business</li>
                  </Link>
                  <Link to="/">
                    <li>Teams</li>
                  </Link>
                  <Link to="/">
                    <li>Team Plans</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div style={{ backgroundColor: "#100F1F" }}>
              <div
                className="text-white"
                style={{ backgroundColor: "#100F1F" }}
              >
                <ul className="unorderedList p-3">
                  <h2>Address</h2>
                    <a className="unorderedList text-white" href="/" rel="noreferrer">
                      <i class="text-white fa-solid fa-location-dot  back" />
                      Khan Global Studies Pvt. Ltd. 5th Floor, A13A, Sector 62,
                      Noida, Uttar Pradesh 201309
                    </a>
                    <br />
                  <a
                    className="unorderedList text-white mt-2"
                    href="mailto:enquiry@khanglobalstudies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa-regular fa-envelope text-white back" />enquiry@khanglobalstudies.com
                    
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="d-flex justify-content-between unorderedList text-white p-4">
        <p className="unorderedList text-white">
          @{new Date().getFullYear()} Copyright 2023{" "}
          <Link className="unorderedList" to="/">
            KhanGlobalStudies
          </Link>{" "}
        </p>
        {/* <div className="unorderedList">  */}

        <p className="unorderedList text-white">
          PRIVACY POLICY || TERMS & CONDITIONS
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
