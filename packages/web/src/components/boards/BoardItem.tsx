import * as React from 'react'
import styled from 'styled-components'
import { IBoardData } from '@domain/aggregates/Board'

interface IProps {
  board: IBoardData
}

const BoardItem: React.FC<IProps> = (props) => {
  const { board: { id, author, content, createAt } } = props
  const createDate = new Date(createAt)

  return (
    <$boardItem>
      <$boardText>{id}</$boardText>
      <$boardText>{author}</$boardText>
      <$boardText>{content}</$boardText>
      <$boardText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</$boardText>
    </$boardItem>
  )
}

export default BoardItem

const $boardItem = styled.div`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const $boardText = styled.p`
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  line-height: 60px;
  margin: 0;
`