import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const boardList = atom({
  key: 'boardList',
  default: []
});

const boardListState = selector({
  key: 'boardListState',
  get: ({ get }) => get(boardList)
});

export const useGetBoardList = () => {
  return useRecoilValue(boardListState)
}

export const useSetBoardList = () => {
  return useSetRecoilState(boardList)
}

export const useBoardListState = () => {
  return useRecoilState(boardList)
}