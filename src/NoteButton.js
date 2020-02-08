import React from "react";
import "./App.scss";

const NoteButton = props => {
  const clickHandler = () => {
    props.addPlayedNote(props.note);
    new Audio(props.note.file).play();
  };
  return (
    <button
      style={props.style}
      className={`note-button ${props.note.name}`}
      onClick={() => clickHandler()}
    >
      {props.note.name}
    </button>
  );
};

export default NoteButton;
