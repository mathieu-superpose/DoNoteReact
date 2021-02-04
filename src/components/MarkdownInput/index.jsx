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

  const saveNote = () => {
    localStorage.setItem(title, note);

    const localStore = localStorage.getItem(title);
    console.log(localStore);
  };

  return (
    <div className="markdown-input">
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
      <button onClick={saveNote}>Sauvegarder</button>
    </div>
  );
};

export default MarkdownInput;
