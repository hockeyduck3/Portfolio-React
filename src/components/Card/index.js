import React from 'react';

import './style.css';

function Card(props) {
    if (props.title !== 'messageSent') {
        return (
            <div className='card' id='card'>
                <div className='card-body'>
                    <h2 className='cardTitle'>{props.title}</h2>
    
                    <hr className='line'></hr>
    
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='card' id='card'>
                <div className='card-body'>    
                    {props.children}
                </div>
            </div>
        )
    }

}

export default Card;
