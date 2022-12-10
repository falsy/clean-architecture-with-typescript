import { Platform } from 'react-native'

import BoardRepository from 'adapter/src/repositories/Board'
import SessionRepository from 'adapter/src/repositories/Session'
import { IInfrastructures } from './infrastructures'

export interface IRepositories {
  session: SessionRepository
  board: BoardRepository
}

export default (infrastructure: IInfrastructures): IRepositories => {
  const baseURL = Platform.OS === 'ios' ? 'http://localhost:7777' : 'http://10.0.2.2:7777'
  return {
    session: new SessionRepository(baseURL, infrastructure.http, infrastructure.storage),
    board: new BoardRepository(baseURL, infrastructure.http)
  }
}
