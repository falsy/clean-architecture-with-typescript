import infrastructures from '@adapters/infrastructures'
import repositories from '@adapters/repositories'
import useCases from '@domains/useCases'
import actions from '@frameworks/mobile/redux/actions'
import presenters from '@adapters/presenters'

const cInfrastructures = infrastructures('mobile')
const cRepositorires = repositories(cInfrastructures)
const cUseCases = useCases(cRepositorires)
const cActions =  actions()
const cPresenters = presenters(cUseCases, cActions)

export default {
  board: cPresenters.board,
  session: cPresenters.session
}