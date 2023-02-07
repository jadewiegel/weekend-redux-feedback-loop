import React, {useState} from 'react';
import './review.css';
import { useSelector } from 'react-redux';

function Review(){

    const feelingNum = useSelector(store => store.feelingNum);
    const understandingNum = useSelector(store => store.understandingNum);
    const supportNum = useSelector(store => store.supportNum);
    const comments = useSelector(store => store.comments);
    
    // neccessary if using submit button
    const feedbackSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className='review'>
                <h2>Review Your Feedback</h2>

                <p>Feelings: {feelingNum}</p>
                <p>Understanding: {understandingNum}</p>
                <p>Support: {supportNum}</p>
                <p>Comments: {comments}</p>
                </div>

            <div className='nextButton'>
                <button onClick={feedbackSubmit}>Submit</button>
            </div>
        </> 
    );
}

export default Review;