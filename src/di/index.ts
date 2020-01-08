import infrastructures from "../adapters/infrastructures";
import repositories from "../adapters/repositories";
import useCases from "../domains/useCases";
import presenters from "../adapters/presenters";
import Frameworks from "../frameworks";

const repository = repositories(infrastructures);
const useCase = useCases(repository);
const presenter = presenters(useCase);

export default new Frameworks(presenter);
