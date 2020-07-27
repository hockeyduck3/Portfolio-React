import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';
import PortfolioCard from '../../components/Portfolio-Card/index';

import './portfolio.css';

class Portfolio extends Component {
    state = {
        title: 'My Portfolio',
        bigView: false,
        bigViewTitle: '',
        bigImg: '',
        bigAlt: '',
        description: '',
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
                    bigViewTitle: 'My Quiz Game',
                    bigImg: './images/Quiz-2.png',
                    bigAlt: 'My Quiz Game',
                    liveLink: 'https://hockeyduck3.github.io/Quiz-Game/',
                    repoLink: 'https://github.com/hockeyduck3/Quiz-Game',
                    description: 'This is a quick and simple quiz game that I made for Full Stack Web Course. Using just regular HTML, Bootstrap, and vanilla Javascript. The point of the game is simple, you have 60 seconds to answer all 10 questions! For every question you get right you\'ll recieve 5 points, but if you get a question wrong you\'ll love 5 seconds off the timer. Good luck and have fun!'
                });

                this.displayBigView();
                break;

            case 'password':
                this.setState({
                    bigViewTitle: 'My Password Generator',
                    bigImg: './images/Password-2.png',
                    bigAlt: 'My Password Generator',
                    liveLink: 'https://hockeyduck3.github.io/Password-Generator/',
                    repoLink: 'https://github.com/hockeyduck3/Password-Generator',
                    description: 'This was a quick little project I made based off of the password generator assignment I had for my Full Stack Web Course. A lot of the code I made for that assignment I moved over to this site with some slight changes. The main thing that\'s different between the two is that for my assignment I had to use alerts for user input, this project doesn\'t, and the UI is my design instead of the design that was given to me.'
                });

                this.displayBigView();
                break;

            case 'weather':
                this.setState({
                    bigViewTitle: 'My Weather App',
                    bigImg: './images/Weather-2.png',
                    bigAlt: 'My Weather App',
                    liveLink: 'https://hockeyduck3.github.io/Weather-Site/',
                    repoLink: 'https://github.com/hockeyduck3/Weather-Site',
                    description: 'This project was an api assignment for my Full Stack Web Course. I used the Open Weather api for grabbing all of the weather data. The rest of the site was built with HTML, Bootstrap, and jQuery. This assignment took me around 2 weeks to get the website where I wanted it to be, and I\'m really happy with how it turned out!'
                });

                this.displayBigView();
                break;

            case 'covid':
                this.setState({
                    bigViewTitle: 'COVID-19 Website',
                    bigImg: './images/Covid-2.png',
                    bigAlt: 'COVID-19 Website',
                    liveLink: 'https://hockeyduck3.github.io/COVID-Website/',
                    repoLink: 'https://github.com/hockeyduck3/COVID-Website',
                    description: 'This project was my first group project in my Full Stack Web Course. We made this website to help keep others informed about what was going on with a specific country and their COVID-19 cases. When you select a country or search for one, you\'ll see COVID-19 for that country as well as NY Times articles with related with that country. You\'ll also see Bloomberg articles to stay up to date on financial news around the globe.'
                });

                this.displayBigView();
                break;

            case 'note':
                this.setState({
                    bigViewTitle: 'Simple Note Taker',
                    bigImg: './images/Note-Taker-2.jpg',
                    bigAlt: 'My Simple Note Taker',
                    liveLink: 'https://simple-notes-taker.herokuapp.com/',
                    repoLink: 'https://github.com/hockeyduck3/Simple-Note-Taker',
                    description: 'This project was another assignment given to me from my Full Stack Web Course. For this assignment the front-end was given to us, but we had to go and build the backend ourselves. But after I was done building the backend I did go and change up the frontend just a little bit. 😁'
                });

                this.displayBigView();
                break;

            case 'employeeManage':
                this.setState({
                    bigViewTitle: 'Employee Management App',
                    bigImg: './images/Employee-Management-2.jpg',
                    bigAlt: 'My Employee Management App',
                    liveLink: 'https://www.youtube.com/watch?v=UztqwmOUK84&feature=youtu.be',
                    repoLink: 'https://github.com/hockeyduck3/Employee-Management-System',
                    description: 'For this project I had to go and build a Node.js app that also connected to a SQL server! The app can be used to help keep track and employee\'s in the company, what job they have, what department they\'re in, what their salary is, and even who their manager is! This app doesn\'t have a live website attached to it, but feel free to watch the video below to see this project in action!'
                });

                this.displayBigView();
                break;

            case 'burger':
                this.setState({
                    bigViewTitle: 'Eat-Dat-Burger',
                    bigImg: './images/Eat-Dat-Burger-2.jpg',
                    bigAlt: 'My Eat-Dat-Burger App',
                    liveLink: 'https://eat-dat-burger-website.herokuapp.com/',
                    repoLink: 'https://github.com/hockeyduck3/Eat-Dat-Burger',
                    description: 'For this project I had to go and make a simple burger eating website that utilized a SQL database. The website itself is using Handlebars for HTML handling, Bootstrap, jQuery, Express, and JawsDB. The main point of this website is simple, you can add a burger to the "Burgers to Devour" list, and then once you click on that burger it will move over to the "Devoured burgers" list! All of this is saved within a JawsDB SQL server.'
                });

                this.displayBigView();
                break;

            default:
                this.setState({
                    bigViewTitle: 'Poke-Build',
                    bigImg: './images/Poke-Build-2.jpg',
                    bigAlt: 'the Poke-Build Website',
                    liveLink: 'https://poke-build.herokuapp.com/',
                    repoLink: 'https://github.com/Akessler314/PokE-Build',
                    description: 'This was my second group project in my Full Stack Web Course. We wanted to do something really fun for this project, something that both challenged us and something that we\'d be proud of! With Poke-Build you can go and view other user created Pokemon, Battle Pokemon, or simply make your own Pokemon!'
                });

                this.displayBigView();
        }
    }

    displayBigView = () => {
        const card = document.getElementById('card').classList;

        card.add('animate__animated', 'animate__rubberBand');

        setTimeout(() => {
            this.setState({
                bigView: true
            });

            window.scrollTo(0, 0);

            setTimeout(() => {
                card.remove('animate__animated', 'animate__rubberBand');
            }, 600);
        }, 300);
    }

    displayPreview = event => {
        event.preventDefault();

        const card = document.getElementById('card').classList;

        card.add('animate__animated', 'animate__rubberBand');

        setTimeout(() => {
            this.setState({
                bigView: false
            });

            setTimeout(() => {
                card.remove('animate__animated', 'animate__rubberBand');
            }, 600);
        }, 300);
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
                    <Card title='bigView' id='portfolio' bigTitle={this.state.bigViewTitle} backClick={this.displayPreview}>
                        <Container>
                            <div className='row'>
                                {/* Image */}
                                <div className='col-lg-4'>
                                    <img src={this.state.bigImg} alt={`Screenshot of ${this.state.bigAlt}`} className='portfolioBigImg' />
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
                        </Container>
                    </Card>
                )}
            </Container>
        )
    }
}

export default Portfolio;