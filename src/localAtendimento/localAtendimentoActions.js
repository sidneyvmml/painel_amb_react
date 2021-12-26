
import axios from 'axios'
import consts from '../consts'
import { toastr } from 'react-redux-toastr'
import * as types from '../actionsTypes'

export function getLocaisAtendimentos() {
    return dispatch => {
        const request = axios.get(consts.API_URL + '/oapi/localAtendimento')
            .then(resp => {
                dispatch({ type: types.GET_LOCAIS_ATENDIMENTOS, payload: resp.data })
            })
            .catch(e => {
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function filtrarLocaisAtendimentos() {
    return dispatch => {
        console.log('filtrarLocaisAtendimentos')
    }
}