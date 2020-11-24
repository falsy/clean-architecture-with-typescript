import * as React from "react"
import { useEffect } from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { IBoardStateGroup } from '@frameworks/web/redux/interfaces/iBoard'
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'
import BoardList from './BoardList'
import AddBoard from './AddBoard'
import BoardVM from '@frameworks/web/vm/Board'

import di from '@di'

const S_BoardSectionArea = styled.section`
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
`

const S_SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
`

const BoardSection: React.FC = () => {
  const dispatch = useDispatch()

  const list: Array<IBoardEntity> = useSelector((state: IBoardStateGroup) => state.board.list)
  const boardVMList = list.map(boardEntity => new BoardVM(boardEntity))

  useEffect(() => {
    const asyncFnc = async () => {
      dispatch(await di.board.getBoards())
    }
    asyncFnc()
  }, [])

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await di.board.insertBoard(author, content)
    if (resStatus) {
      dispatch(await di.board.getBoards())
    }
  }

  return (
    <>
      <S_BoardSectionArea>
        <S_SectionTitle>Board</S_SectionTitle>
        <BoardList list={boardVMList} />
      </S_BoardSectionArea>
      <S_BoardSectionArea>
        <S_SectionTitle>Add Post</S_SectionTitle>
        <AddBoard insertFnc={insertFnc} />
      </S_BoardSectionArea>
    </>
  )
}


export default BoardSection