import infrastructures from '../../adapters/infrastructures';
import repositories from '../../adapters/repositories';
import useCases from '../../domains/useCases'
import presenters from '../../adapters/presenters';
import actions from '../web/actions';
import Frameworks from '../';

const infrastructure = infrastructures();
const repository = repositories(infrastructure);
const useCase = useCases(repository);
const presenter = presenters(useCase);
const action = actions(presenter);

export default new Frameworks(presenter, action);