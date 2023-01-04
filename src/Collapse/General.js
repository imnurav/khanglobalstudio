import React from "react";

const General = () => {
  return (
    <div className="p-4 m-5">
      {/* first */}
      <div className="product p-3 mt-2">
        <p>
          <a
            class=""
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            I accidentally purchased wrong course can I cancel it and purchase a
            new one?
          </a>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            You can contact our customer service: enquiry@khanglobalstudies.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
