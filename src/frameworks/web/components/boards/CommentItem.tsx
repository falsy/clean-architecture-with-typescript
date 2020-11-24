import * as React from "react"
import styled from 'styled-components'
import { ICommentEntity } from '@domains/entities/interfaces/iComment'

const S_CommentItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const S_CommentText = styled.p`
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  line-height: 60px;
  margin: 0;
`

interface IProps {
  comment: ICommentEntity
}

const CommentItem: React.FC<IProps> = (props) => {
  const { comment: { author, content, createAt } } = props
  const createDate = new Date(createAt)

  return (
    <S_CommentItem>
      <S_CommentText>&rsaquo;</S_CommentText>
      <S_CommentText>{author}</S_CommentText>
      <S_CommentText>{content}</S_CommentText>
      <S_CommentText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</S_CommentText>
    </S_CommentItem>
  )
}

export default CommentItem