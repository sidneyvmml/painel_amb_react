import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../utils/if'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import { selectTab, showTabs } from '../common/tab/tabActions'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import AtendimentosLista from './atendimentosLista'
import FilaLista from './filaLista'
import AtendimentoAvulso from './atendimentoAvulso'
import { getAtendimentosDia, getSenhasDoDia } from './atendimentoActions'
import Messages from '../common/msg/messages'
import consts from '../consts'
import { logout } from '../auth/authActions'
const io = require('socket.io-client')
const socket = io.connect(consts.API_URL)

class Atendimento extends Component {

    componentWillMount() {
        this.props.selectTab('tabFila')
        this.props.showTabs('tabAtendimentos', 'tabNovoProntuario', 'tabFila')
        this.props.getAtendimentosDia()
        this.props.getSenhasDoDia()

        socket.on('fila', () => {
            this.props.getSenhasDoDia()
        })
    }

    renderTabs() {
        const { perfil } = this.props.auth.user
        if (perfil == 1 || perfil == 2) {
            return (
                <TabsHeader>
                    <TabHeader label='Fila' icon='users' target='tabFila' />
                    <TabHeader label='Atendimentos Marcados' icon='bars' target='tabAtendimentos' />
                    <TabHeader label='Atendimento Avulso' icon='question-circle-o' target='tabNovoProntuario' />
                    <li>
                        <a onClick={this.props.logout}>
                            Sair
                        </a>
                    </li>
                </TabsHeader>
            )
        }

        if (perfil == 3) {
            return (
                <TabsHeader>
                    <TabHeader label='Fila' icon='users' target='tabFila' />
                    <li>
                        <a onClick={this.props.logout}>
                            Sair
                        </a>
                    </li>
                </TabsHeader>
            )
        }
    }

    render() {
        const { user } = this.props.auth
        if (user) {
            return (
                <div>
                    <Content>
                        <div className="center-horizontal">
                            <Tabs>
                                {this.renderTabs()}
                                <TabsContent>
                                    <TabContent id='tabAtendimentos'>
                                        <AtendimentosLista list={this.props.atendimentosDoDia} />
                                    </TabContent>
                                    <TabContent id='tabNovoProntuario'>
                                        <AtendimentoAvulso />
                                    </TabContent>
                                    <TabContent id='tabFila'>
                                        <FilaLista list={this.props.senhasDoDia} />
                                    </TabContent>
                                </TabsContent>
                                <Messages />
                            </Tabs>
                        </div>
                    </Content>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({
    atendimentosDoDia: state.atendimento.atendimentosDoDia,
    senhasDoDia: state.atendimento.senhasDoDia,
    auth: state.auth
})
const mapDispathToProps = dispath => bindActionCreators({
    selectTab, showTabs, getAtendimentosDia, getSenhasDoDia, logout
}, dispath)
export default connect(mapStateToProps, mapDispathToProps)(Atendimento)
