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
                        <p className='text utahPara'>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handlebars & ReactJS. </p>
                    </div>

                    <hr className='line' />


                    <div id='beau'>
                        <p className='text beauPara'>Took courses in Basic Web Design, Intro to Photoshop, Intro to Film, Digital Film Editing, and Intro to Game Development.</p>
                        <img src='../images/BEAU.jpg' alt='Logo of Broadview Entertainment Arts University' id='beauImg' />
                    </div>
                </Container>
            </Card>
        </Container>
    )
}

export default Education;
