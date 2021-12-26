const INITIAL_STATE = {
    lista: false
}
import * as types from '../actionsTypes'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LOCAIS_ATENDIMENTOS:
            return { ...state, lista: action.payload }
        default:
            return state
    }
}
