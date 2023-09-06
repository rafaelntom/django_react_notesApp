import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <NotesListPage />
    </>
  );
}

export default App;
