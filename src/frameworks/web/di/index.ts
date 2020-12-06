import infrastructures from './infrastructures'
import repositories from './repositories'
import useCases from './useCases'
import actions from './actions'
import presenters from './presenters'

const cInfrastructures = infrastructures()
const cRepositorires = repositories(cInfrastructures)
const cUseCases = useCases(cRepositorires)
const cActions =  actions()
const cPresenters = presenters(cUseCases, cActions)

export default {
  board: cPresenters.board,
  session: cPresenters.session
}