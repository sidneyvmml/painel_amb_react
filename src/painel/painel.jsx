import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Content from '../common/template/content'
import SenhaAtual from './senhaAtual'
import SenhasChamadas from './senhasChamadas'
import Artyom from 'artyom.js'
import If from '../utils/if'
import './painel.css'
import { getSenhasChamadas, getSenhaAtual } from './painelActions'
import consts from '../consts'

const io = require('socket.io-client')
const artyom = new Artyom()
const audio = new Audio('beep3.mp3')

//var pisca = 1
//var piscando = false
//var cont = 0

class Painel extends Component {

    constructor(props) {
        super(props)
        this.state = { paciente: '', destino: '', destino_falado: '', time: new Date().toLocaleString() }
    }

    componentWillMount() {
        this.props.getSenhasChamadas()
        this.props.getSenhaAtual()

        const socket = io.connect(consts.API_URL)
        socket.on('notificacao', (data) => {
            this.chamarSenha(data.paciente, data.destino, data.destino_falado)
        })
    }

    chamarSenha(paciente, destino, destino_falado) {
        this.setState({ paciente, destino, destino_falado })

        audio.play()

        artyom.say(paciente.toLowerCase() + ', ' + destino_falado.toLowerCase(), {
            lang: "pt-PT",
            onStart: () => {
                textoPaciente.style.color = '#FFD700'
                textoDestino.style.color = '#FFD700'
            },
            onEnd: () => {
                textoPaciente.style.color = '#fff'
                textoDestino.style.color = '#fff'
            }
        })

        this.props.getSenhasChamadas()
        this.props.getSenhaAtual()
        //cont = 0
        //this.piscar()
    }

    piscar() {
        if (cont < 8) {
            if (pisca == 1) {
                //cor secundária
                textoPaciente.style.color = '#FFD700'
                textoDestino.style.color = '#FFD700'
                pisca = 0
                cont++
            } else {
                //cor original
                textoPaciente.style.color = '#fff'
                textoDestino.style.color = '#fff'
                pisca = 1
                cont++
            }
            if (pisca == 1) {
                setTimeout(() => { this.piscar() }, 300)
            }
            else {
                setTimeout(() => { this.piscar() }, 1200)
            }

        }
        else {
            //cor original
            textoPaciente.style.color = '#fff'
            textoDestino.style.color = '#fff'
        }
    }

    renderSenhasChamadas() {
        const senhasChamadas = this.props.senhasChamadas
        return senhasChamadas.map((item) => (
            <SenhasChamadas key={item.id} paciente={item.nome} destino={item.destino} />
        ))
    }

    render() {
        return (
            <div className="main">
                <div className="painel-header">
                    <div className="div-header">
                        <img className="div-header-text" src="pestlz.png"></img>
                    </div>
                    <div className="div-header">
                        <span className="div-header-text">AMBULATÓRIO - CERIV</span>
                    </div>
                    <div className="div-header-hora">
                        <span className="div-header-text">{this.state.time}</span>
                    </div>
                </div>
                <div className="divFeia">
                </div>
                <div className="painel-senha-atual">
                    <SenhaAtual paciente={this.state.paciente || this.props.senhaAtual.nome} destino={this.state.destino || this.props.senhaAtual.destino} />
                </div>
                <div className="painel-senhas-chamadas">
                    <div className="div-teste"><p className="senha-chamada-text">Últimos Chamados</p></div>
                    {this.renderSenhasChamadas()}
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    senhasChamadas: state.painel.senhasChamadas,
    senhaAtual: state.painel.senhaAtual
})
export default connect(mapStateToProps, { getSenhasChamadas, getSenhaAtual })(Painel)