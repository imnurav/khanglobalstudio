import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/kgs-logo.png";
import PlayStore from "../assets/play.png"
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top t">
      <div class="container">
        <Link class="navbar-brand  " to="/">
          <img className="brand-height" src={IMG1} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class=" collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <strong>
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </strong>
            </li>
            <li class="nav-item">
              <strong>
                <Link class="nav-link" to="/about-us">
                  About Us
                </Link>
              </strong>
            </li>
            <li class="nav-item">
              <strong>
                <Link class="nav-link" to="/faq">
                  FAQs
                </Link>
              </strong>
            </li>
            <li class="nav-item">
              <strong>
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </strong>
            </li>
            <li class="nav-item">
              <p>
                <button className="blackButton">
                  <a target="_blank" rel="noreferrer" href="https://bit.ly/kgs-app">
                    <img className="w-100" src={PlayStore} alt="..." />
                  </a>
                </button>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
