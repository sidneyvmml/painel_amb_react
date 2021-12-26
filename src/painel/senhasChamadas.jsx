import React, { Component } from 'react';

class SenhasChamadas extends Component {
    render() {
        return (
            <div>
                <div className="senha-left">
                    <p className="senha-chamada-text-paciente">{this.props.paciente}</p>
                    <p className="senha-chamada-text-destino">{this.props.destino}</p>
                </div>
            </div>
        );
    }
}

export default SenhasChamadas