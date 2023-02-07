import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './todayFeels.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function TodayFeels(){

    const feelingNum = useSelector(store => store.feelingNum)
    const dispatch = useDispatch();
    const [addFeeling, setNewFeeling] = useState('');

    let history = useHistory();

    const handleClick = () => {
        //dispatch to the reducer here
        dispatch({
            type: 'FEELING_NUM',
            payload: addFeeling,
        })
        history.push('/understanding')
    }

    return (
        <>
            <div className='feelingToday'>
                <h2>How are you feeling today?</h2>
                <h3>Enter a 1 through 5. 1 means not so hot. 5 means amazing!</h3>

                <p>Feeling?</p>

                <input type='text'
                    todayFeels='todayFeels'
                    placeholder='Enter a number 1-5'
                    value={addFeeling}
                    onChange={event => setNewFeeling(event.target.value)}
                />
                
                <br />
                <br />
            </div>

            <div className='nextButton'>
                <button onClick={handleClick}>Next</button>
            </div>
        </>
    );
}

export default TodayFeels;