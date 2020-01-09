export interface SessionRepositoryImpl {
  login(id: string, pw: string): Promise<string>
}