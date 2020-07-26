import React, { Component } from 'react';
import axios from 'axios';

import Container from '../../components/Container/index';
import Card from '../../components/Card/index';
import FormGroup from '../../components/Form-Group/index';

import './contact.css';

class Contact extends Component {
    state = {
        title: 'Contact Me',
        name: '',
        email: '',
        message: '',
        status200: false
    }

    componentDidMount() {
        document.title = 'LJ\'s | Contact';
    }

    inputFunc = event => {
        const { name, value } = event.target;

        if (event.target.classList.contains('errorTrue')) {
            this.removeError(name);
        }
        
        this.setState({ [name]: value });
    }

    validateFunc = event => {
        event.preventDefault();

        let anyErrors = false;
        
        const defaultString = '* Cannot be empty.';

        const name = this.state.name;
        const email = this.state.email;
        const message = this.state.message;

        // If name is left blank
        if (name === '') {
            this.showError('name', defaultString);
            anyErrors = true;
        } 
        
        // If name contains numbers
        else if (name.match(/[0-9]/)) {
            this.showError('name', '* Cannot contain numbers.');
            anyErrors = true;
        } 
        
        // If name contains any special characters
        else if (name.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            this.showError('name', '* Cannot contain special characters.');
            anyErrors = true;
        }

        // If email is blank
        if (email === '') {
            this.showError('email', defaultString);
            anyErrors = true;
        }

        // Email regex from: http://regexlib.com/Search.aspx?k=email

        // eslint-disable-next-line
        else if (!email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            this.showError('email', 'Not valid email address.');
            anyErrors = true;
        }

        // If message is blank
        if (message === '') {
            this.showError('message', defaultString);
            anyErrors = true;
        }

        // If there are no errors, then run the sendEmail function
        if (!anyErrors) {
            this.sendEmail();
        }
    }

    showError = (name, text) => {
        // Set the text of the error element to the text parameter
        document.getElementById(name + 'Error').innerHTML = text;

        // Play the animations fro the error element
        document.getElementById(name + 'Error').classList.add('animate__animated', 'animate__fadeIn');
        document.getElementById(name + 'Error').classList.remove('hide');

        // Play the shake animation on the element with the error, and change the border color to red
        document.getElementById(name + 'Col').classList.add('animate__animated', 'animate__shakeX');
        document.getElementById(name).style.borderColor = 'red';

        // Finally add this to the classList to easily see and remove any error styling
        document.getElementById(name).classList.add('errorTrue');

        // Remove the animation classes after 600 milliseconds so they can be played again
        setTimeout(() => {
            document.getElementById(name + 'Error').classList.remove('animate__animated', 'animate__fadeIn');
            document.getElementById(name + 'Col').classList.remove('animate__animated', 'animate__shakeX');
        }, 600);
    }

    removeError = name => {
        document.getElementById(name).classList.remove('errorTrue');
        document.getElementById(name + 'Error').classList.add('animate__animated', 'animate__fadeOut');
        document.getElementById(name).style.borderColor = 'black';

        // Remove the fadeOut animation and re-add the class of hide after 500 milliseconds
        setTimeout(() => {
            document.getElementById(name + 'Error').classList.remove('animate__animated', 'animate__fadeOut');
            document.getElementById(name + 'Error').classList.add('hide');
        }, 500);
    }

    sendEmail = () => {
        
        const form = document.getElementById('my-form');
        
        const data = new FormData(form);
        
        document.getElementById('card').classList.add('animate__animated', 'animate__bounceOutUp');

        setTimeout(() => {
            axios({
                method: 'post',
                url: 'https://formspree.io/moqngqye',
                data: data
            }).then(res => {
                this.setState({status200: true});

                this.emailSuccess();
            }).catch(err => {
                this.emailFail();

                console.log(err);
            });
        }, 1500);

    }

    emailSuccess = () => {
        const card = document.getElementById('card').classList;

        card.replace('animate__bounceOutUp', 'animate__bounceInDown');

        setTimeout(() => {
            card.replace('animate__bounceInDown', 'animate__flipOutY');

            setTimeout(() => {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    status200: false
                });

                card.replace('animate__flipOutY', 'animate__flipInY');

                setTimeout(() => {
                    card.remove('animate__animated', 'animate__flipInY');

                }, 1000);
            }, 1000);
        }, 2500);
    }

    emailFail = () => {
        const card = document.getElementById('card').classList;

        const error = document.querySelector('.axiosError').classList;

        card.replace('animate__bounceOutUp', 'animate__bounceInDown');

        error.remove('hide');
        setTimeout(() => {
            card.remove('animate__animated', 'animate__bounceInDown');
        }, 1000);

        setTimeout(() => {

            error.add('animate__animated', 'animate__fadeOut');
            
            setTimeout(() => {
                error.remove('animate__animated', 'animate__fadeOut');
                error.add('hide');
            }, 1000);
        }, 3000);
    }

    render() {
        const status = this.state.status200;

        return (
            <Container fluid='-fluid'>
                {!status ? (
                    <Card title={this.state.title}>
                        <div className='mainCard'>
                                <form id='my-form' onSubmit={this.validateFunc}>

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
                                        <p className='axiosError hide'>Something went wrong...</p>
                                        <button id='my-form-button' className='btn btn-primary btn-lg' type='submit'>Submit</button>
                                    </FormGroup>

                                </form>
                            </div>
                    </Card>

                ) : (
                    <Card title='messageSent'>
                        <p id='messageSent'>Message Sent!</p>
                    </Card>
                )}

                <p id='emailText'>If you don't want to use the above contact form, you can reach out to me directly at <em><a href='mailTo:hockeyduck3@gmail.com'>hockeyduck3@gmail.com</a></em></p>
            </Container>
        )
    }
}

export default Contact;