import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/index';

import Card from '../../components/Card/index';

import './style.css';

class Homepage extends Component {
    state = {
        title: 'About Me',
        helloThere: false
    }

    helloThereFunc = () => {
        const card = document.getElementById('card');
        const ghLink = document.getElementById('githubLink');

        // Once this function is start the card will slide out to the right
        card.classList.add('animate__animated', 'animate__backOutRight');

        // And the Github link will fade out
        ghLink.classList.add('animate__animated', 'animate__fadeOut');

        // Wait 1.2 seconds
        setTimeout(() => {
            // Change the state
            this.setState({
                title: 'Hello There!',
                helloThere: true
            });

            // Card will slide in from the left
            card.classList.replace('animate__backOutRight', 'animate__backInLeft');

            // Wait 5 seconds
            setTimeout(() => {
                // Have the card slide out to the right again
                card.classList.add('animate__animated', 'animate__backOutRight');

                setTimeout(() => {
                    // Change the state back
                    this.setState({
                        title: 'About Me',
                        helloThere: false
                    });
                    
                    // Card slides back in on the left
                    card.classList.replace('animate__backOutRight', 'animate__backInLeft');

                    // And the Github link will fade back in
                    ghLink.classList.replace('animate__fadeOut', 'animate__fadeIn');
                }, 1200);
            }, 5000);
        }, 1200);
    }

    render() {
        const helloThere = this.state.helloThere;

        return (
            <Container fluid='-fluid'>
                <Card title={this.state.title}>
                    <div className='mainCard'>
                        {!helloThere ? (
                            <div>
                                <img id='profilePic' src='./images/Profile-Pic.jpg' alt="LJ holding his sister's dog Teeny" />

                                <p className='text'> <button id='btn1' onClick={this.helloThereFunc}>Hello there!</button> My name is LJ <span role='img' aria-label='Smiling Emoji'>😁</span> and the Chihuahua in the picture with me is my sister's dog Tyne! (Pronounced Teeny) </p>
        
                                <p className='text'>I'm a Salt Lake City native who is currently studying Full Stack Web Development at the University of Utah.</p>
        
                                <p className='text'>If you want to see some of the projects I've worked on, head over to my <Link to='/Portfolio'>Portfolio page</Link></p>
        
                                <p className='text'>In my free time I like to go to the movies 🎞, hang out and play games with my friends <span role='img' aria-label='Xbox Controller Emoji'>🎮</span>, tinker with computers and other tech <span role='img' aria-label='Phone Emoji'>📱</span>, and on occasion, I'll travel down to Las Vegas to watch some hockey. Go Knights Go! ⚔</p>
        
                                <p className='text'>If you wanna know more about me, feel free to reach out to me on my <Link to='/Contact'>Contact page</Link></p>
        
                                <p className='text'>Or feel free to text me at 801-867-8728</p>
                            </div>
                        ) : (
                            <div id='helloThereDiv'>
                                <img id='helloThereGif' src='./images/hello-there.gif' alt='Obi-Wan Kenobi says, hello there!' />
                            </div>
                        )}
                    </div>
                </Card>

                <div id='githubLink'>
                    <a href='https://github.com/hockeyduck3/Portfolio-React' target='_blank' rel='noopener noreferrer'>Click here for my website's Repo <i className='fab fa-github'></i></a>
                </div>
            </Container>
        )
    }
}

export default Homepage;