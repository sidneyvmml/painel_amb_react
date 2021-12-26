import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import consts from '../consts'
import * as types from '../actionsTypes'

const INITIAL_VALUES = {
}

export function init(values = INITIAL_VALUES) {
    return [
        initialize('editarPerfilForm', values)
    ]
}

export function getUsuarios() {
    return dispatch => {
        dispatch({ type: types.LOADING_LISTA_USUARIO, payload: true })
        const query = consts.API_URL + '/oapi/getUsers'
        const request = axios.get(query)
            .then(resp => {
                dispatch({ type: types.LISTA_USUARIO_FETCHED, payload: resp.data })
            })
            .catch(e => {
                dispatch({ type: types.LOADING_LISTA_USUARIO, payload: false })
            })
    }
}

export const update = (values) => {
    return dispatch => {
        const { usuario, senhaAtual, novaSenha, novaSenhaConfirmacao, nome } = values
        dispatch({ type: types.USUARIO_UPDATED, payload: true })
        axios.post(consts.API_URL + '/oapi/updateUser', { usuario, senhaAtual, novaSenha, novaSenhaConfirmacao, nome })
            .then(response => {
                if (response.status == 200) {
                    const newUser = {
                        usuario: values.usuario,
                        grupo: values.grupo,
                        token: values.token,
                        nome: values.nome,
                        ativo: values.ativo,
                        perfil: values.perfil
                    }
                    dispatch({
                        type: types.USER_FETCHED, payload: newUser
                    })
                    dispatch(init(newUser))
                    dispatch({ type: types.USUARIO_UPDATED })
                    toastr.success('Sucesso', 'Perfil atualizado.')
                }
                else {
                    dispatch({ type: types.USUARIO_UPDATED, payload: false })
                    toastr.error('Erro desconhecido', 'Procure o administrador do sistema.')
                }
            })
            .catch(e => {
                dispatch({ type: types.USUARIO_UPDATED, payload: false })
                e.response.data.errors.forEach(
                    error => toastr.error('Erro no Banco de Dados', error))
            })
    }
}