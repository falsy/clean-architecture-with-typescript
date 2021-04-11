import * as React from 'react'
import { useEffect } from 'react'
import { useBoardListState } from "@hooks/boardRecoil"
import styled from 'styled-components'
import BoardVM from '../../vm/Board'
import BoardList from './BoardList'
import AddBoard from './AddBoard'

import di from '@di'

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