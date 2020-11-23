import { IToken, ILoginAction } from "@adapters/presenters/action-interfaces/iSession"

export const LOGIN = 'LOGIN'

export interface ISessionStateGroup {
  session: IToken
}

export interface IReducer {
  (state: IToken, action: ILoginAction): IToken
}

