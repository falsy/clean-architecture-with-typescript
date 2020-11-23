import * as React from "react"
import styled from 'styled-components'
import { useState } from 'react'
import LongBtn from '../items/LongBtn'
import Input from '../items/Input'

const SAddBtnArea = styled.div`
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`

const SAuthorBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const SContentBox = styled.div`
  float: left;
  margin-right: 10px;
  width: 200px;
`

const SAddBox = styled.div`
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
      <SAddBtnArea>
        <SAuthorBox>
          <Input type="text" name="author" placeholder="author" onChange={handleChangeInput} onKeyDown={null} value={author} />
        </SAuthorBox>
        <SContentBox>
          <Input type="text" name="content" placeholder="content" onChange={handleChangeInput} onKeyDown={handleKeyDownInsertBoard} value={content} />
        </SContentBox>
        <SAddBox>
          <LongBtn type="button" value="Add" onClick={handleClickInsertBoard} />
        </SAddBox>
      </SAddBtnArea>
    </section>
  )
}

export default BoardList