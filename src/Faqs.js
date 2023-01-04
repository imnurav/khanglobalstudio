import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Courses from "./Collapse/Courses";
import Contact from "./Collapse/Contact";
import Payment from "./Collapse/Payments";
import General from "./Collapse/General";
const Faqs = () => {
  const [css, setCss] = useState("#");
  return (
    <div>
      <h5 className="mb-5">
        <Link className="textBlack" to="/">
          Home
        </Link>
        <strong className="textBlack">/</strong>{" "}
        <Link className="textBlack" to="/faq">
          <strong>FAQ's</strong>
        </Link>
      </h5>
      <h1 className="text-center mt-5">Frequently Asked Questions</h1>
      <div className="d-flex mt-5 mb-5 justify-content-center container">
        <div className="row p-5">
          <NavLink
            href="#"
            onClick={() => setCss("#")}
            className={
              css === "#"
                ? "col-sm-2 p-5 squareBox activeClass"
                : "textBlack col-sm-2 p-5 squareBox"
            }
          >
            <i
              className={
                css === "#"
                  ? "fa-solid fa-flag activeClass"
                  : "fa-solid fa-flag"
              }
            />{" "}
            Courses
          </NavLink>
          <NavLink
            href="#pay"
            onClick={() => setCss("#pay")}
            className={
              css === "#pay"
                ? "col-sm-2 p-5 squareBox activeClass"
                : "textBlack col-sm-2 p-5 squareBox"
            }
          >
            <i
              className={
                css === "#pay"
                  ? "fa-solid fa-sack-dollar activeClass"
                  : "fa-solid fa-sack-dollar"
              }
            ></i>{" "}
            Payments
          </NavLink>
          <NavLink
            href="#gen"
            onClick={() => setCss("#gen")}
            className={
              css === "#gen"
                ? "col-sm-2 p-5 squareBox activeClass"
                : "textBlack col-sm-2 p-5 squareBox"
            }
          >
            <i
              className={
                css === "#gen"
                  ? "fa-solid fa-book-open activeClass"
                  : "fa-solid fa-book-open"
              }
            ></i>{" "}
            General
          </NavLink>
          <NavLink
            href="#con"
            onClick={() => setCss("#con")}
            className={
              css === "#con"
                ? " col-sm-2 p-5 squareBox activeClass"
                : " textBlack col-sm-2 p-5 squareBox"
            }
          >
            <i
              className={
                css === "#con"
                  ? "fa-solid fa-phone activeClass"
                  : "fa-solid fa-phone"
              }
            ></i>{" "}
            ContactUs
          </NavLink>
        </div>
      </div>

      {css === "#" && <Courses />}
      {css === "#pay" && <Payment />}
      {css === "#gen" && <General />}
      {css === "#con" && <Contact />}

      <div className="text-center mt-5 mb-5 p-5">
      <h5 className="textBlue">DOWNLOAD OUR APP </h5>
      <h1>WANT TO JOIN OUR COURSES?</h1>
      <p className="mb-0 mt-4">
      Download our mobile app to register for any courses with the best price available 
      </p>
      <button className="buttonBlue"> Download Now</button>
    </div>
    </div>
  );
};

export default Faqs;
