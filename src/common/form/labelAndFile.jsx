import React, { Component } from 'react';

class LabelAndFile extends Component {
    render() {
        const { input, label, type, readOnly, meta: { touched, error } } = this.props
        return (
            <div className='form-group'>
                <label>{label}</label>
                <div>
                <input {...input} type={type} className='form-control' readOnly={readOnly}/>
                </div>
                <div>
                    {touched && error && <span className='error-field'>{error}</span>}
                </div>
            </div>
        )
    }
}

export default LabelAndFile;