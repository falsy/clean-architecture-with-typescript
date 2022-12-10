import React from 'react'
import styled from 'styled-components'

import { ICommentEntity } from 'domain/src/entities/Comment'

interface IProps {
  comment: ICommentEntity
}

const CommentItem: React.FC<IProps> = (props) => {
  const { comment: { author, content, createAt } } = props
  const createDate = new Date(createAt)

  return (
    <$commentItem>
      <$commentText>&rsaquo;</$commentText>
      <$commentText>{author}</$commentText>
      <$commentText>{content}</$commentText>
      <$commentText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</$commentText>
    </$commentItem>
  )
}

export default CommentItem

const $commentItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const $commentText = styled.p`
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  line-height: 60px;
  margin: 0;
`