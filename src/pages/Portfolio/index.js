import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';
import PortfolioCard from '../../components/Portfolio-Card/index';

import './portfolio.css';

class Portfolio extends Component {
    state = {
        title: 'My Portfolio',
        bigView: false,
        bigImg: '',
        bigAlt: '',
        description: '',
        marginTop: '',
        liveLink: '',
        repoLink: ''
    }

    componentDidMount() {
        document.title = 'LJ\'s | Portfolio';
    }

    handleClick = event => {
        const dataName = event.currentTarget.getAttribute('data-name');

        switch(dataName) {
            case 'quiz':
                this.setState({
                    bigImg: './images/Quiz-2.png',
                    bigAlt: 'My Quiz Game',
                    liveLink: 'https://hockeyduck3.github.io/Quiz-Game/',
                    repoLink: 'https://github.com/hockeyduck3/Quiz-Game',
                    marginTop: '10px',
                    description: 'This is a quick and simple quiz game that I made for Full Stack Web Course. Using just regular HTML, Bootstrap, and vanilla Javascript. The point of the game is simple, you have 60 seconds to answer all 10 questions! For every question you get right you\'ll recieve 5 points, but if you get a question wrong you\'ll love 5 seconds off the timer. Good luck and have fun!'
                });

                this.displayBigView();
                break;

            default:
                break;
        }
    }

    displayBigView = () => {
    }

    render() {
        const bigView = this.state.bigView;
        return (
            <Container fluid='-fluid'>
                {!bigView ? (
                    <Card title={this.state.title} id='portfolio'>
                        <Container>
                            <div className='row mainSection'>
                                {/* Quiz Game */}
                                <PortfolioCard 
                                    data='quiz'
                                    img='./images/Quiz.png'
                                    alt='Quiz Game'
                                    name='Quiz Game!'
                                    handleClick={this.handleClick}
                                />

                                {/* Password Maker */}
                                <PortfolioCard 
                                    data='password'
                                    img='./images/Password.png'
                                    alt='Password Maker'
                                    name='Password Maker'
                                    handleClick={this.handleClick}
                                />

                                {/* Weather App */}
                                <PortfolioCard 
                                    data='weather'
                                    img='./images/Weather.png'
                                    alt='Weather App'
                                    name='Weather App'
                                    handleClick={this.handleClick}
                                />

                                {/* COVID-19 Info */}
                                <PortfolioCard 
                                    data='covid'
                                    img='./images/Covid.png'
                                    alt='COVID-19 Info App'
                                    name='COVID-19 Into'
                                    handleClick={this.handleClick}
                                />

                                {/* Note Taker */}
                                <PortfolioCard 
                                    data='note'
                                    img='./images/Note-Taker.jpg'
                                    alt='Simple Note Taker App'
                                    name='Note Taker'
                                    handleClick={this.handleClick}
                                />

                                {/* Employee Management */}
                                <PortfolioCard 
                                    data='employeeManage'
                                    img='./images/Employee-Management.jpg'
                                    alt='Employee Management App'
                                    name='Employee Management'
                                    handleClick={this.handleClick}
                                />

                                {/* Eat-Dat-Burger */}
                                <PortfolioCard 
                                    data='burger'
                                    img='./images/Eat-Dat-Burger.jpg'
                                    alt='Eat-Dat-Burger App'
                                    name='Eat-Dat-Burger!'
                                    handleClick={this.handleClick}
                                />

                                {/* Poke-Build */}
                                <PortfolioCard 
                                    data='poke'
                                    img='./images/Poke-Build.jpg'
                                    alt='Poke-Build App'
                                    name='Poke-Build'
                                    handleClick={this.handleClick}
                                />


                            </div>
                        </Container>
                    </Card>
                ) : (
                    <Card title={this.state.title} id='portfolio'>
                        <div className='row'>
                            {/* Image */}
                            <div className='col-lg-4'>
                                <img src={this.state.bigImg} alt={`Screenshot of ${this.state.bigAlt}`} className='portfolioBigImg' style={{marginTop: this.state.marginTop}}/>
                            </div>

                            {/* Description and Links */}
                            <div className='col-lg-7 description'>
                                <h4 className='descriptionTitle'>Description</h4>

                                <p className='descriptionText'>{this.state.description}</p>

                                <h4 className='linksTitle'>Links</h4>

                                <div className='links'>
                                    <div className='liveLinkDiv'>
                                        <a href={this.state.liveLink} class='liveLink' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas' /> <span class='liveLinkText'>Live Site</span></a>
                                    </div>
                                    <div className='repoLinkDiv'>
                                        <a href={this.state.repoLink} class='repoLink' target='_blank' rel='noopener noreferrer'><i className='fab fa-github' /> Project Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                )}
            </Container>
        )
    }
}

export default Portfolio;