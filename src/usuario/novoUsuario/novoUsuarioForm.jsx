import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import LabelAndInput2 from '../../common/form/labelAndInput2'
import LabelAndSelect2 from '../../common/form/labelAndSelect2'
import Content from '../../common/template/content'
import If from '../../utils/if'
import validate from './validate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MaskTelefone from '../../common/form/maskTelefone'

class NovoUsuarioForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (             
            <Content>
                <div className="box-header center-horizontal"> 
                    <div className="center-horizontal">
                        <h3>Solicitação de Acesso</h3>
                    </div>
                    <form role="form" onSubmit={handleSubmit}>                    
                    <div className="box-body form-estreito">
                        <Field name="nome" component={LabelAndInput2} label="Nome do Estabelecimento"/>
                        <Field name="email" component={LabelAndInput2} label="Email"/>
                        <Field name="email2" component={LabelAndInput2} label="Confirmação do Email"/>
                        <Field name="senha" component={LabelAndInput2} label="Senha" type="password"/>
                        <Field name="senha2" component={LabelAndInput2} label="Confirmação da Senha" type="password"/>
                        <Field name="telefone" component={LabelAndInput2} label="Telefone (1)" normalize={MaskTelefone}/>
                        <Field name="telefone2" component={LabelAndInput2} label="Telefone (2)" normalize={MaskTelefone}/>
                        <Field name="bairro" component={LabelAndSelect2} label="Bairro" 
                            options={this.props.dados.bairros} prompt='Selecione um bairro...'/>
                        <Field name="endereco" component={LabelAndInput2} label="Endereço"/>
                        <button type="submit" className="btn btn-warning align-right" disabled={this.props.loading}>
                            <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If>
                            Enviar
                        </button>
                    </div>    
                    </form>               
                </div>
            </Content>
        )
    }
}

NovoUsuarioForm = reduxForm({
    form: 'novoUsuarioForm', 
    validate
})(NovoUsuarioForm) 
const mapStateToProps = state => ({ loading: state.usuario.loading, dados: state.dados })
export default connect(mapStateToProps, null) (NovoUsuarioForm)