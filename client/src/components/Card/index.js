import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Card(props) {
    const {title, id, bigTitle, func, bodyId, children} = props;

    if (title === 'bigView') {
        return (
            <div className='card animate__animated animate__fadeIn' id='card'>
                <div className='card-body'>
                    <Link to='' className="backBtn" onClick={func}><i className='fas fa-chevron-left'></i></Link>

                    <h2 className='cardTitle' id={id + 'Title'}>{bigTitle}</h2>
    
                    <hr className='line'></hr>
    
                    {children}
                </div>
            </div>
        )
    }

    else if (title === 'Hello there! I\'m LJ.') {
        return (
            <div className='card' id={id ? id : 'card'}>
                <div className='card-body' id={bodyId ? bodyId : ''}>
                    <h2 className='cardTitle animate__animated animate__fadeIn animate__slow' id={id + 'Title'}><a id='helloThereBtn' onClick={func}>Hello there!</a> I'm LJ.</h2>
    
                    <hr className='line animate__animated animate__fadeIn animate__delay-1s animate__slow'></hr>
    
                    {children}
                </div>
            </div>
        )
    }
    
    else if (title !== 'messageSent' && title !== '404') {
        return (
            <div className='card' id={id ? id : 'card'}>
                <div className='card-body' id={bodyId ? bodyId : ''}>
                    <h2 className='cardTitle' id={id + 'Title'}>{title}</h2>
    
                    <hr className='line'></hr>
    
                    {children}
                </div>
            </div>
        )
    }
    
    else {
        return (
            <div className='card' id={id ? id : 'card'}>
                <div className='card-body'>    
                    {children}
                </div>
            </div>
        )
    }

}

export default Card;
