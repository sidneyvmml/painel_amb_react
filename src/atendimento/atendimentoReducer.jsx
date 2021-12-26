const INITIAL_STATE = {
    atendimentosDoDia: [],
    senhasDoDia: [],
    loading: false,
    tiposAtendimento: []
}
import * as types from '../actionsTypes'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_ATENDIMENTOS_DO_DIA:
            return { ...state, atendimentosDoDia: action.payload, loading: false }
        case types.GET_SENHAS_DO_DIA:
            return { ...state, senhasDoDia: action.payload, loading: false }
        case types.GET_TIPOS_ATENDIMENTO:
            return { ...state, tiposAtendimento: action.payload, loading: false }
        default:
            return state
    }
}