import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class UserInfo extends Component {

    constructor(props){
        super(props)
        this.state = { open: false }
    }

    changeOpen(){
        this.setState({ open: !this.state.open })
    }

    open(){
        this.setState({ open: true })
    }

    render() {
        //const { email } = this.props.user || ''
        const { photoURL, nome, usuario } = this.props.usuario || ''
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()} onMouseEnter={() => this.open()} 
                        className={`dropdown user user-menu ${this.state.open ? 'open' :
                        ''}`}>
                            <a href="javascript:;" onClick={() => this.changeOpen()}
                                aria-expanded={this.state.open ? 'true' : 'false'}
                                className="dropdown-toggle"
                                data-toggle="dropdown">
                                <img src={ photoURL || "user-sem-foto.png" }
                                    className="user-image" alt="User Image" />
                                <span className="hidden-xs">{ nome }</span>
                            </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src={ photoURL || "user-sem-foto.png" }
                                    className="img-circle" alt="User Image" />
                                <p>{ nome }<small>{ '@'+usuario }</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#alterar-senha" className="btn btn-default btn-flat">Alterar Senha</a>
                                </div>
                                
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ usuario: state.auth.user })
const mapDispathToProps = dispath => bindActionCreators({ logout }, dispath)
export default connect(mapStateToProps, mapDispathToProps) (UserInfo)