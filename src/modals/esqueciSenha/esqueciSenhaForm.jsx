import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import LabelAndInput from '../../common/form/labelAndInput2'
import If from '../../utils/if'
import validate from './validate'

class EsqueciSenhaForm extends Component {
    
    render() {
        return (
            <form role="form" onSubmit={this.props.handleSubmit}> 
                <div className="box-body">
                    <Field name="email" component={LabelAndInput} label="Email"/>
                </div>
                <div className="box-footer">
                        <button type='submit' className="btn btn-warning btn-block btn-flat" disabled={this.props.loading}>
                                <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If> Enviar
                        </button>
                </div>
            </form>
        )
    }
}

EsqueciSenhaForm = reduxForm({
    form: 'esqueciSenhaForm', 
    validate
})(EsqueciSenhaForm) 
export default EsqueciSenhaForm