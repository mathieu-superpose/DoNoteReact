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
    <div>
      <h2 className="title" dangerouslySetInnerHTML={createMarkup(dTitle)} />
      <p className="note" dangerouslySetInnerHTML={createMarkup(dNote)} />
      <MarkdownInput display={display} />
    </div>
  );
};

export default DisplayNote;
