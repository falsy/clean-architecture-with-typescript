import { IHttp } from "../infrastructures/Http"
import { IStorage } from "../infrastructures/MobileStorage"
import { IUserDTO } from '@domain/dto/UserDTO'

class SessionRepository {

  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.http.request({
      method: 'POST',
      url: 'http://localhost:7777/login',
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

  getToken(): Promise<string> {
    return this.storage.get('token')
  }

  setToken(token: string): void {
    this.storage.set('token', token)
  }

  removeToken(): void {
    this.storage.remove('token')
  }

}

export default SessionRepository