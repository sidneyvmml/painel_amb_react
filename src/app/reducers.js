import { combineReducers } from 'redux'
import TabReducer from '../common/tab/tabReducer'
import UsuarioReducer from '../usuario/usuarioReducer'
import ModalsReducer from '../modals/modalsReducer'
import AuthReducer from '../auth/authReducer'
import AtendimentoReducer from '../atendimento/atendimentoReducer'
import LocalAtendimentoReducer from '../localAtendimento/localAtendimentoReducer'
import PainelReducer from '../painel/painelReducer'

import { reducer as FormReducer } from 'redux-form'
import { reducer as ToastReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    tab: TabReducer,
    form: FormReducer,
    toastr: ToastReducer,
    usuario: UsuarioReducer,
    modals: ModalsReducer,
    auth: AuthReducer,
    atendimento: AtendimentoReducer,
    localAtendimento: LocalAtendimentoReducer,
    painel: PainelReducer
})

export default rootReducer
