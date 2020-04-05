import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';
import useCases from '@domains/useCases';
import BoardPresenter from './Board';
import SessionPresenter from './Session';

const cInfrastructures = infrastructures();
const cRepositorires = repositories(cInfrastructures);
const cUseCases = useCases(cRepositorires);

export default {
    board: new BoardPresenter(cUseCases.board),
    session: new SessionPresenter(cUseCases.session)
};