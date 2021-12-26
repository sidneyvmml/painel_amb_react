import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'
import * as types from '../actionsTypes'
import { initialize, change } from 'redux-form'

export function logout() {
    return dispatch => {
        dispatch({ type: types.VALIDATED_TOKEN, payload: false })
    }
}

export function login(values) {
    return dispatch => {
        const { usuario, senha } = values

        dispatch({ type: types.LOADING_AUTH_CHANGING, payload: true })
        axios.post(consts.API_URL + '/oapi/users/getUserByUsernameAndPassword', { usuario, senha })
            .then(response => {
                dispatch({ type: types.SET_TOKEN_STORAGE, payload: { token: response.data.token } })
                dispatch(validateToken(response.data.token))
            })
            .catch(e => {
                dispatch({ type: types.LOADING_AUTH_CHANGING, payload: false })
                dispatch(change('authForm', 'senha', ''))
                toastr.error('Erro', e.response.data.code)
            })
    }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(consts.API_URL + '/oapi/auth/validateToken', { token })
                .then(resp => {
                    dispatch({ type: types.VALIDATED_TOKEN, payload: resp.data.valid })
                    dispatch({ type: types.SET_USER_LOGGED, payload: resp.data.user })
                })
                .catch(e => {
                    dispatch({ type: types.VALIDATED_TOKEN, payload: false })
                })
        } else {
            dispatch({ type: types.VALIDATED_TOKEN, payload: false })
        }
    }
}

export const singup = (values) => {
    return dispatch => {
        const { usuario, senha, senhaConfirmacao, nome } = values

        dispatch({ type: types.LOADING_AUTH_CHANGING, payload: true })
        axios.post(consts.API_URL + '/oapi/users', { usuario, senha, senhaConfirmacao, nome })
            .then(response => {
                dispatch({ type: types.LOADING_AUTH_CHANGING, payload: false })
                dispatch(initialize('authForm', { loginMode: true }))
                toastr.success('Sucesso:', 'Solicitação Enviada')
            })
            .catch(e => {
                dispatch({ type: types.LOADING_AUTH_CHANGING, payload: false })
                dispatch(change('authForm', 'usuario', ''))
                dispatch(change('authForm', 'senha', ''))
                dispatch(change('authForm', 'senhaConfirmacao', ''))
                toastr.error('Erro', e.response.data.code)
            })
    }
}