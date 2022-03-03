import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <FontAwesomeIcon icon={faMoon} />
          <span> Abelaxo crack</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <FontAwesomeIcon icon={faCalendarPlus} size="5x" />
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
