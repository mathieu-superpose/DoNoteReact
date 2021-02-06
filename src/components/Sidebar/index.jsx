/* eslint-disable */
import React from 'react';
import showdown from 'showdown';
import './index.scss';

const converter = new showdown.Converter();

const createMarkup = (html) => ({ __html: html });

const Sidebar = ({ notes }) => (

  <div className="side-bar">
    <div className="side-bar__button">
      <button type="button">Ajouter une note</button>
    </div>
    <h2>Notes</h2>
    <ul>
      {notes.map((note) => (
        <li>
          <div>{note.title}</div>
          <p className="note">{note.note.match(/\w+/g).join(' ').substring(0, 100)}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
