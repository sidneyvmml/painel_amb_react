const userTokenKey = 'user:painel'
const INITIAL_STATE = {
    userToken: JSON.parse(localStorage.getItem(userTokenKey)),
    validToken: false,
    loading: false,
    message: ''
}
import * as types from '../actionsTypes'


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.VALIDATED_TOKEN:
            if (action.payload) {
                return { ...state, validToken: true, loading: false }
            } else {
                localStorage.removeItem(userTokenKey)
                return { ...state, validToken: false, userToken: null, user: null, loading: false }
            }
        case types.SET_USER_LOGGED:
            return { ...state, user: action.payload, loading: false }
        case types.SET_TOKEN_STORAGE:
            localStorage.setItem(userTokenKey, JSON.stringify(action.payload))
            return { ...state, validToken: true, loading: false, message: '', userToken: JSON.parse(localStorage.getItem(userTokenKey)) }
        case types.LOADING_AUTH_CHANGING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}