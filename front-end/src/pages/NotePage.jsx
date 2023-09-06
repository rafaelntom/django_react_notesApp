import React from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let { id } = useParams();

  return <div>You are in the note number: {id}</div>;
};

export default NotePage;
