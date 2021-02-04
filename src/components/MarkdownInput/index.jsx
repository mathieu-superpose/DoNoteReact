/*eslint-disable */
import React from 'react';
import './index.scss';

const MarkdownInput = ({ onDisplay }) => {
  const [title, setTitle] = React.useState('');
  const [note, setNote] = React.useState('');
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  React.useEffect(() => {
    onDisplay(title, note);
  }, [handleTitleChange, handleNoteChange]);

  return (
    <div className="markdown-input">
      <input
        type="text"
        className="markdown-input__title"
        maxLength="30"
        onChange={handleTitleChange}
        value={title}
      />
      <textarea
        id="story"
        name="story"
        rows="5"
        cols="33"
        className="markdown-input__text"
        onChange={handleNoteChange}
        value={note}
      />
    </div>
  );
};

export default MarkdownInput;
