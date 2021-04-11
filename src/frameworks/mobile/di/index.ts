import infrastructures from './infrastructures'
import repositories from './repositories'
import useCases from './useCases'
import presenters from './presenters'

const cInfrastructures = infrastructures()
const cRepositorires = repositories(cInfrastructures)
const cUseCases = useCases(cRepositorires)
const cPresenters = presenters(cUseCases)

export default {
  board: cPresenters.board,
  session: cPresenters.session
}