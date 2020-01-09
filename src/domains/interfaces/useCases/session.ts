export interface SessionUseCaseImpl {
  login(id: string, pw: string): Promise<string>
}