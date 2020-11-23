import * as React from "react"
import { useEffect } from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { IBoardStateGroup } from '@frameworks/web/redux/interfaces/iBoard'
import di from '@di/index'
import BoardList from '../boxs/BoardList'
import AddBoard from '../boxs/AddBoard'
import { IBoardEntity } from '@domains/aggregates/interfaces/iBoard'
import BoardVM from '@adapters/vms/Board'

const SBoardSectionArea = styled.section`
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
`

const SSectionTitle = styled.h2`
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
    <div className={"board-section"}>
      <SBoardSectionArea>
        <SSectionTitle>Board</SSectionTitle>
        <BoardList list={boardVMList} />
      </SBoardSectionArea>
      <SBoardSectionArea>
        <SSectionTitle>Add Post</SSectionTitle>
        <AddBoard insertFnc={insertFnc} />
      </SBoardSectionArea>
    </div>
  )
}


export default BoardSection