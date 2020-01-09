import Repositories from '../interfaces/repositories';
import Session from './Session';

export default (repositories: Repositories) => {
  return {
    session: new Session(repositories.session)
  }
}