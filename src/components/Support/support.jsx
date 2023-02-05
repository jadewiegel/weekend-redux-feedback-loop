import React, {useState} from 'react';
import './support.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Support(){


    const [addSupport, setNewSupport] = useState(0);

    const history = useHistory();

    function handleClick() {
        history.push('/comments');
    }
    const supportSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Router>
            <div className='supportCSS'>
            <h2>How well are you being supported?</h2>
            <h3>Enter a 1 through 5. 1 means not so hot. 5 means amazing!</h3>

            <p>Supported?</p>

                <input type='text'
                supported='supported'
                placeholder='Enter a number 1-5'
                value={addSupport}
                onChange={event => setNewSupport(event.target.value)}
                />
            
            <br />
            <br />
            
            </div>

            <div className='nextButton'>
                <button onClick={handleClick}>Next</button>
            </div>

        </Router>
    );
}

export default Support;