import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

import Resume from '../../PDF/LJ-Spencer-Resume-2020.pdf';
import './style.css';

function Nav() {
    const body = document.body;
    const navbar = document.getElementsByClassName('collapsed');

    body.addEventListener('click', function () {
        if (navbar.length === 0) {
            document.querySelector('.navbar-toggler').click();
        }
    });

    function scrollTo(element) {
        document.querySelector('.navbar-toggler').click();

        setTimeout(() => {
            document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
        }, 300);
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
                <span id='navbar-toggler' style={{
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

                    {/* Resume Link */}
                    <li className='nav-item'>
                        <a href={Resume} className='nav-link active' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>

                    {/* Portfolio Link */}
                    <li className='nav-item'>
                        {/* Depending on if the user is viewing the website on mobile, or desktop. */}
                        {window.screen.width < 1024 ? (
                            <NavLink to='/#portfolio2' scroll={el => scrollTo(el.id)} className='nav-link active'>Portfolio</NavLink>
                        ) : (
                            <NavLink to='/#portfolio' scroll={el => scrollTo(el.id)} className='nav-link active'>Portfolio</NavLink>
                        )}
                    </li>

                    {/* Education Link */}
                    <li className='nav-item'>
                        <NavLink to='/#education' scroll={el => scrollTo(el.id)} className='nav-link active'>Education</NavLink>
                    </li>

                    {/* Contact Link */}
                    <li className='nav-item'>
                        <NavLink to='/#contact' scroll={el => scrollTo(el.id)} className='nav-link active'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
