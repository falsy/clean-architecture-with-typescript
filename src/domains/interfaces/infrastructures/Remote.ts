import { BoardData } from '../../interfaces/entities/board';
import { LoginInformation } from '../vo/session';

export interface TokenDTO {
  results: {
    token: string
  }
}

export interface BoardDTO {
  results: {
    list: Array<BoardData>
  }
}

export interface RemoteInfrastructureImpl {
  login(LoginInfoVO: LoginInformation): Promise<TokenDTO>
  getBoard(): Promise<BoardDTO>
}