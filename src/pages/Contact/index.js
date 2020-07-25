import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';
import FormGroup from '../../components/Form-Group/index';

import './contact.css';

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

    validateFunc = event => {
        event.preventDefault();
    }

    render() {
        return (
            <Container fluid='-fluid'>
                <Card title={this.state.title}>
                    <div className='mainCard'>
                        <form id='my-form' action='https://formspree.io/moqngqye' method='POST' onSubmit={this.validateFunc}>

                            {/* Name */}
                            <FormGroup name='name' label='Name' errorMessage='* Cannot contain numbers.'>
                                <input 
                                    id='name' 
                                    className='form-control'
                                    name='name' 
                                    type='text' 
                                    placeholder='Your Name'
                                    onChange={this.inputFunc}
                                    value={this.state.name}
                                />
                            </FormGroup>

                            {/* Email */}
                            <FormGroup name='email' label='Email' errorMessage='* Invalid email.'>
                                <input 
                                    id='email'
                                    className='form-control' 
                                    name='email' 
                                    type='text' 
                                    placeholder='Your Email'
                                    onChange={this.inputFunc}
                                    value={this.state.email}
                                />
                            </FormGroup>

                            {/* Message */}
                            <FormGroup name='message' label='Message' errorMessage='* Cannot be empty.'>
                                <textarea 
                                    id='message' 
                                    className='form-control' 
                                    name='message' 
                                    placeholder='Enter your message here.' 
                                    rows='3'
                                    onChange={this.inputFunc}
                                    value={this.state.message}
                                />
                            </FormGroup>

                            {/* Submit button */}
                            <FormGroup name='submit'>
                                <p className='axiousError hide'>Something went wrong...</p>
                                <button id='my-form-button' className='btn btn-primary btn-lg' type='submit'>Submit</button>
                            </FormGroup>

                        </form>
                    </div>
                </Card>
            </Container>
        )
    }
}

export default Contact;