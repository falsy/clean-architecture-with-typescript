import * as React from "react"
import styled from 'styled-components'
import { ICommentEntity } from '@domains/entities/interfaces/iComment'

const SCommentItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const SCommentText = styled.p`
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
    <SCommentItem>
      <SCommentText>&rsaquo;</SCommentText>
      <SCommentText>{author}</SCommentText>
      <SCommentText>{content}</SCommentText>
      <SCommentText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</SCommentText>
    </SCommentItem>
  )
}

export default CommentItem