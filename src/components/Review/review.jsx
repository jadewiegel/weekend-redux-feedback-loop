import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './review.css';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Review(){

    const feelingNum = useSelector(store => store.feelingNum);
    const understandingNum = useSelector(store => store.understandingNum);
    const supportNum = useSelector(store => store.supportNum);
    const comments = useSelector(store => store.comments);
    const history = useHistory();

    // neccessary if using submit button
    const feedbackSubmit = (event) => {
        event.preventDefault();
        
        //axios post request
        axios.post('/feedback', {
            feeling: feelingNum, 
            understanding: understandingNum, 
            support:supportNum, 
            comments: comments
        }).then(response => {
            console.log('post request success: ,', response)  
            history.push('/thanks');
         
        }).catch(err => {
            console.log('error in post request: ', err)
        });
    }

    return (
        <Router>
            <div className='review'>
                <h2>Review Your Feedback</h2>

                <p>Feelings: {feelingNum}</p>
                <p>Understanding: {understandingNum}</p>
                <p>Support: {supportNum}</p>
                <p>Comments: {comments}</p>
                </div>

            <div className='nextButton'>
                <button onClick={feedbackSubmit} >Submit</button>
            </div>
        </Router> 
    );
}

export default Review;