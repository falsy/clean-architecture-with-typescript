/* eslint-disable react-hooks/rules-of-hooks */
import { API_URL } from "../constants"
import repositoriesFn from "./repositories"
import useCasesFn from "./useCases"
import presentersFn from "./presenters"

export default function di(apiUrl = API_URL) {
  const repositories = repositoriesFn(apiUrl)
  const useCases = useCasesFn(repositories)
  const presenters = presentersFn(useCases)

  return presenters
}
