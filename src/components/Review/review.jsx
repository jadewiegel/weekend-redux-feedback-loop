import React, {useState} from 'react';
import './review.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review(){

    const feelingNum = useSelector(store => store.feelingNum);
    
    
    // neccessary if using submit button
    const feedbackSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className='review'>
                <h2>Review Your Feedback</h2>

                <p>Feelings: {feelingNum}</p>

                </div>

            <div className='nextButton'>
                <button onClick={feedbackSubmit}>Submit</button>
            </div>
        </> 
    );
}

export default Review;