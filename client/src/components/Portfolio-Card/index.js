import React from 'react';
import { Link } from 'react-router-dom';

import './portfolio-card.css';

function PortfolioCard(props) {
    const { data, handleClick, img, alt, name } = props;

    if (window.screen.width <= 1150) {
        return (
            <div className='col-md-4 project' data-name={data} onClick={handleClick}>
                <Link to='' onClick={event => event.preventDefault()}>
                    <img src={img} alt={`Screenshot of My ${alt}`} />
                    <p>{name}</p>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='col-lg-3 project' data-name={data} onClick={handleClick}>
                <Link to='' onClick={event => event.preventDefault()}>
                    <img src={img} alt={`Screenshot of My ${alt}`} />
                    <p>{name}</p>
                </Link>
            </div>
        )
    }

}

export default PortfolioCard;