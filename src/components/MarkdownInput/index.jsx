import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
const MarkdownInput = ({ onInputValueChanged }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onInputValueChanged(value);
  };

  return (
    <form className="markdown-input">
      <input type="text" className="title" maxLength="30" />
      <textarea
        id="story"
        name="story"
        rows="5"
        cols="33"
        onChange={handleChange}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default MarkdownInput;
