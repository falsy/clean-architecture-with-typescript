import * as React from "react"
import styled from 'styled-components'
import Header from '../commons/Header'
import BoardSection from './BoardSection'

const S_BoardContent = styled.div`
  padding: 30px;
`

const Board: React.FC = () => {

  return (
    <div>
      <Header />
      <S_BoardContent>
        <BoardSection />
      </S_BoardContent>
    </div>
  )
}

export default Board