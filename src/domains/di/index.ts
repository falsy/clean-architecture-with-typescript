import infrastructures from '../../adapters/infrastructures';
import repositories from '../../adapters/repositories';
import useCases from '../../domains/useCases';

const infrastructure = infrastructures();
const repository = repositories(infrastructure);
const useCase = useCases(repository);

export default useCase;