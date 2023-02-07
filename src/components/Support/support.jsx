import React, {useState} from 'react';
import './support.css';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function Support(){

    const supportNum = useSelector(store => store.feelingNum)
    const dispatch = useDispatch();
    const [addSupport, setNewSupport] = useState('');

    const history = useHistory();

    function handleClick() {
        //conditional if input entered is within valid parameters
        if(addSupport > 5 || addSupport < 1){
            alert('Enter a number 1-5')
        } else {
               //dispatch to the reducer here
               dispatch({
                type: 'SUPPORT_NUM',
                payload: addSupport,
            })
        history.push('/comments');
        }
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