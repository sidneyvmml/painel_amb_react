import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SemPermissao extends Component {

    render() {
        return (
            <div className='fixed-height'>
                <Content>
                    <div className="center-horizontal center-text">
                        <h4>Usuário sem Permissão</h4>
                        Você não possui acesso a esta página.
                    </div>                     
                </Content>  
            </div>
        )
    }
}

export default SemPermissao