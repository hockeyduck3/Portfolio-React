import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

class Portfolio extends Component {
    state = {
        title: 'My Portfolio',
        bigView: false,
    }

    handleClick = () => {

    }

    render() {
        const bigView = this.state.bigView;
        return (
            <Container fluid='-fluid'>
                {!bigView ? (
                    <Card title={this.state.title}>
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