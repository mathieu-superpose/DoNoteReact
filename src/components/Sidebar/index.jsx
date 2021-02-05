/* eslint-disable react/prop-types */
import React from 'react';
import './index.scss';

const Sidebar = ({ notes }) => (
  <div className="side-bar">
    <div className="side-bar__button">
      <button type="button">Ajouter une note</button>
    </div>
    <h2>Title note</h2>
    <ul>
      {notes.map((note) => (
        <li>{note.title}</li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
