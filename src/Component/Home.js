import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Count from "./Count";
import Cources from "./Cources";
import ELearning from "./ELearning";
import Form from "./Form";
import LearnSection from "./LearnSection";
import Product from "./Product";
import Teachers from "./Teachers";
import PlayStore from "../assets/play.png";

const Home = () => {
  return (
    <div>
      <div className="grid grid-two-column mb-2 p-2">
        <div className="leftSide">
          <h1>The Most Trusted Learning Platform.</h1>
          <p className="textBlack">
            Learn from India's top best faculty, Download our app to start
            learning
          </p>
          <Link to="/">
            <button className="blackButton mt-4">
              <a target="_blank" rel="noreferrer" href="https://bit.ly/kgs-app">
                <img className="w-100" src={PlayStore} alt="..." />
              </a>
            </button>
          </Link>
          <p className="popular">
            <span className="mb-3 textBlack">Popular : </span>
            <Link className="linkpad" to="/">
              UPSC
            </Link>
            <Link className="linkpad" to="/">
              PCS
            </Link>
            <Link className="linkpad" to="/">
              SSC
            </Link>
            <Link className="linkpad" to="/">
              Railway
            </Link>
            <Link className="linkpad" to="/">
              other state competitive exams
            </Link>
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>

      {/* next section */}
      <div>
        <LearnSection />
      </div>

      {/* courses section */}
      <div>
        <Cources />
      </div>

      {/* courses  section */}
      <div>
        <Product />
      </div>

      {/* teachers section */}
      <div>
        <Teachers />
      </div>
      {/* E learning section */}
      <div>
        <ELearning />
      </div>

      {/* categories */}
      <div>
        <Categories />
      </div>

      {/* count section
       */}
      <div>
        <Count />
      </div>
    </div>
  );
};

export default Home;
