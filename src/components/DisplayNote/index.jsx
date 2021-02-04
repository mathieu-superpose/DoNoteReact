import React from 'react';
import MarkdownInput from '../MarkdownInput';
import './index.scss';

const DisplayNote = () => {
  const [dTitle, setDTitle] = React.useState('');
  const [dNote, setDNote] = React.useState('');

  const display = (title, note) => {
    setDNote(note);
    setDTitle(title);
  };

  const createMarkup = (html) => ({ __html: html });

  return (
    <div className="display-note">
      <div className="display">
        <h2 className="title" dangerouslySetInnerHTML={createMarkup(dTitle)} />
        <p className="note" dangerouslySetInnerHTML={createMarkup(dNote)} />
      </div>
      <div className="input">
        <MarkdownInput onDisplay={display} />
      </div>
    </div>
  );
};

export default DisplayNote;
