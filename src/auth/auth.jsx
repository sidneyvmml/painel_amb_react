import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector, change, reset, initialize } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, singup } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../utils/if'
import validate from './validate'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {

    changeLoginMode() {
        this.props.reset()
        this.props.change('loginMode', !this.props.loginMode)
    }

    onSubmit(values) {
        const { login, singup } = this.props
        this.props.loginMode ? login(values) : singup(values)
    }

    render() {
        const { loginMode } = this.props
        const { handleSubmit } = this.props
        return (
            <div className="login-page">

                <div className="login-form">
                    <h1>
                        Painel de Senhas - Pestalozzi
                    </h1>
                    <h2>
                        {loginMode ? 'Login' : 'Cadastro'}
                    </h2>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="text" name="nome"
                            placeholder="Nome" icon='user' hide={loginMode} />
                        <Field component={Input} type="text" name="usuario"
                            placeholder="Usuário" icon='user' />
                        <Field component={Input} type="password" name="senha"
                            placeholder="Senha" icon='lock' />
                        <Field component={Input} type="password" name="senhaConfirmacao"
                            placeholder="Confirmação da Senha" icon='lock' hide={loginMode} />
                        <div className="center">
                            <button type="submit"
                                className="btn btn-primary btn-block btn-flat">
                                <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If>
                                {loginMode ? ' Entrar' : ' Solicitar Acesso'}
                            </button>
                        </div>
                    </form>
                    <br />

                    <div className="center message">
                        <a onClick={() => this.changeLoginMode()}>
                            {loginMode ? 'Solicitar Acesso' :
                                'Já é Cadastrado? Faça Login'}
                        </a>
                    </div>

                </div>
                <Messages />
            </div>
        )
    }
}
const selector = formValueSelector('authForm')

Auth = reduxForm({
    form: 'authForm',
    validate
})(Auth)

Auth = connect(
    state => ({
        initialValues: {
            loginMode: true,
        }
    })
)(Auth)

const mapStateToProps = state => ({
    loading: state.auth.loading,
    loginMode: selector(state, 'loginMode'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    singup
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth)