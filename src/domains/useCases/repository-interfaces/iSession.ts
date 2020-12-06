import { IUserDTO } from '@domains/dto/UserDTO'

export interface ISessionRepository {
  login(userDTO: IUserDTO): Promise<string>
  getToken(): Promise<string>
  setToken(token: string): void
  removeToken(): void
}