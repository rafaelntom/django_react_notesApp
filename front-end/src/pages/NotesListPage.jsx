import React, { useEffect, useState } from "react";
import "./notes.css";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getApiNotes();
  }, []);

  const getApiNotes = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/");
      const notesData = await response.json();
      setNotes(notesData);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <ul>
        {notes.map((note) => {
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
        })}
      </ul>
    </div>
  );
};

export default NotesListPage;
