import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LabelAndInput from '../common/form/labelAndInput2'
import If from '../utils/if'
import validate from './validate'

class EditarPerfilForm extends Component {
    
    render() {
        const { handleSubmit } = this.props
        return (
            <div className="box-header">
                <form role="form" onSubmit={handleSubmit}>
                    <div className="box-body">
                        <Field name="usuario" component={LabelAndInput}
                            label="Usuario" type="text" readOnly />
                        <Field name="nome" component={LabelAndInput}
                            label="Nome" type="text" />
                        <Field name="senhaAtual" component={LabelAndInput}
                            label="Senha Atual" type="password" />
                        <Field name="novaSenha" component={LabelAndInput}
                            label="Nova Senha" type="password" />
                        <Field name="novaSenhaConfirmacao" component={LabelAndInput}
                            label="Confirme Nova Senha" type="password" />
                    </div>
                    <div className="box-footer">
                        <button type='submit' className="btn btn-primary" disabled={this.props.loading}>
                            <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If> Salvar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

EditarPerfilForm = reduxForm({
    form: 'editarPerfilForm',
    validate
})(EditarPerfilForm)
const mapStateToProps = state => ({ loading: state.usuario.loading })
export default connect(mapStateToProps, null)(EditarPerfilForm)