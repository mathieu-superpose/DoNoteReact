import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayNote from './components/DisplayNote';
import Sidebar from './components/Sidebar';

const App = () => (
  <div className="index">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="display-note">
      <DisplayNote />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
