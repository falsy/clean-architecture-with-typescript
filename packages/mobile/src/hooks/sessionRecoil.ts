import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil'

const userToken = atom<string>({
  key: 'userToken',
  default: ''
})

const userTokenState = selector({
  key: 'userTokenState',
  get: ({get}) => get(userToken)
})

export const useGetToken = () => {
  return useRecoilValue(userTokenState)
}

export const useSetToken = () => {
  return useSetRecoilState(userToken)
}

export const useTokenState = () => {
  return useRecoilState(userToken)
}
