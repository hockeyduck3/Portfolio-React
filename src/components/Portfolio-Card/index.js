import React from 'react';

import './portfolio-card.css';

function PortfolioCard(props) {
    return (
        <div className='col-lg-3 project' data-name={props.data} onClick={props.handleClick}>
            <button style={{cursor:'pointer'}}>
                <img src={props.img} alt={`Screenshot of My ${props.alt}`}/>
                <p>{props.name}</p>
            </button>
        </div>
    )
} 

export default PortfolioCard;