import { LOGIN, IReducer } from '@frameworks/mobile/redux/interfaces/iSession'
import { IToken, ILoginAction } from '@adapters/presenters/action-interfaces/iSession'

const initState: IToken = {
  token: ''
}

const session: IReducer = (state = initState, action: ILoginAction): IToken => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.payload.token
      }
    default:
      return {
        ...state
      }
  }
}

export default session