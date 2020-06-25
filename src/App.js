import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Chat from '../src/components/Chat/Chat.js'
import Join from './components/Join/Join'
function App() {
  return (
    <Router>
    <Route exact path="/" component={Join}/>
    <Route exact path="/chat" component={Chat}/>
    </Router>
  );
}

export default App;
