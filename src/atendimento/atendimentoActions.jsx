import axios from 'axios'
import consts from '../consts'
import { toastr } from 'react-redux-toastr'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { reset } from 'redux-form'
import * as types from '../actionsTypes'
const io = require('socket.io-client')
const socket = io.connect(consts.API_URL)

const INITIAL_VALUES = {}

export function getAtendimentosDia() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/atendimento')
            .then(resp => {
                dispatch({ type: types.GET_ATENDIMENTOS_DO_DIA, payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function saveSenha(values, prioridade) {
    return dispatch => {
        axios.post(consts.API_URL + '/oapi/senha', {
            prontuario: values.PRONTUARIO || null,
            especialidade: values.ESPECIALIDADE || '',
            nome: values.NOME || '',
            tipo: values.TIPO || '',
            unidade: values.UNIDADE || '',
            prioridade: values.PRIORIDADE || prioridade
        }).then(response => {
            dispatch(getSenhasDoDia())
            dispatch(reset('atendimentoAvulsoForm'))
            if (response.data.message == 'ok') {
                socket.emit('fila-servidor')
                toastr.success('Sucesso', 'Paciente enviado para fila.')
            }
            else {
                toastr.error('Erro', 'Paciente já se encontra na fila.')
            }

        }).catch(e => {
            toastr.error('Erro', e.response.data.code)
        })
    }
}

export function getSenhasDoDia() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/senha')
            .then(resp => {
                dispatch({ type: types.GET_SENHAS_DO_DIA, payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function getTiposAtendimento() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/tipoAtendimento')
            .then(resp => {
                dispatch({ type: types.GET_TIPOS_ATENDIMENTO, payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function atenderPaciente(id) {
    return dispatch => {
        const request = axios.put(consts.API_URL + '/oapi/senha/atender/' + id)
            .then(resp => {
                socket.emit('fila-servidor')
                toastr.success('Confirmação de Atendimento', 'Paciente foi removido da fila.')
                dispatch(getSenhasDoDia())
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function chamarSenha(senhaId, paciente, destino, destino_falado) {
    return dispatch => {
        const request = axios.put(consts.API_URL + '/oapi/senha/chamar/' + senhaId, { destino })
            .then(resp => {
                dispatch(notificar(paciente, destino, destino_falado))
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

function notificar(paciente, destino, destino_falado) {
    return dispatch => {
        socket.emit('notificacao-servidor', { paciente, destino, destino_falado })
    }
}