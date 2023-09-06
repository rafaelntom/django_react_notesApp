import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <Link to={`note/${note.id}/`} key={note.id}>
      <div className="notes-list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  );
};

export default NoteCard;
