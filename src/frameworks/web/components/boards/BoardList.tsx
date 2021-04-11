import * as React from 'react'
import styled from 'styled-components'
import { IBoardVM } from '../../vm/Board'
import BoardItem from './BoardItem'
import CommentItem from './CommentItem'

interface IProps {
  list: Array<IBoardVM>;
}

const BoardList: React.FC<IProps> = (props) => {
  const { list } = props

  return (
    <div>
      {list.length > 0 && (
        <$boardUl>
          {list.map(board => (
            <li key={board.id}>
              <BoardItem board={board} />
              <$commentArea>
                {board.comments.map(comment => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </$commentArea>
            </li>
          ))}
        </$boardUl>
      )}
    </div>
  )
}

export default BoardList

const $boardUl = styled.ul`
  border-top: 1px solid #eee;
  padding: 0;
  list-style: none;
`

const $commentArea = styled.ul`
  background: #f5f5f5;
`