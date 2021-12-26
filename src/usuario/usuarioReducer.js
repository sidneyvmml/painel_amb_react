const INITIAL_STATE = {
    loading: false,
    usuarios: []
}
import * as types from '../actionsTypes'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.LOADING_LISTA_USUARIO:
            return { ...state, loading: action.payload }
        case types.LISTA_USUARIO_FETCHED:
            return { ...state, usuarios: action.payload, loading: false }
        case types.USUARIO_UPDATED:
            return { ...state, loading: false }
        default:
            return state
    }
}