/* eslint-disable */
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayNote from './components/DisplayNote';
import Sidebar from './components/Sidebar';

const App = () => {
  const [notes, setNotes] = React.useState([]);

  const handleSavedNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const initializeNotes = () => {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    console.log(values);
    setNotes([...values]);
  };

  React.useEffect(() => {
    initializeNotes();
  }, []);

  return (
    <div className="index">
      <div className="sidebar">
        <Sidebar notes={notes} />
      </div>
      <div className="display-note">
        <DisplayNote onSavedNote={handleSavedNote} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
