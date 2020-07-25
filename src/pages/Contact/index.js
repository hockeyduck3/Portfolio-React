import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

class Contact extends Component {
    state = {
        title: 'Contact Me',
        name: '',
        email: '',
        message: ''
    }

    inputFunc = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container fluid='-fluid'>
                <Card title={this.state.title}>
                    <div className='mainCard'>
                        <form id='my-form' action='https://formspree.io/moqngqye' method='POST'>
                            {/* Add contact form here */}
                        </form>
                    </div>
                </Card>
            </Container>
        )
    }
}

export default Contact;