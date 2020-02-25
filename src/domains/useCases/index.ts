import IInfrastructures from '@interfaces/infrastructures';
import IRepositories from '@interfaces/repositories';
import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';
import Session from './Session';
import Board from './Board';

const infrastructure: IInfrastructures = infrastructures();
const repository: IRepositories = repositories(infrastructure);

export default {
  session: new Session(repository.session),
  board: new Board(repository.board)
}