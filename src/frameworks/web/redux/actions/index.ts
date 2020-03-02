import infrastructures from '@adapters/infrastructures';
import repositories from '@adapters/repositories';
import useCases from '@domains/useCases';
import presenters from '@adapters/presenters';
import BoardActions from './Board';
import SessionActions from './Session';

const cInfrastructures = infrastructures();
const cRepositorires = repositories(cInfrastructures);
const cUseCases = useCases(cRepositorires);
const cPresenters = presenters(cUseCases);

export default {
  board: new BoardActions(cPresenters.board),
  session: new SessionActions(cPresenters.session)
};