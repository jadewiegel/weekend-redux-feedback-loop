import React from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//components
import TodayFeels from '../TodayFeels/todayFeels';
import UnderstandingFeels from '../Understanding/understanding';
import Support from '../Support/support';

function App() {

  // let history = useHistory();
  // function handleClick (){
  //   history.push('/understanding')
  // }

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
     

      <br />
      <div className='nextButton'>
      <button ><Link to='/understanding'>Next</Link></button>
      {/* <button onClick={handleClick}>Next</button> */}
      </div>
    </Router>
  );
}

export default App;
