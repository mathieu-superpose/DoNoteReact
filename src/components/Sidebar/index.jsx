/* eslint-disable */
import React from 'react';
import uuid from 'uuid';
import './index.scss';


const Sidebar = ({ notes }) => {

  console.log(notes);

  return (
  <div className="side-bar">
    <div className="side-bar__button">
      <button type="button">Ajouter une note</button>
    </div>
    <h2>Notes</h2>
    <ul>
      {notes.map((note) => (
        <li>{note.key}</li>
      ))}
    </ul>
  </div>
  );
}

export default Sidebar;
