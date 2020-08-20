import React, { Component } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import grabProject from './grabProject';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';
import PortfolioCard from '../../components/Portfolio-Card/index';

import './portfolio.css';

class Portfolio extends Component {
    state = {
        title: 'My Portfolio',
        loaded: false,
        bigView: false,
        bigViewTitle: '',
        bigImg: '',
        bigAlt: '',
        description: '',
        liveLink: '',
        repoLink: '',
        marginTop: ''
    }

    componentDidMount() {
        document.title = 'LJ\'s | Portfolio';
    }

    handleClick = event => {
        const dataName = event.currentTarget.getAttribute('data-name');

        const { bigViewTitle, bigImg, bigAlt, liveLink, repoLink, marginTop, description } = grabProject(dataName);

        this.setState({
            bigViewTitle: bigViewTitle,
            bigImg: bigImg,
            bigAlt: bigAlt,
            liveLink: liveLink,
            repoLink: repoLink,
            marginTop: marginTop,
            description: description
        });

        this.displayBigView();
    }

    displayBigView = () => {
        const card = document.getElementById('card').classList;

        card.add('animate__animated', 'animate__rubberBand');

        setTimeout(() => {
            this.setState({
                bigView: true
            });

            document.querySelector('body').scrollTo(0,0);

            setTimeout(() => {
                card.remove('animate__animated', 'animate__rubberBand');
            }, 300);
        }, 300);
    }

    displayPreview = event => {
        event.preventDefault();

        const card = document.getElementById('card').classList;

        card.add('animate__animated', 'animate__fadeOut');

        setTimeout(() => {
            this.setState({
                bigView: false
            });

            card.replace('animate__fadeOut', 'animate__fadeIn');

            setTimeout(() => {
                card.remove('animate__animated', 'animate__fadeIn');
            }, 300);
        }, 600);
    }

    onLoadFunc = (id1, id2, animation, duration) => {
        document.getElementById(id1).style.visibility = 'visible';
        document.getElementById(id2).classList.add('animate__animated', `animate__${animation}`, `animate__delay-${duration}`);
    }

    render() {
        const bigView = this.state.bigView;
        return (
            <Container fluid='-fluid'>
                {!bigView ? (
                    <Card title={this.state.title} id='portfolio'>
                        <Container>
                                <OnImagesLoaded
                                    onLoaded={() => this.onLoadFunc('mainSection', 'mainSection', 'fadeIn', '0.9s')}
                                    onTimeout={() => this.onLoadFunc('mainSection', 'mainSection', 'fadeIn', '0.9s')}
                                    timeout={5000}
                                >
                                    <div className='row mainSection' id='mainSection' style={{visibility: 'hidden'}}>
                                        {/* Quiz Game */}
                                        <PortfolioCard 
                                            data='quiz'
                                            img='./images/Quiz.jpg'
                                            alt='Quiz Game'
                                            name='Quiz Game!'
                                            handleClick={this.handleClick}
                                        />

                                        {/* Password Maker */}
                                        <PortfolioCard 
                                            data='password'
                                            img='./images/Password.jpg'
                                            alt='Password Maker'
                                            name='Password Maker'
                                            handleClick={this.handleClick}
                                        />

                                        {/* Weather App */}
                                        <PortfolioCard 
                                            data='weather'
                                            img='./images/Weather.jpg'
                                            alt='Weather App'
                                            name='Weather App'
                                            handleClick={this.handleClick}
                                        />

                                        {/* COVID-19 Info */}
                                        <PortfolioCard 
                                            data='covid'
                                            img='./images/Covid.jpg'
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
                                </OnImagesLoaded>
                        </Container>
                    </Card>
                ) : (
                    <Card title='bigView' id='portfolio' bigTitle={this.state.bigViewTitle} backClick={this.displayPreview}>
                        <Container>
                            <OnImagesLoaded
                                onLoaded={() => this.onLoadFunc('portfolioBigImg', 'bigPicture', 'flipInX', '0.9s')}
                                onTimeout={() => this.onLoadFunc('portfolioBigImg', 'bigPicture', 'flipInX', '0.9s')}
                                timeout={5000}
                            >
                                <div className='row'>
                                    {/* Image */}
                                        <div className='col-lg-4' id='bigPicture'>
                                            <img src={this.state.bigImg} alt={`Screenshot of ${this.state.bigAlt}`} className='portfolioBigImg' id='portfolioBigImg' style={{marginTop: this.state.marginTop, visibility: 'hidden'}} />
                                        </div>
                                    

                                    {/* Description and Links */}
                                    <div className='col-lg-7 description'>
                                        <h4 className='descriptionTitle'>Description</h4>

                                        <p className='descriptionText'>{this.state.description}</p>

                                        <h4 className='linksTitle'>Links</h4>

                                        <div className='links'>
                                            <div className='liveLinkDiv'>
                                                <a href={this.state.liveLink} className='liveLink' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas' /> <span className='liveLinkText'>{this.state.bigViewTitle !== 'Employee Management App' ? 'Live Site' : 'YouTube Video'}</span></a>
                                            </div>
                                            <div className='repoLinkDiv'>
                                                <a href={this.state.repoLink} className='repoLink' target='_blank' rel='noopener noreferrer'><i className='fab fa-github' /> Project Repo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OnImagesLoaded>
                        </Container>
                    </Card>
                )}
            </Container>
        )
    }
}

export default Portfolio;