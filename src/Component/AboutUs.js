import React from "react";
import { Link } from "react-router-dom";
import Count from "./Count";

const AboutUs = () => {
  return (
    <div className="">
      <h5 className="">
        <Link className="textBlack" to="/">
          Home
        </Link>
        <strong className="textBlack">/</strong>{" "}
        <Link className="textBlack" to="/about-us">
          <strong>About Us</strong>
        </Link>
      </h5>
      <div>
        <h1 className=" AboutUs text-center mt-5 mb-5">About Us</h1>
      </div>
      <div className="grid grid-two-column product">
        <div className="p-5">
          <h5 className="textBlue">E-LEARNING</h5>
          <h1>Know About KGS - Khan Global Studies</h1>
          <p className="textBlack">
            Here you will find General knowledge, Current Affairs, Science &
            Technology, History, Polity, Geography, Economics, Physics,
            Chemistry, Biology, Computer, Science & Technology, Defence, Space
            Technology, Indian Map & World Map, Social education video. Best
            Coaching Institute in India For UPSC, UPPCS, BPSC,BSSC, UPSSSC, SSC,
            Bank, Rly, Airforce, NDA, CDS, CPF and Other competitive
            Examination.
          </p>
          <strong className="textBlack">
            <p className="textBlack">
              Grow your knowledge and your opportunities with thought
              leadership, training and tools.
            </p>
          </strong>
        </div>
        <div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/B1gB_pRfKXc?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <Count />
      </div>
      <div className="text-center mt-5 mb-5 p-5">
        <h5 className="textBlue">TOP COURSES</h5>
        <h1>Online Coaching Lessons For </h1>
        <h1>Remote Learning</h1>
        <p className="mb-0 mt-4 textBlack">
          Best Online Platform in India For UPSC, UPPCS, BPSC,BSSC, UPSSSC, SSC,
          Bank,
        </p>
        <p className="textBlack">
          Rly, Airforce, NDA, CDS, CPF and Other competitive Examination...
        </p>
      </div>
      {/* section */}
      <div className="grid grid-three-column">
        <div>
          <div className="m-2">
            <i class="fa-solid fa-brain fa-3x mb-3" />
            <h4>Learn From the Experts</h4>
            <p className="textBlack">
              Learning from experts can bring an extra-ordinary outcome in a
              career.
            </p>
            <a className="">Start Now!</a>
          </div>
        </div>
        <div>
          <div className="">
            <i class="fa-solid fa-tv fa-3x mb-3" />
            <h4>Learn From the Experts</h4>
            <p className="textBlack">
              Learning from experts can bring an extra-ordinary outcome in a
              career.
            </p>
            <a className="">Start Now!</a>
          </div>
        </div>
        <div>
          <div className="m-2">
            <i class="fa-solid fa-shield-halved fa-3x mb-3"></i>
            <h4>Learn From the Experts</h4>
            <p className="textBlack">
              Learning from experts can bring an extra-ordinary outcome in a
              career.
            </p>
            <a className="">Start Now!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
