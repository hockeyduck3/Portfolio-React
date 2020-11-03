import React from 'react';

import AboutMe from '../AboutMe/index';
import Portfolio from '../Portfolio/index';
import Education from '../Education/index';
import Contact from '../Contact/index';

function Homepage() {
    return (
        <div>
            <AboutMe />
            <Portfolio />
            <Education />
            <Contact />
            <div id='githubLink'>
                <a href='https://github.com/hockeyduck3/Portfolio-React' target='_blank' rel='noopener noreferrer'>Click here for my website's Repo <i className='fab fa-github' /></a>
                <p id='homepageReactLink'>My portfolio was built using <a id='reactLink' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React <i className='fab fa-react' id='reactLinkLogo' /></a></p>
            </div>
        </div>
    )
}

export default Homepage