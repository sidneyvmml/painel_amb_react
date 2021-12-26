import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LabelAndInput from '../../common/form/labelAndInput2'
import If from '../../utils/if'
import validate from './validate'

class AlterarSenhaForm extends Component {

    render() {
        return (
            <div className="box-header">
                <form role="form" onSubmit={this.props.handleSubmit}> 
                    <div className="box-body">
                        <Field name="senhaAtual" component={LabelAndInput} 
                        label="Senha Atual" type="password"/>
                        <Field name="novaSenha" component={LabelAndInput} 
                        label="Nova Senha" type="password"/>
                        <Field name="novaSenha2" component={LabelAndInput} 
                        label="Confirme Nova Senha" type="password"/>
                    </div>
                    <div className="box-footer">
                        <button type='submit' className="btn btn-primary" disabled={this.props.loading}>
                                <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If> Enviar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

AlterarSenhaForm = reduxForm({
    form: 'alterarSenhaForm', 
    validate
})(AlterarSenhaForm) 
export default AlterarSenhaForm