import infrastructures from './infrastructures';
import repositories from './repositories';
import useCases from './useCases';
import presenters from './presenters';

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = useCases(cRepositories);
const cPresenters = presenters(cUseCases);

export default {
  board: cPresenters.board,
  session: cPresenters.session,
};
