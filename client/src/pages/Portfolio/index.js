import React, { Component } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import Carousel from 'react-bootstrap/Carousel'
import grabProject from './grabProject';
import projectData from './projectData';

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

        const { 
            bigViewTitle, 
            bigImg, 
            bigAlt, 
            liveLink, 
            repoLink, 
            marginTop, 
            description 
        } = grabProject(dataName);

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

            document.querySelector('body').scrollTo(0, 0);

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
                    <div>
                        <Card title={this.state.title} id='portfolio'>
                            <Container>
                                <OnImagesLoaded
                                    onLoaded={() => this.onLoadFunc('mainSection', 'mainSection', 'fadeIn', '0.9s')}
                                    onTimeout={() => this.onLoadFunc('mainSection', 'mainSection', 'fadeIn', '0.9s')}
                                    timeout={5000}
                                >
                                    <div className='row mainSection' id='mainSection' style={{ visibility: 'hidden' }}>
                                        {
                                            projectData.firstProjects.map((res, i) => (
                                                <PortfolioCard
                                                    key={i} 
                                                    data={res.data}
                                                    img={res.img}
                                                    alt={res.alt}
                                                    name={res.name}
                                                    handleClick={this.handleClick}
                                                />
                                            ))
                                        }
                                    </div>
                                </OnImagesLoaded>
                            </Container>
                        </Card>

                        <Card>
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <Container>
                                        <div className='row mainSection' id='mainSection'>
                                            {
                                                projectData.firstProjects.map((res, i) => (
                                                    <PortfolioCard
                                                        key={i} 
                                                        data={res.data}
                                                        img={res.img}
                                                        alt={res.alt}
                                                        name={res.name}
                                                        handleClick={this.handleClick}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </Container>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Container>
                                        <div className='row mainSection' id='mainSection'>
                                            {
                                                projectData.firstProjects.map((res, i) => (
                                                    <PortfolioCard
                                                        key={i} 
                                                        data={res.data}
                                                        img={res.img}
                                                        alt={res.alt}
                                                        name={res.name}
                                                        handleClick={this.handleClick}
                                                    />
                                                ))
                                            }
                                            {/* <div id='test2'><p style={{visibility: 'hidden'}}>This is just to make sure the Carousel doesn't shift. This paragraph is not visible to the user.</p></div> */}
                                        </div>
                                    </Container>
                                </Carousel.Item>
                            </Carousel>
                        </Card>
                    </div>
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
                                            <img src={this.state.bigImg} alt={`Screenshot of ${this.state.bigAlt}`} className='portfolioBigImg' id='portfolioBigImg' style={{ marginTop: this.state.marginTop, visibility: 'hidden' }} />
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
