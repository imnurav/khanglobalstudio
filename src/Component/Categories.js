import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="mt-5 text-center mb-5">
        <h5>CATEGORIES</h5>
        <h1>Top Categories</h1>
        <p>
          Currently KGS is providing various competitive courses that would help
          our students to <br /> beat the competition. You can checkout our
          courses here.
        </p>
      </div>
      <div className="grid grid-three-column-pr ">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className=" hoverEffect w-100"
            />
            <div className="centered ">
              <h1>UPSC</h1>
              <h5>0 Courses</h5>
            </div>
          </Link>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className=" hoverEffect w-100 h-100"
            />
            <div className="centered ">
              <h1>PCS</h1>
              <h5>0 Courses</h5>
            </div>
          </Link>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className=" hoverEffect w-100"
            />
            <div className="centered ">
              <h1>SSC</h1>
              <h5>0 Courses</h5>
            </div>
          </Link>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className=" hoverEffect w-100"
            />
            <div className="centered ">
              <h1>Railway</h1>
              <h5>0 Courses</h5>
            </div>
          </Link>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="..."
              className=" hoverEffect w-100"
            />
            <div className="centered ">
              <h3>Other state competitive exams</h3>
              <h5>0 Courses</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
