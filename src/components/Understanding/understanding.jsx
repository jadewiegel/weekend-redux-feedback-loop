import React, {useState} from 'react';
import './understanding.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

import Support from '../Support/support';

function UnderstandingFeels(){

    // const history = useHistory();

    // function handleClick() {
    //     history.push('/support');
    // }

    const [addUnderstanding, setUnderstandingFeeling] = useState(0);

    const understandingSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Router>
            <div className='understandingFeeling'>
                <h2>How well are you understanding the content?</h2>
                <h3>Enter a 1 through 5. 1 means not so hot. 5 means amazing!</h3>

                <p>Understanding?</p>

                <form onSubmit={understandingSubmit}>
                    <input type='text'
                    understandingFeels='understandingFeels'
                    placeholder='Enter a number 1-5'
                    value={addUnderstanding}
                    onChange={event => setUnderstandingFeeling(event.target.value)}
                    />
                </form>
            
            </div>
            
            <div>
                <Route path='/support' component={Support} />

            </div>
    </Router>
    );
}

export default UnderstandingFeels;