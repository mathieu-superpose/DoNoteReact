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
    <ul className='side-bar__side-notes'>
      {notes.map((note) => (
        <li className='side-bar__side-notes__side-note'>
          <div>{note.title}</div>
          <p className="side-bar__side-notes__side-note__note">{note.note.match(/\w+/g).join(' ').substring(0, 100)}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
