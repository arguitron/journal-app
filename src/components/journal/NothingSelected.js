import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const NothingSelected = () => {
  return (
    <div className="nothing__main-content">
      <p>
        Select something
        <br />
        or create an entry!
      </p>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};
