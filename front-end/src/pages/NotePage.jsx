import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import AddNoteButton from "../components/AddNoteButton";

const NotePage = () => {
  const [note, setNote] = useState(null);
  const navigate = useNavigate();
  let { id } = useParams();

  const getSingleNote = async () => {
    if (id === "new") return;

    try {
      let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
      let noteData = await response.json();
      setNote(noteData);
    } catch (error) {
      console.error(error);
    }
  };

  const createNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    if (id === "new") return;

    fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (note.body === "" && id !== "new") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
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
              {id !== "new" ? (
                <FontAwesomeIcon
                  onClick={deleteNote}
                  icon={faTrashCanArrowUp}
                  className="trash"
                />
              ) : (
                <span className="create-note" onClick={handleSubmit}>
                  Create Note
                </span>
              )}
            </h3>
          </header>
          {id === "new" ? (
            <h2 className="note-title">New Note</h2>
          ) : (
            <h2 className="note-title">Note #{note?.id}</h2>
          )}
          <textarea
            onChange={(event) => {
              setNote({ ...note, body: event.target.value });
            }}
            value={note?.body}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
