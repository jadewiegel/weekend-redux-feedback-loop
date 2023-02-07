import React, {useState} from 'react';
import './understanding.css';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function UnderstandingFeels(){

    const understandingNum = useSelector(store => store.feelingNum)
    const dispatch = useDispatch();
    const [addUnderstanding, setUnderstandingFeeling] = useState('');


    const history = useHistory();

    function handleClick() {
        //conditional if input entered is within valid parameters
        if(addUnderstanding > 5 || addUnderstanding < 1){
            alert('Enter a number 1-5')
        } else {
        //dispatch to the reducer here
        dispatch({
        type: 'UNDERSTANDING_NUM',
        payload: addUnderstanding,
    })
        history.push('/support');
        }
    }

    return (
        <Router>
            <div className='understandingFeeling'>
                <h2>How well are you understanding the content?</h2>
                <h3>Enter a 1 through 5. 1 means not so hot. 5 means amazing!</h3>

                <p>Understanding?</p>

                    <input type='text'
                    understandingFeels='understandingFeels'
                    placeholder='Enter a number 1-5'
                    value={addUnderstanding}
                    onChange={event => setUnderstandingFeeling(event.target.value)}
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

export default UnderstandingFeels;