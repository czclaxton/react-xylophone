import React, { useState } from "react";
import notes from "./assets/notes.js";
import "./App.scss";
import NoteButton from "./NoteButton";

function App() {
  const [playedNotes, setPlayedNotes] = useState([]);

  const replayNotes = () => {
    playedNotes.map((note, i) => {
      window.setTimeout(() => new Audio(note.file).play(), 500 * i);
    });
  };

  const addPlayedNote = note => {
    setPlayedNotes([...playedNotes, note]);
  };

  return (
    <div className="page">
      <h1>Xylophone made in React!</h1>
      <div className="xylophone">
        {notes.map((note, i) => {
          return (
            <NoteButton
              i={i}
              key={note.name}
              note={note}
              addPlayedNote={addPlayedNote}
              style={{ height: 200 - 15 * i + "px" }}
            />
          );
        })}
      </div>
      <div className="played-notes">
        {playedNotes.map((note, i) => {
          return (
            <span key={note.name + i} className={note.name}>
              {note.name}
            </span>
          );
        })}
      </div>
      <div className="controls">
        <button className="play" onClick={() => replayNotes()}>
          Replay
        </button>
        <button className="reset" onClick={() => setPlayedNotes([])}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
