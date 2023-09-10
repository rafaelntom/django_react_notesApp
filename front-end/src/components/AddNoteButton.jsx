import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNoteButton = () => {
  return (
    <Link to="note/new">
      <FontAwesomeIcon icon={faPlus} className="floating-button" />
    </Link>
  );
};

export default AddNoteButton;
