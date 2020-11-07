import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import OnImagesLoaded from 'react-on-images-loaded';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

import './aboutMe.css';

class AboutMe extends Component {
    state = {
        title: 'Hello there! I\'m LJ.',
        helloThere: false,
        alreadyLoaded: false
    }

    componentDidMount() {
        document.title = 'LJ\'s | Homepage';
    }

    helloThereFunc = () => {
        if (!this.state.helloThere) {
            const card = document.querySelector('.mainCard').classList;

            // Once this function is starting the card will slide out to the right
            card.add('animate__animated', 'animate__backOutRight');

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
                    }, 1000);
                }, 6000);
            }, 1000);
        }
    }

    onLoadFunc() {
        const visibleDoc = document.querySelectorAll('#profilePic, #textSection, .caption');
        const doc = document.querySelectorAll('#profilePic, #textSection');

        for (let i = 0; i < doc.length; i++) {
            visibleDoc[i].style.visibility = 'visible'
            doc[i].classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-2s');
        }

        document.getElementById('textSection').style.visibility = 'visible';

        document.querySelector('.caption').classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-3s');

        setTimeout(() => {
            this.setState({
                alreadyLoaded: true
            });

            for (let i = 0; i < doc.length; i++) {
                doc[i].classList.remove('animate__animated', 'animate__fadeInUp', 'animate__delay-2s');
            }
        }, 3000);
    }

    onLoadBackIn() {
        const visibleDoc = document.querySelectorAll('#profilePic, #textSection, .caption');

        for (let i = 0; i < visibleDoc.length; i++) {
            visibleDoc[i].style.visibility = 'visible';
        }
    }

    render() {
        const helloThere = this.state.helloThere;
        const alreadyLoaded = this.state.alreadyLoaded;

        return (
            <Container fluid='-fluid'>
                <Card title={this.state.title} id='homepage' func={this.helloThereFunc}>
                    <div className='mainCard'>
                        {!helloThere ? (
                            <div>
                                <OnImagesLoaded
                                    onLoaded={() => {
                                        if (!alreadyLoaded) {
                                            this.onLoadFunc();
                                        } else {
                                            this.onLoadBackIn();
                                        }
                                    }}
                                    onTimeout={() => { this.onLoadBackIn() }}
                                    timeout={5000}
                                >
                                    <div className='item'>
                                        <img id='profilePic' src='./images/Profile-Pic.jpg' alt="LJ holding his sister's dog Teeny" style={{ visibility: 'hidden' }} />
                                        <p className='text caption' style={{ visibility: 'hidden' }}>The chihuahua in the picture with me is my sister's dog Tyne! (Pronounced Teeny)</p>
                                    </div>

                                    <div id='textSection' style={{ visibility: 'hidden' }}>
                                        <p className='text'>I'm a Salt Lake City native, and recent Full Stack Web Developer graduate from the University of Utah.</p>

                                        <img id='codeThinking' src='./images/illustrations/undraw_code_thinking_1jeh.png' alt='Develper thinking about code while leaning against a big laptop.' />

                                        <p className='text'>My skill set includes HTML, Handlebars, CSS, Bootstrap, Javascript, jQuery, Nodejs, Express, mySQL, MongoDB, Git, and React. (This website was actually built using React.)</p>

                                        {window.screen.width < 1024 ? (
                                            <p className='text'><Link smooth to='/#portfolio2' className='homepageLinks'>Click here</Link> to see some of the projects that I have worked on! Or you can just scroll down, I'll leave that choice up to you.</p>
                                        ) : (
                                            <p className='text'><Link smooth to='/#portfolio' className='homepageLinks'>Click here</Link> to see some of the projects that I have worked on! Or you can just scroll down, I'll leave that choice up to you.</p>
                                        )}

                                        <p className='text'>In my free time I like to go to the movies <img className='illustrations' src='./images/illustrations/undraw_movie_night_fldd.png' alt='Popcorn, Soda, and 3d glasses.' />, help others with their technology woes, hang out and play games with my friends <img className='illustrations' src='./images/illustrations/undraw_video_game_night_8h8m.png' alt='Friends hanging out on a giant gaming controller' /> tinker with computers and other tech <img className='illustrations' src='./images/illustrations/undraw_feeling_proud_qne1.png' alt='Chilling on a desk' /> and on occasion I'll travel down to Las Vegas to watch some hockey. Go Knights Go! ⚔</p>

                                        <p className='text'>If you want to know more about me, feel free to reach out to me using my <Link smooth to='/#contact' className='homepageLinks'>Contact card</Link> below!</p>

                                        <p className='text'>Or if you don't want to use the contact card below you can always reach out to me directly at <em><a href='mailTo:hockeyduck3@gmail.com' className='homepageLinks'>hockeyduck3@gmail.com</a></em>. Or call/text me at 801-867-8728.</p>

                                        <p className='text socialText'>Another way you can reach me is via Social Media!</p>

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
                                </OnImagesLoaded>
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
