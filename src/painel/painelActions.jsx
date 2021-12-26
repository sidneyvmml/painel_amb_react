import axios from 'axios'
import consts from '../consts'
import { toastr } from 'react-redux-toastr'
import * as types from '../actionsTypes'

export function getSenhasChamadas() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/senha/chamadas')
            .then(resp => {
                dispatch({ type: types.GET_SENHAS_CHAMADAS, payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function getSenhaAtual() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/senha/atual')
            .then(resp => {
                dispatch({ type: types.GET_SENHA_ATUAL, payload: resp.data[0] })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}