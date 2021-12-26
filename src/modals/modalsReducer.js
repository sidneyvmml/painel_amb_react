const INITIAL_STATE = {
    esqueciSenha: false
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CHANGE_ESQUECISENHA':
            return { ...state, esqueciSenha: action.payload } 
        default:
            return state
    }
}