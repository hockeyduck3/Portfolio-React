import React from 'react';
import { Link } from 'react-router-dom';

import './portfolio-card.css';

function PortfolioCard(props) {
    return (
        <div className='col-lg-3 project' data-name={props.data} onClick={props.handleClick}>
            <Link to='' onClick={event => event.preventDefault()}>
                <img src={props.img} alt={`Screenshot of My ${props.alt}`}/>
                <p>{props.name}</p>
            </Link>
        </div>
    )
} 

export default PortfolioCard;