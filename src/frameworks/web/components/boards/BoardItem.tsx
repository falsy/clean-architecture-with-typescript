import * as React from "react"
import styled from 'styled-components'
import { IBoardData } from '@domains/aggregates/interfaces/iBoard'

const SBoardItem = styled.div`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const SBoardText = styled.p`
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  line-height: 60px;
  margin: 0;
`

interface IProps {
  board: IBoardData
}

const BoardItem: React.FC<IProps> = (props) => {
  const { board: { id, author, content, createAt } } = props
  const createDate = new Date(createAt)

  return (
    <SBoardItem>
      <SBoardText>{id}</SBoardText>
      <SBoardText>{author}</SBoardText>
      <SBoardText>{content}</SBoardText>
      <SBoardText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</SBoardText>
    </SBoardItem>
  )
}

export default BoardItem