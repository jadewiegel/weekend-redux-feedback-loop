import React, {useState} from 'react';
import './todayFeels.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


import UnderstandingFeels from '../Understanding/understanding';

function TodayFeels(){

    const [addFeeling, setNewFeeling] = useState(0);

    const feelingSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Router>
            <div className='feelingToday'>
            <h2>How are you feeling today?</h2>
            <h3>Enter a 1 through 5. 1 means not so hot. 5 means amazing!</h3>

            <p>Feeling?</p>

            <form onSubmit={feelingSubmit}>
                <input type='text'
                todayFeels='todayFeels'
                placeholder='Enter a number 1-5'
                value={addFeeling}
                onChange={event => setNewFeeling(event.target.value)}
                />
            </form>
            
            </div>

            <div>
                <Route path='/understanding' component={UnderstandingFeels} />

            </div>
        </Router>
    );
}

export default TodayFeels;