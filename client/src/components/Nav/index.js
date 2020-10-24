import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Resume from '../../PDF/LJ-Spencer-Resume-2020.pdf';
import './style.css';

function Nav() {
    const [navbarToggleBtn, setNavbarToggleBtn] = useState(false);

    const body = document.body;
    const navbar = document.getElementsByClassName('collapsed');

    body.addEventListener('click', function() {
        if (navbar.length === 0) {
            document.querySelector('.navbar-toggler').click();

            if (navbarToggleBtn) {
                changeFunc();
            }
        }
    });

    function changeFunc() {
        if (!navbarToggleBtn) {
            setNavbarToggleBtn(true);
        } else {
            setNavbarToggleBtn(false);
        }
    }

    return (
        <nav className='navbar navbar-dark bg-dark'>
            
            {/* Logo / Homepage Link */}
            <Link className='navbar-brand' to='/'>
                LJ Spencer
            </Link>

            <button 
                id='navbarBtn' 
                className='navbar-toggler collapsed' 
                type='button' data-toggle='collapse' 
                data-target='#navbarNav' aria-controls='navbarNav' 
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span id='navbar-toggler' onClick={changeFunc} style={{
                    display: 'inline-block',
                    width: '1.5em',
                    height: '1.5em',
                    verticalAlign: 'middle',
                }}>
                    <i className='fas fa-bars fa-lg' />
                </span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>

                    {/* About */}
                    <li className='nav-item'>
                        <NavLink activeClassName='active' exact to='/' className='nav-link'>About</NavLink>
                    </li>

                    {/* Portfolio Link */}
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to='/Portfolio' className='nav-link'>Portfolio</NavLink>
                    </li>

                    {/* Resume Link */}
                    <li className='nav-item'>
                        <a href={Resume} className='nav-link' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>

                    {/* Contact Link */}
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to='/Contact' className='nav-link'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
