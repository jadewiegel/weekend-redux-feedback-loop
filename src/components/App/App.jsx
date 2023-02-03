import React from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//components
import TodayFeels from '../TodayFeels/todayFeels';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route path='/' component={TodayFeels} />
      {/* <TodayFeels /> */}

        {/* <UnderstandingFeels /> */}

      <br />
      <div className='nextButton'>
        <button><Link to='/understanding'>Next</Link></button>
      </div>
    </Router>
  );
}

export default App;
