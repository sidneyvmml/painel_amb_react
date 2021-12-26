import React, { Component } from 'react';

class LabelAndValor extends Component {
    render() {
        const { input, label, type, readOnly, accept, valor, meta: { touched, error } } = this.props
        return (
            <div className='form-group'>
                <label>{label}</label>
                <div>
                {valor}
                </div>
            </div>
        )
    }
}

export default LabelAndValor
