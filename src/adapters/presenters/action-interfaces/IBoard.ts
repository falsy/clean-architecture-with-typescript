import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'

export interface IBoardList {
  list: Array<IBoardEntity>
}

export interface IBoardAction {
  type: string
  payload: IBoardList
}

export interface IBoardActions {
  getBoards(boardEntityList: Array<IBoardEntity>): IBoardAction
}