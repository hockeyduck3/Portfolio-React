import React from 'react';

import './style.css';

function Card(props) {
    return (
        <div className='card' id='card'>
            <div className='card-body'>
                <h2 className='cardTitle'>{props.title}</h2>

                <hr className='line'></hr>

                {props.children}
            </div>
        </div>
    )
}

export default Card;
