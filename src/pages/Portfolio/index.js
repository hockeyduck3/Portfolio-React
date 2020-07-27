import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

import './portfolio.css';

class Portfolio extends Component {
    state = {
        title: 'My Portfolio',
        bigView: false,
    }

    componentDidMount() {
        document.title = 'LJ\'s | Portfolio';
    }

    handleClick = () => {

    }

    render() {
        const bigView = this.state.bigView;
        return (
            <Container fluid='-fluid'>
                {!bigView ? (
                    <Card title={this.state.title} id='portfolio'>
                        <h1>Hello there!</h1>
                    </Card>
                ) : (
                    <Card title={this.state.title}>
                        <h1>General Kenobi!</h1>
                    </Card>
                )}
            </Container>
        )
    }
}

export default Portfolio;