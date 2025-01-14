/* eslint-disable react-hooks/rules-of-hooks */
import repositoriesFn from "./repositories"
import useCasesFn from "./useCases"
import presentersFn from "./presenters"

export default function di() {
  const repositories = repositoriesFn("http://localhost:3000")
  const useCases = useCasesFn(repositories)
  const presenters = presentersFn(useCases)

  return presenters
}
