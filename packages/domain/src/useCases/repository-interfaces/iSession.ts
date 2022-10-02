import { IUserDTO } from '../../dto/UserDTO'

export interface ISessionRepository {
  login(userDTO: IUserDTO): Promise<string>
  getToken(): Promise<string>
  setToken(token: string): void
  removeToken(): void
}