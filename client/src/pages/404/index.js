import React, { useEffect } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

import './404.css';

function NotFound() {
    useEffect(() => {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        document.getElementById('notFoundCard').style.display = 'none'
        document.title = 'LJ\'s | 404';
    }, []);

    function loaded() {
        const card = document.getElementById('notFoundCard');

        card.classList.add('animate__animated', 'animate__slideInDown');
        card.style.display = 'block';
    }

    return (
        <Container>
            <OnImagesLoaded
                onLoaded={() => loaded()}
                onTimeout={() => loaded()}
                timeout={10000}
            >
                <div className='row'>
                    <Card title='404' id='notFoundCard'>
                        <h2 id='notFoundTitle'>The page you're looking for couldn't be found... <span role='img' aria-label='One Tear Emoji'>😢</span></h2>

                        <div id='sadDiv'>
                            <img id='sadGif' src='./gifs/sad.gif' alt='Saddnes from Inside Out is crying because you got a 404 error.' />
                        </div>

                        <p className='notFoundText'>
                            Please make sure you typed the link correctly.
                        </p>

                        <p className='notFoundText'>
                            Or if this was a glitch please contact LJ at <em><a href='mailTo:hockeyduck3@gmail.com'>hockeyduck3@gmail.com</a></em>
                        </p>

                        <p className='notFoundText'>
                            <a href='/'>Click here to go back to the homepage.</a>
                        </p>
                    </Card>
                </div>
            </OnImagesLoaded>
        </Container>
    )
}

export default NotFound;
