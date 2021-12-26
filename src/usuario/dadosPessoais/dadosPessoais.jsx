import React, { Component } from 'react';

import Content from '../../common/template/content'
import ContentHeader from '../../common/template/contentHeader'

class DadosPessoais extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Usuário" small="Dados Pessoais"/>
                <Content>
                </Content>
            </div>
        );
    }
}

export default DadosPessoais;