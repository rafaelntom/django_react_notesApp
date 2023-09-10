import React from "react";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
  }

  const getTitle = (note) => {
    let title = note.body.split("\n")[0];

    if (title.length >= 45) {
      return title.slice(0, 45) + "...";
    }

    return title;
  };

  const getContent = (note) => {
    let title = getTitle(note);
    let content = note.body.replaceAll("\n", " ");
    content = content.replaceAll(title, "");

    if (content.length > 45) {
      return content.slice(0, 45) + "...";
    } else {
      return content;
    }
  };

  return (
    <Link to={`note/${note.id}/`} key={note.id}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>{getContent(note)}</p>
        <p className="note-info">
          <span>Created at: {formatDate(note.created)}</span>
          <span>Updated at: {formatDate(note.updated)}</span>
        </p>
      </div>
    </Link>
  );
};

export default NoteCard;
