/*eslint-disable */
import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
const MarkdownInput = ({ display }) => {
  const [title, setTitle] = React.useState('');
  const [note, setNote] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    display(title, note);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    display(title, note);
  };

  return (
    <form className="markdown-input">
      <input
        type="text"
        className="title"
        maxLength="30"
        onChange={handleTitleChange}
      />
      <textarea
        id="story"
        name="story"
        rows="5"
        cols="33"
        onChange={handleNoteChange}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default MarkdownInput;
