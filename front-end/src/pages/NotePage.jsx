import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const NotePage = () => {
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
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

  const updateNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    updateNote();
    navigate("/");
  };

  useEffect(() => {
    getSingleNote(id);
  }, []);

  return (
    <div className="container dark">
      <div className="app">
        <div className="note">
          <header className="note-header">
            <h3>
              <FontAwesomeIcon onClick={handleSubmit} icon={faChevronLeft} />
            </h3>
          </header>
          <h2 className="note-title">Note #{note?.id}</h2>
          <textarea
            onChange={(event) => {
              setNote({ ...note, body: event.target.value });
            }}
            defaultValue={note?.body}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
