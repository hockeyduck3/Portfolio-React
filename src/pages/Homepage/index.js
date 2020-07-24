import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/index';

import Card from '../../components/Card/index';

import './style.css';

class Homepage extends Component {
    helloThere = () => {

    }

    render() {
        return (
            <Container fluid='-fluid'>
                <Card title='About Me'>
                    <div className='mainCard'>
                        <img id='profilePic' src='./images/Profile-Pic.jpg' alt="LJ holding his sister's dog Teeny" />

                        {/* About me paragraphs */}
                        <p className='text'> <button id='btn1'>Hello there!</button> My name is LJ <span role='img' aria-label='Smiling Emoji'>😁</span> and the Chihuahua in the picture with me is my sister's dog Tyne! (Pronounced Teeny) </p>

                        <p className='text'>I'm a Salt Lake City native who is currently studying Full Stack Web Development at the University of Utah.</p>

                        <p className='text'>If you want to see some of the projects I've worked on, head over to my <Link to='/Portfolio'>Portfolio page</Link></p>

                        <p className='text'>In my free time I like to go to the movies 🎞, hang out and play games with my friends <span role='img' aria-label='Xbox Controller Emoji'>🎮</span>, tinker with computers and other tech <span role='img' aria-label='Phone Emoji'>📱</span>, and on occasion, I'll travel down to Las Vegas to watch some hockey. Go Knights Go! ⚔</p>

                        <p className='text'>If you wanna know more about me, feel free to reach out to me on my <Link to='/Contact'>Contact page</Link></p>

                        <p className='text'>Or feel free to text me at 801-867-8728</p>
                    </div>
                </Card>
                
                <div id='githubLink'>
                    <a href='https://github.com/hockeyduck3/Portfolio' target='_blank'>Click here for my website's Repo <i class='fab fa-github'></i></a>
                </div>
            </Container>
        )
    }
}

export default Homepage;