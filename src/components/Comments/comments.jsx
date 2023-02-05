import React, {useState} from 'react';
import './comments.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Comments(){

    const history = useHistory();

    function handleClick() {
        history.push('/review');
    }

    const [addComments, setNewComments] = useState('');

    return (
        <Router>
            <div className='understandingFeeling'>
                <h2>Any comments you would like to leave?</h2>

                <p>Comments</p>

                    <input type='text'
                    comments='comments'
                    placeholder='Type Comment'
                    value={addComments}
                    onChange={event => setNewComments(event.target.value)}
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

export default Comments;