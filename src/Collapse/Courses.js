import React from "react";

const Courses = () => {
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
            How do I get started?
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            You can register for courses through using this link:
            https://bit.ly/kgs-app
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
            What are the courses available ?
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            Currently UPSC, BPSC, state PCS and other competitive courses are
            available.
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
            Can you please help me with the course duration ?
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            UPSC - 12 months, BPSC and PCS - 10 months,
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
            In which medium are the courses available?
          </a>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">
            The courses are available in Hindi/English both.
          </div>
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
            Is the course virtually available (Online) or offline mode?
          </a>
        </p>
        <div className="collapse" id="collapseExample5">
          <div className="card card-body">Courses are available Online.</div>
        </div>
      </div>

      {/* six */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample6"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample6"
          >
            Do all programs have live-doubt solving?
          </a>
        </p>
        <div className="collapse" id="collapseExample6">
          <div className="card card-body">Yes</div>
        </div>
      </div>
      {/* seventh */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample7"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample7"
          >
            How can access my course notes?
          </a>
        </p>
        <div className="collapse" id="collapseExample7">
          <div className="card card-body">
            You access all the notes in our app: https://bit.ly/kgs-app
          </div>
        </div>
      </div>
      {/* eigth */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample8"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample8"
          >
            Classes will be live or recorded?
          </a>
        </p>
        <div className="collapse" id="collapseExample8">
          <div className="card card-body">
            Complete LIVE CLASSES of each subject (students can see the recorded
            version of the live class anytime if they miss the class).
          </div>
        </div>
      </div>
      {/* ninth */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample9"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample9"
          >
            How to download Lecture?
          </a>
        </p>
        <div className="collapse" id="collapseExample9">
          <div className="card card-body">
            You can download the lectures from "download" option in our
            application.
          </div>
        </div>
      </div>
      {/* tenth */}
      <div className="product p-3 mt-2">
        <p>
          <a
            className=""
            data-bs-toggle="collapse"
            href="#collapseExample10"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample10"
          >
            Are demo classes available?
          </a>
        </p>
        <div className="collapse" id="collapseExample10">
          <div className="card card-body">Yes</div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
