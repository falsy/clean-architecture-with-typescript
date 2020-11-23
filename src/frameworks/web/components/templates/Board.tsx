import * as React from "react"
import styled from 'styled-components'
import Header from '../sections/Header'
import BaordSection from '../sections/BoardSection'

const BoardContent = styled.div`
  padding: 30px;
`

const Board: React.FC = () => {

  return (
    <div className={"board"}>
      <Header />
      <BoardContent>
        <BaordSection />
      </BoardContent>
    </div>
  )
}

export default Board