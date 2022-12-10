import BoardRepository from 'adapter/src/repositories/Board';
import SessionRepository from 'adapter/src/repositories/Session';
import { Platform } from 'react-native';

export default (infrastructure: any) => {
  const baseURL = Platform.OS === 'ios' ? 'http://localhost:7777' : 'http://10.0.2.2:7777'
  return {
    session: new SessionRepository(baseURL, infrastructure.http, infrastructure.storage),
    board: new BoardRepository(baseURL, infrastructure.http),
  };
};
