import React from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

import './education.css';

function Education() {
    return (
        <Container fluid='-fluid'>
            <Card title='Education' id='education'>
                <Container fluid='-fluid'>

                    <div id='utah'>
                        <img src='../images/badge.png' alt='Certificate Badge from University of Utah' id='utahImg' />
                        <div className='text utahPara'>
                            <p id='utahTitle'>
                                University of Utah, Web Development Bootcamp.
                                <span id='utahDate'>Aug, 2020</span>
                            </p>
                            A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handlebars & ReactJS.
                        </div>
                    </div>

                    <hr className='line' />


                    <div id='beau'>
                        <div className='text beauPara'>
                            <p id='beauTitle'>
                                Broadview Entertainment Arts University, Digital Film.
                                <span id='beauDate'> Jan 2016 - Mar 2017</span>
                            </p>
                            I took courses in Basic Web Design, Intro to Photoshop, Intro to Film, Digital Film Editing, and Intro to Game Development. Sadly the school shut down before I was able to finish getting my Degree.
                        </div>
                        <img src='../images/BEAU.jpg' alt='Logo of Broadview Entertainment Arts University' id='beauImg' />
                    </div>
                </Container>
            </Card>
        </Container>
    )
}

export default Education;
