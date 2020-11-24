import * as React from "react"
import styled from 'styled-components'
import { useState } from 'react'
import LongBtn from '../commons/LongBtn'
import Input from '../commons/Input'

const S_AddBtnArea = styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`

const S_AuthorBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const S_ContentBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const S_AddBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 80px;
`

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
      <S_AddBtnArea>
        <S_AuthorBox>
          <Input type="text" name="author" placeholder="author" onChange={handleChangeInput} onKeyDown={null} value={author} />
        </S_AuthorBox>
        <S_ContentBox>
          <Input type="text" name="content" placeholder="content" onChange={handleChangeInput} onKeyDown={handleKeyDownInsertBoard} value={content} />
        </S_ContentBox>
        <S_AddBox>
          <LongBtn type="button" value="Add" onClick={handleClickInsertBoard} />
        </S_AddBox>
      </S_AddBtnArea>
    </section>
  )
}

export default BoardList