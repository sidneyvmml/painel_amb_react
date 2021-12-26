import './app.css'
import '../common/template/custom.css'
import '../auth/auth.css'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app'
import Auth from '../auth/auth'
import Bloqueado from '../aviso/bloqueado'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {

    componentWillMount() {
        if (this.props.auth.userToken) {
            this.props.validateToken(this.props.auth.userToken.token)
        }
    }

    render() {
        const { userToken, validToken } = this.props.auth
        if (userToken && validToken) {
            axios.defaults.headers.common['authorization'] = userToken.token
            return <App>{this.props.children}</App>
        } else if (!userToken && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)