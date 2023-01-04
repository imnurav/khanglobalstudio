import React from "react";

const LearnSection = () => {
  return (
    <div className="grid grid-three-column mt-5 mb-3 learnSection">
      <div className="d-flex justify-content-center">
        <div className="m-2">
          <i class="fa-solid fa-people-group fa-3x " />
        </div>
        <div>
          <h4>Learn From the Experts</h4>
          <p>Get extra-ordinary outcome in a career</p>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-center">
          <div className="m-2">
            <i class="fa-solid fa-tv fa-3x" />
          </div>
          <div>
            <h4>Learn on Your Own Pace</h4>
            <p>Enjoy learning at your own pace.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-center">
          <div className="m-2">
            <i class="fa-solid fa-brain fa-3x" />
          </div>
          <div>
            <h4>Sective Study Materials</h4>
            <p>All materials by our experts faculaties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
