import React, {useState} from 'react';
import './comments.css';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Comments(){

    const comments = useSelector(store => store.feelingNum)
    const dispatch = useDispatch();
    const [addComments, setNewComments] = useState('');


    const history = useHistory();

    function handleClick() {
        dispatch({
            type: 'COMMENTS',
            payload: addComments,
        })
        history.push('/review');
    }


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