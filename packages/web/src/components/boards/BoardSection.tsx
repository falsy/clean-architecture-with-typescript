import React, { useEffect } from 'react'
import styled from 'styled-components'

import BoardList from './BoardList'
import AddBoard from './AddBoard'

import { useBoardListState } from "../../hooks/boardRecoil"
import BoardVM from '../../vm/Board'
import di from '../../di'

const BoardSection: React.FC = () => {
  const [list, setList] = useBoardListState()
  const boardVMList = list.map(boardEntity => new BoardVM(boardEntity))

  useEffect(() => {
    const asyncFnc = async () => {
      setList(await di.board.getBoards())
    }
    asyncFnc()
  }, [])

  const insertFnc = async (author: string, content: string) => {
    const resStatus = await di.board.insertBoard(author, content)
    if (resStatus) {
      setList(await di.board.getBoards())
    }
  }

  return (
    <>
      <$boardSectionArea>
        <$sectionTitle>Board</$sectionTitle>
        <BoardList list={boardVMList} />
      </$boardSectionArea>
      <$boardSectionArea>
        <$sectionTitle>Add Post</$sectionTitle>
        <AddBoard insertFnc={insertFnc} />
      </$boardSectionArea>
    </>
  )
}


export default BoardSection

const $boardSectionArea = styled.section`
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
`

const $sectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 200;
`