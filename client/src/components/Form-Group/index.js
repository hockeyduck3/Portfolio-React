import React from 'react';

function FormGroup(props) {
    const {name, label, children} = props;

    if (name !== 'submit') {
        return (
            <div className='form-group'>
                <label className='col-sm-12 control-label' htmlFor={name}>
                    {label}
                </label>
                <p id={name + 'Error'}></p>
    
                <div id={name + 'Col'} className='col-md-12'>
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='form-group'>
                <div className='col-md-12 text-right'>
                    {children}
                </div>
            </div>
        )
    }
}

export default FormGroup;
