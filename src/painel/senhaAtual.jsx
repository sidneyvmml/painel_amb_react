import React, { Component } from 'react';

class SenhaAtual extends Component {
    
    render() {
        return (
            <div className="painel-senha-atual-content">
                <p className="senha-atual-text-paciente" id="textoPaciente">{this.props.paciente}</p>
                <p className="senha-atual-text-destino" id="textoDestino">{this.props.destino}</p>
            </div>
        );
    }
}

export default SenhaAtual
