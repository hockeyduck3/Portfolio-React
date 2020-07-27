import React from 'react';

function FormGroup(props) {
    if (props.name !== 'submit') {
        return (
            <div className='form-group'>
                <label className='col-sm-12 control-label' htmlFor={props.name}>
                    {props.label} <span id={props.name + 'Error'} className='hide'>{props.errorMessage}</span>
                </label>
    
                <div id={props.name + 'Col'} className='col-md-10'>
                    {props.children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='form-group'>
                <div className='col-md-12 text-right'>
                    {props.children}
                </div>
            </div>
        )
    }
}

export default FormGroup;
