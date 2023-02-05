import React from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//components
import TodayFeels from '../TodayFeels/todayFeels';
import UnderstandingFeels from '../Understanding/understanding';
import Support from '../Support/support';
import Comments from '../Comments/comments';
import Review from '../Review/review';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

    
      <Route exact path='/' component={TodayFeels} />
      <Route path='/understanding' component={UnderstandingFeels} /> 
      <Route path='/support' component={Support} />
      <Route path='/comments' component={Comments} />
      <Route path='/review' component={Review} />
      <br />
      
    </Router>
  );
}

export default App;
