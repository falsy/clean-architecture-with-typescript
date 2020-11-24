import { ISessionRepository } from '@domains/useCases/repository-interfaces/iSession'
import IInfrastructure from '@adapters/infrastructures/interfaces'
import { IUserDTO } from '@domains/dto/UserDTO'

class SessionRepository implements ISessionRepository {

  constructor(
    private readonly infrastructure: IInfrastructure
  ) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.infrastructure.http.request({
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: userDTO.id,
        pw: userDTO.pw
      }
    })

    if(response?.token) return response.token
  }

  getToken(): string {
    return this.infrastructure.webStorage.get('token')
  }

  setToken(token: string): void {
    this.infrastructure.webStorage.set('token', token)
  }

  removeToken(): void {
    this.infrastructure.webStorage.remove('token')
  }

}

export default SessionRepository