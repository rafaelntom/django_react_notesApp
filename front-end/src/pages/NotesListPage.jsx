import React, { useEffect, useState } from "react";
import "./notes.css";
import NoteCard from "../components/NoteCard";

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

  return (
    <div>
      <ul>
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </ul>
    </div>
  );
};

export default NotesListPage;
