import React from "react";

const Form = () => {
  return (
    <div className="container text-center bgRight">
      <h1 style={{ backgroundColor: "transparent" }}>Ready to get started?</h1>
      <p style={{ backgroundColor: "transparent" }}>
        Your email address and phone number will not be published.
      </p>
      <div className="form-group">
        <form
          action="https://formspree.io/f/xnqyqply"
          method="post"
          className=""
        >
          <div class="row m-0">
            <div class="col">
              <input
                type="text"
                name="username"
                className="form-control "
                placeholder="Your Name"
                required
                autoComplete="off"
                id=""
              />
            </div>
            <div class="col">
              <input
                type="email"
                className="form-control"
                name="Email"
                placeholder="Your email address"
                autoComplete="off"
                required
                id=""
              />
            </div>
          </div>
          <input
            type="number"
            className="form-control mt-4"
            name="PhoneNumber"
            placeholder="Your phone number"
            autoComplete="off"
            required
            id=""
          />
          <select name="Options" class=" form-control mt-3 custom-select">
            <option selected value="UPSC">
              UPSC
            </option>
            <option value="PCS">PCS</option>
            <option value="SSC">SSC</option>
            <option value="Railway">Railway</option>
            <option value="Other state competitive exams">
              Other state competitive exams
            </option>
          </select>
          <textarea
            name="Message"
            className="form-control mt-3"
            placeholder="Write your message"
            id=""
            cols="10"
            rows="5"
          ></textarea>
          <input
            className="buttonBlue p-3"
            type="submit"
            value="Send Enquiry"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
