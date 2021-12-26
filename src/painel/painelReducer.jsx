const INITIAL_STATE = {
    senhasChamadas: [],
    senhaAtual: {},
    loading: false,
}
import * as types from '../actionsTypes'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_SENHAS_CHAMADAS:
            return { ...state, senhasChamadas: action.payload, loading: false }
        case types.GET_SENHA_ATUAL:
            return { ...state, senhaAtual: action.payload, loading: false }
        default:
            return state
    }
}