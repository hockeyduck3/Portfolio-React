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
                        <img src='../images/badge.png' alt='Certificate Badge from University of Utah' />
                    </div>

                    <hr className='line' />

                    <div id='beau'>
                        <img src='../images/BEAU.jpg' alt='Logo of Broadview Entertainment Arts University' style={{ float: 'right' }} />
                    </div>
                </Container>
            </Card>
        </Container>
    )
}

export default Education;
