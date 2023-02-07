import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import './thanks.css';



function Thanks(){
    
    const history = useHistory();

    function handleClick() {
    
            history.push('/');
        }
    
    
    return(
        <>
        <div className='thanksCSS'>
            <h2>Thank you for your feedback!!</h2>
        </div>

        <div className='nextButton'>
            <button onClick={handleClick}>Add Another Feedback</button>
        </div>
        </>
    )
}


export default Thanks;