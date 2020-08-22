import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Card(props) {
    if (props.title === 'bigView') {
        return (
            <div className='card animate__animated animate__fadeIn' id='card'>
                <div className='card-body'>
                    <Link to='' className="backBtn" onClick={props.backClick}><i className='fas fa-chevron-left'></i></Link>

                    <h2 className='cardTitle' id={props.id + 'Title'}>{props.bigTitle}</h2>
    
                    <hr className='line'></hr>
    
                    {props.children}
                </div>
            </div>
        )
    }

    else if (props.title === 'My Portfolio') {
        return (
            <div className='card animate__animated animate__fadeIn' id={props.id}>
                <div className='card-body' id={props.bodyId ? props.bodyId : ''}>
                    <h2 className='cardTitle' id={props.id + 'Title'}>{props.title}</h2>
    
                    <hr className='line'></hr>
    
                    {props.children}
                </div>
            </div>
        )
    }
    
    else if (props.title !== 'messageSent') {
        return (
            <div className='card' id='card'>
                <div className='card-body' id={props.bodyId ? props.bodyId : ''}>
                    <h2 className='cardTitle' id={props.id + 'Title'}>{props.title}</h2>
    
                    <hr className='line'></hr>
    
                    {props.children}
                </div>
            </div>
        )
    } 
    
    else {
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
