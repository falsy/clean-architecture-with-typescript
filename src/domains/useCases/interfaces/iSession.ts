import { IUserDTO } from '@domains/dto/UserDTO'

export interface ISessionUseCase {
  login(userDTO: IUserDTO): Promise<string>
  getToken(): string
  setToken(token: string): void
  removeToken(): void
}