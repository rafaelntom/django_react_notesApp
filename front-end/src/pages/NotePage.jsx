import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const NotePage = () => {
  const [note, setNote] = useState(null);

  let { id } = useParams();

  const getSingleNote = async () => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
      let noteData = await response.json();
      setNote(noteData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleNote(id);
  }, []);

  return (
    <div className="container dark">
      <div className="app">
        <div className="note">
          <h2 className="note-title">Note #{note?.id}</h2>
          <textarea defaultValue={note?.body}></textarea>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
