export interface SessionPresenterImpl {
  login(id: string, pw: string): Promise<string>
}