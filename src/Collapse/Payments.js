import React from "react";

const Payments = () => {
  return (
    <div className="p-4 m-5">
      {/* first */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Mentioned price is yearly fee or monthly fee?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            The mentioned price is for entire duration of the batch.
          </div>
        </div>
      </div>
      {/* second */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            What are the payment options available?
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            You can pay through UPI, any card, net-banking and wallets.
          </div>
        </div>
      </div>
      {/* third */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            My amount got deducted but on app payment is still showing as
            pending?
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            You can contact our customer service: enquiry@khanglobalstudies.com
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
          >
            Can we purchase the course through EMI?
          </a>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">EMI option is not available.</div>
        </div>
      </div>
      {/* fifth */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample5"
          >
            What is the cancellation policy?
          </a>
        </p>
        <div className="collapse" id="collapseExample5">
          <div className="card card-body">
            Once the course is purchased there is no cancellation option
            available.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
