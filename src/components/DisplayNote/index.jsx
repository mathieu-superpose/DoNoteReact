import React from 'react';
import MarkdownInput from '../MarkdownInput';
import './index.scss';

const DisplayNote = () => {
  const [userWord, setUserWord] = React.useState(null);

  const handleChange = (value) => {
    setUserWord(value);
  };

  return (
    <div>
      <textarea id="story" name="story" rows="5" value={userWord} cols="33" />
      <MarkdownInput onInputValueChanged={handleChange} />
    </div>
  );
};

export default DisplayNote;
