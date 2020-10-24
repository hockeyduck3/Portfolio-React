import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OnImagesLoaded from 'react-on-images-loaded';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

import './aboutMe.css';

class AboutMe extends Component {
    state = {
        title: 'Hello there! I\'m LJ.',
        helloThere: false,
        lineHeight: 366
    }

    componentDidMount() {
        document.title = 'LJ\'s | Homepage';
    }

    helloThereFunc = () => {
        if (!this.state.helloThere) {
            const card = document.querySelector('.mainCard').classList;
            // const card = document.getElementById('homepage').classList;
            const ghLink = document.getElementById('githubLink').classList;

            // console.log(mainCard);

            // Once this function is starting the card will slide out to the right
            card.add('animate__animated', 'animate__backOutRight');

            // And the Github link will fade out
            ghLink.add('animate__animated', 'animate__fadeOut');

            // Wait 1.2 seconds
            setTimeout(() => {
                // Change the state
                this.setState({
                    helloThere: true
                });

                // Card will slide in from the left
                card.replace('animate__backOutRight', 'animate__backInLeft');

                // Wait 6 seconds
                setTimeout(() => {
                    // Have the card slide out to the right again
                    card.add('animate__animated', 'animate__backOutRight');

                    setTimeout(() => {
                        // Change the state back
                        this.setState({
                            helloThere: false
                        });

                        // Card slides back in on the left
                        card.replace('animate__backOutRight', 'animate__backInLeft');

                        // And the Github link will fade back in
                        ghLink.replace('animate__fadeOut', 'animate__fadeIn');
                    }, 500);
                }, 6000);
            }, 500);
        }
    }

    render() {
        const helloThere = this.state.helloThere;

        return (
            <Container fluid='-fluid'>
                <Card title={this.state.title} id='homepage' func={this.helloThereFunc}>
                    <div className='mainCard'>
                        {!helloThere ? (
                            <div>
                                <OnImagesLoaded
                                    onLoaded={() => {
                                        document.getElementById('profilePic').style.visibility = 'visible';
                                        document.getElementById('profilePic').classList.add('animate__animated', 'animate__flipInY', 'animate__delay-0.5s');
                                    }}
                                    onTimeout={() => document.getElementById('profilePic').classList.add('animate__animated', 'animate__flipInY')}
                                    timeout={5000}
                                >
                                    <div className='item'>
                                        <img id='profilePic' src='./images/Profile-Pic.jpg' alt="LJ holding his sister's dog Teeny" style={{ visibility: 'hidden' }} />
                                        <p className='text caption'>The chihuahua in the picture with me is my sister's dog Tyne! (Pronounced Teeny)</p>
                                    </div>
                                </OnImagesLoaded>

                                {/* <p className='text'> <button id='btn1' onClick={this.helloThereFunc}>Hello there!</button> My name is LJ <span role='img' aria-label='Smiling Emoji'>😁</span> and the Chihuahua in the picture with me is my sister's dog Tyne! (Pronounced Teeny) </p> */}

                                <p className='text'>I'm a Salt Lake City native, and recent Full Stack Web Developer graduate from the University of Utah.</p>

                                <p className='text'>My skill set includes HTML, Handlebars, CSS, Bootstrap, Javascript, jQuery, Nodejs, Express, mySQL, MongoDB, Git, and React.</p>

                                <p className='text'>If you want to see some of the projects I've worked on, head over to my <Link to='/Portfolio' className='homepageLinks'>Portfolio page</Link></p>

                                <p className='text'>In my free time I like to go to the movies 🎞, hang out and play games with my friends <span role='img' aria-label='Xbox Controller Emoji'>🎮</span>, tinker with computers and other tech <span role='img' aria-label='Phone Emoji'>📱</span>, and on occasion, I'll travel down to Las Vegas to watch some hockey. Go Knights Go! ⚔</p>

                                <p className='text'>If you want to know more about me, feel free to reach out to me on my <Link to='/Contact' className='homepageLinks'>Contact page</Link></p>

                                <p className='text'>Or feel free to text me at <strong>801-867-8728</strong></p>

                                <p className='text socialText'>You can also reach me on Social Media!</p>

                                <div className='homepageSocial'>
                                    {/* Twitter Link */}
                                    <a href='https://twitter.com/ljspencer97' target='_blank' rel='noopener noreferrer'>
                                        <i id='twitter2' className='fab fa-twitter-square'></i>
                                    </a>

                                    {/* Github Link */}
                                    <a id='github2' href='https://github.com/hockeyduck3' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-github-square'></i>
                                    </a>

                                    {/* LinkedIn Link */}
                                    <a id='linkedin2' href='https://linkedin.com/in/lj-spencer' target='_blank' rel='noopener noreferrer'>
                                        <i className='fab fa-linkedin'></i>
                                    </a>
                                </div>
                            </div>
                        ) : (
                                <div id='helloThereDiv'>
                                    <img id='helloThereGif' src='./gifs/hello-there.gif' alt='Obi-Wan Kenobi says, hello there!' />
                                </div>
                            )}
                    </div>
                </Card>
            </Container>
        )
    }
}

export default AboutMe;
