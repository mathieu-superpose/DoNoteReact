/* eslint-disable */
import React from 'react';
import showdown from 'showdown';
import { v4 as uuidv4 } from 'uuid';
import MarkdownInput from '../MarkdownInput';
import './index.scss';

const converter = new showdown.Converter();

const DisplayNote = ({ onSavedNote }) => {
  const [dTitle, setDTitle] = React.useState('');
  const [dNote, setDNote] = React.useState('');

  const display = (title, note) => {
    setDNote(note);
    setDTitle(title);
  };

  const createMarkup = (html) => ({ __html: html });

  const handleSave = () => {
    const newNote = { title: dTitle, note: dNote };
    localStorage.setItem(uuidv4(), newNote);
    onSavedNote(newNote);
  };

  return (
    <div className="display-note">
      <div className="display">
        <h2 className="title">{dTitle}</h2>
        <div className="note" dangerouslySetInnerHTML={createMarkup(converter.makeHtml(dNote))} />
      </div>
      <div className="input">
        <MarkdownInput onDisplay={display} />
        <button type="button" onClick={handleSave}>Sauvegarder</button>
      </div>
    </div>
  );
};

export default DisplayNote;
