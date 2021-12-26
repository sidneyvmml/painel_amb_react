import React, { Component } from 'react';

class LabelAndSelect extends Component {
    render() {
        const { input, label, type, readOnly, options, prompt, meta: { touched, error } } = this.props
        if (options) {
            return (
                <div className='form-group'>
                    <label>{label}</label>
                    <div>
                        <select {...input} className='form-control' readOnly={readOnly}>
                            <option value="">{prompt}</option>
                            {Object.keys(options).map((key, index) =>
                                <option value={options[key].descricao} key={options[key].id}>
                                    {options[key].descricao}
                                </option>
                            )}
                        </select>
                    </div>
                    <div>
                        {touched && error && <span className='error-field'>{error}</span>}
                    </div>
                </div>
            )
        }
        return (
            <div className='form-group'>
                <label>{label}</label>
                <div>
                    <select {...input} className='form-control' readOnly={readOnly}>
                        <option value="">Nenhuma opção disponível</option>
                    </select>
                </div>
                <div>
                    {touched && error && <span className='error-field'>{error}</span>}
                </div>
            </div>
        )
    }
}

export default LabelAndSelect;