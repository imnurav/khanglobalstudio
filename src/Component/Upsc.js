import React from "react";
import { Link } from "react-router-dom";

const Upsc = () => {
  return (
    <div>
      <h5 className="mb-5">
        <Link className="textBlack" to="/">
          Home
        </Link>
        <strong className="textBlack"> /</strong>{" "}
        <Link className="textBlack" to="/contact">
          <strong>upsc-hindi-hinglish-medium</strong>
        </Link>
      </h5>
      <div className="text-center">
        <h1>UPSC(I.A.S) Hindi & Hinglish medium</h1>
        <h4>The Most Trusted Learning Platform.</h4>
      </div>
      <div className="h-100">
        <img
          src="https://khanglobalstudies.com/images/banners/banner-001.jpg"
          alt=".."
          width="100%"
        />
      </div>
      <div className="grid ">
        <div className="row ">
          <div className="col-sm-8 desc">
            <h2 className="underline">Overview</h2>
            <h1>Course Description</h1>
            <p>
              UPSC is India's central agency which conducts exams like Civil
              Services Exam (CSE) to recruit candidates into top government
              services like IAS, IPS, IFS etc. UPSC recruits candidates to both
              civil services as well as defence services.
            </p>
            <p>
              UPSC conducts Preliminary Examination of the Civil Services
              Examination for recruitment to the Indian Administrative Service
              (IAS), Indian Foreign Service (IFS), Indian Police Service (IPS)
              and other Central Services and posts in accordance with the Rules
              published by the Government (Department of Personnel & Training)
              in the Gazette of India Extraordinary
            </p>
            <p>
              This Examination is meant to serve as a screening test only; the
              marks obtained in the Preliminary Examination by the candidates,
              who are declared qualified for admission to the Main Examination,
              are not counted for determining their final order of merit. Only
              those candidates, who are declared by the Commission to have
              qualified in the Preliminary Examination in the year, will be
              eligible to appear at the Main Examination of that year provided
              they are otherwise eligible for admission to the Main Examination.
            </p>
            <p>
              The question papers (other than the literature of language papers)
              are set in Hindi and English.
            </p>
            <p>
              Candidates can apply online for the UPSC Examinations by accessing
              the online portal hosted on the UPSC’s website
              <a href="https://upsconline.nic.in">(https://upsconline.nic.in)</a>
            </p>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/B1gB_pRfKXc?start=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="card-body">
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h4>
                      <i class="fa-solid fa-hand-holding-dollar fa-1x" />
                      Price
                    </h4>
                  </div>
                  <div style={{ marginTop: "-4%" }}>
                    <h1 className="textBlue">Rs. 7500 /-</h1>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h4>
                      <i class="fa-solid fa-person-chalkboard fa-1x" />
                      Teacher
                    </h4>
                  </div>
                  <div>
                    <h3 className="textBlack">Khan Sir & Team</h3>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h4>
                      <i class="fa-solid fa-clock fa-1x" />
                      Duration
                    </h4>
                  </div>
                  <div>
                    <h3 className="textBlack">10 Months</h3>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <h4>
                      <i class="fa-solid fa-clock fa-1x" />
                      Validity
                    </h4>
                  </div>
                  <div>
                    <h3 className="textBlack">18 Months</h3>
                  </div>
                </div>
                <a
                  href="https://bit.ly/kgs-app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn BackgroundBlue w-100"
                >
                  <i class="fa-solid fa-cart-shopping  BackgroundBlue fa-1x" />{" "}
                  Enroll Now
                </a>
                <h3
                  className="textBlue text-center mt-3"
                  style={{ cursor: "pointer" }}
                >
                  Share This Course <i class="fa-solid fa-share fa-1x"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsc;
