/* eslint-disable react-hooks/rules-of-hooks */
import { API_URL } from "../constants"
import repositoriesFn from "./repositories"
import useCasesFn from "./useCases"
import presentersFn from "./presenters"

export default function di() {
  const repositories = repositoriesFn(API_URL)
  const useCases = useCasesFn(repositories)
  const presenters = presentersFn(useCases)

  return presenters
}
