import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">Hello</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">Configure other identity providers</h6>
        <p>dd</p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">Enable Multi-Factor Authentication</h6>
        <p>d</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">ff</h6>
        gg
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <FontAwesomeIcon icon={faLink} className="mr-2" />
          Learn About Rules
        </h6>
        <p>j</p>
      </div>
    </div>
  </div>
);

export default HomeContent;
