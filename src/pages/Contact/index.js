import React, { Component } from 'react';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';

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
                            <div className='form-group'>
                                <label className='col-sm-12 control-label' htmlFor='name'>
                                    Name <span id='nameError' className='hide'>* Cannot contain numbers.</span>
                                </label>

                                <div className='col-md-10'>
                                    <input 
                                        id='name' 
                                        className='form-control'
                                        name='name' 
                                        type='text' 
                                        placeholder='Your Name'
                                        onChange={this.inputFunc}
                                        value={this.state.name}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className='form-group'>
                                <label className='col-sm-12 control-label' htmlFor='email'>
                                    Email <span id='emailError' className='hide'>* Invalid email.</span>
                                </label>

                                <div className='col-md-10'>
                                    <input 
                                        id='email'
                                        className='form-control' 
                                        name='email' 
                                        type='text' 
                                        placeholder='Your Email'
                                        onChange={this.inputFunc}
                                        value={this.state.email}

                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className='form-group'>
                                <label className='col-sm-12 control-label' htmlFor='message'>
                                    Message <span id='messageError' className='hide'>* Cannot be empty.</span>
                                </label>

                                <div className='col-md-10'>
                                    <textarea 
                                        id='message' 
                                        className='form-control' 
                                        name='message' 
                                        placeholder='Enter your message here.' 
                                        rows='3'
                                        onChange={this.inputFunc}
                                        value={this.state.message}
                                    />
                                </div>
                            </div>

                            {/* Submit button */}
                            <div className='form-group'>
                                <div className='col-md-12 text-right'>   
                                    <p className='axiousError hide'>Something went wrong...</p>
                                    <button id='my-form-button' className='btn btn-primary btn-lg' type='submit'>Submit</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </Card>
            </Container>
        )
    }
}

export default Contact;