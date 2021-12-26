import { toastr } from 'react-redux-toastr'


// ESQUECI SENHA
export function closeEsqueciSenha() {
    return dispatch => {
        dispatch({type: 'CHANGE_ESQUECISENHA', payload: false})
    }    
}

export function openEsqueciSenha() {
    return dispatch => {
        dispatch({type: 'CHANGE_ESQUECISENHA', payload: true})
    }    
}

export function sendPasswordResetEmail(email){
    return dispatch => {
        var auth = firebase.auth()
        auth.sendPasswordResetEmail(email).then( () => {
            dispatch(closeEsqueciSenha())
            toastr.success('Sucesso', 'Foi enviado um email para redifinição da senha.')            
        }, function(e) {
            if(e.message == 'There is no user record corresponding to this identifier. The user may have been deleted.')
                toastr.error('Erro', 'Não existe usuário correspondente a este endereço de email.')
            else
                toastr.error('Erro', e.message)
        })
    }
}
