export interface IToken {
  token: string
}

export interface ILoginAction {
  type: string
  payload: IToken
}

export interface ISessionActions {
  setToken(token: string): ILoginAction
}