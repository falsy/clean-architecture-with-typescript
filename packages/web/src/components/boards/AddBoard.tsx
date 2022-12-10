import React, { useState } from 'react'
import styled from 'styled-components'

import LongBtn from '../commons/LongBtn'
import Input from '../commons/Input'

interface IProps {
  insertFnc(author: string, content: string): void
}

const BoardList: React.FC<IProps> = (props) => {
  const { insertFnc } = props
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (event.target.name === 'author') {
      setAuthor(value)
    }
    if (event.target.name === 'content') {
      setContent(value)
    }
  }

  const handleClickInsertBoard = () => {
    setAuthor('')
    setContent('')
    insertFnc(author, content)
  }

  const handleKeyDownInsertBoard = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      handleClickInsertBoard()
    }
  }

  return (
    <section>
      <$addBtnArea>
        <$authorBox>
          <Input type="text" name="author" placeholder="author" onChange={handleChangeInput} onKeyDown={null} value={author} />
        </$authorBox>
        <$contentBox>
          <Input type="text" name="content" placeholder="content" onChange={handleChangeInput} onKeyDown={handleKeyDownInsertBoard} value={content} />
        </$contentBox>
        <$addBox>
          <LongBtn type="button" value="Add" onClick={handleClickInsertBoard} />
        </$addBox>
      </$addBtnArea>
    </section>
  )
}

export default BoardList

const $addBtnArea = styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`

const $authorBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const $contentBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const $addBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 80px;
`