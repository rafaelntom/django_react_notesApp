import React from "react";

const NoteCard = ({ note }) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <li key={note.id}>
      <span>
        <strong>Note id:</strong> {note.id}
      </span>
      <span>
        <strong>Description:</strong> {note.body}
      </span>
      <span>
        <strong>Created at:</strong> {formatDate(note.created)}
      </span>
      <span>
        <strong>Updated at:</strong> {formatDate(note.updated)}
      </span>
    </li>
  );
};

export default NoteCard;
