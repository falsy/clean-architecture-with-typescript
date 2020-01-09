export interface RemoteInfrastructureImpl {
  login(id: string, pw: string): Promise<string>
}