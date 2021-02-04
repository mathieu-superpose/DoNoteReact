/*eslint-disable */
import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
const MarkdownInput = ({ onInputValueChanged }) => {
  const [title, setTitle] = React.useState('');
  const [note, setNote] = React.useState('');

  const handleOutputChange = () => {
    const { value } = note;
    console.log(note);
    onInputValueChanged(value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target);
    handleOutputChange();
  };

  const handleNoteChange = (event) => {
    setNote(event.target);
    console.log(note);
    handleOutputChange();
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
