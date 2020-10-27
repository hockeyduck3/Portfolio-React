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

    inputFunc = event => {
        const { name, value } = event.target;

        const errorCheck = document.getElementById(name + 'Error').classList

        if (errorCheck.contains('errorTrue')) {
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
        const nameVal = document.getElementById(name);
        const nameError = document.getElementById(name + 'Error');
        const nameCol = document.getElementById(name + 'Col');

        // Set the text of the error element to the text parameter
        nameError.innerHTML = text;

        // Play the animations from the error element and add the errorTrue class
        if (!nameError.classList.contains('errorTrue')) {
            nameError.classList.add('animate__animated', 'animate__fadeIn', 'errorTrue');
        }

        // Play the shake animation on the element with the error, and change the border color to red
        nameCol.classList.add('animate__animated', 'animate__shakeX');
        nameVal.style.borderColor = 'red';

        // Remove the animation classes after 600 milliseconds so they can be played again
        setTimeout(() => {
            nameError.classList.remove('animate__animated', 'animate__fadeIn');
            nameCol.classList.remove('animate__animated', 'animate__shakeX');
        }, 600);
    }

    removeError = name => {
        const nameVal = document.getElementById(name);
        const nameError = document.getElementById(name + 'Error');

        nameVal.classList.remove('errorTrue');
        nameError.classList.add('animate__animated', 'animate__fadeOut');
        nameVal.style.borderColor = 'black';

        // Remove the fadeOut animation and re-add the class of hide after 500 milliseconds
        setTimeout(() => {
            nameError.classList.remove('animate__animated', 'animate__fadeOut');
            nameError.innerHTML = '';
        }, 500);
    }

    sendEmail = () => {
        const form = document.getElementById('my-form');
        
        const data = new FormData(form);
        
        document.getElementById('contact').classList.add('animate__animated', 'animate__bounceOutUp');

        setTimeout(() => {
            axios({
                method: 'post',
                url: process.env.REACT_APP_FORM,
                data: data
            }).then(res => {
                this.setState({status200: true});

                this.emailSuccess();
            }).catch(err => {
                console.log(err);
                this.emailFail();
            });
        }, 1500);

    }

    emailSuccess = () => {
        const card = document.getElementById('contact').classList;

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
        const card = document.getElementById('contact').classList;
        const error = document.querySelector('.axiosError');

        card.replace('animate__bounceOutUp', 'animate__bounceInDown');
        error.classList.remove('hide');

        setTimeout(() => {
            card.remove('animate__animated', 'animate__bounceInDown');

            setTimeout(() => {
                error.classList.add('animate__animated', 'animate__fadeOut');

                error.addEventListener('animationend', () => {
                    error.classList.add('hide');
                    error.classList.remove('animate__animated', 'animate__fadeOut');
                });
            }, 2000);
        }, 1000);
        
    }

    render() {
        const status = this.state.status200;

        return (
            <Container fluid='-fluid'>
                {!status ? (
                    <Card title={this.state.title} id='contact'>
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
                                            rows='4'
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
                    <Card title='messageSent' id='contact'>
                        <p id='messageSent'>Message Sent!</p>
                    </Card>
                )}

                <p id='emailText'>If you don't want to use the above contact form, you can reach out to me directly at <em><a href='mailTo:hockeyduck3@gmail.com'>hockeyduck3@gmail.com</a></em></p>
            </Container>
        )
    }
}

export default Contact;