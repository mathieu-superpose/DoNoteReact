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

  // use effect local storage

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
