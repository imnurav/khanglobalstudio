import React from "react";

const Teachers = () => {
  return (
    <div>
      <div className="text-center mt-5 mb-5 p-5">
        <h5>UPSC MASTER</h5>
        <h1>
          Meet the best brains behind <br /> UPSC Civil Services <br />{" "}
          preparation
        </h1>
      </div>
      <div>
        <div class="grid grid-three-column card-group carousel slide mt-5">
          <div class="card carousel-item active">
            <img
              src="https://khanglobalstudies.com/images/advisor/khan_sir.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Khan Sir</h5>
            </div>
          </div>
          <div class="card">
            <img
              src="https://khanglobalstudies.com/images/advisor/manikant_sir.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Manikant sir</h5>
            </div>
          </div>
          <div class="card">
            <img
              src="https://khanglobalstudies.com/images/advisor/sir.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Rajesh Mishra sir</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
