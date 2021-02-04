import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayNote from './components/DisplayNote';

const App = () => (
  <div>
    <h1>D o N o t e R e a c t</h1>
    <DisplayNote />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
